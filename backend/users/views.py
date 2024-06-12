from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer, UserProfileSerializer
from django.contrib.auth import authenticate, login, logout
from .models import UserProfile


@api_view(["POST"])
def register(request):
    if request.method == "POST":
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Usuario creado exitosamente"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(
        {"error": "Método inválido"}, status=status.HTTP_405_METHOD_NOT_ALLOWED
    )


@api_view(["POST"])
def signIn(request):
    if request.method == "POST":
        data = request.data
        username = data.get("username")
        password = data.get("password")
        if not username or not password:
            return Response(
                {"error": "username y contraseña son requeridos"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = authenticate(request, username=username, password=password)

        if user is not None:
            try:
                profile = UserProfile.objects.get(user=user)
            except UserProfile.DoesNotExist:
                return Response(
                    {"error": "Perfil de usuario no encontrado"},
                    status=status.HTTP_404_NOT_FOUND,
                )

            login(request, user)
            profile_serializer = UserProfileSerializer(profile)
            print(profile_serializer.data)
            return Response(profile_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED
            )


""" @csrf_exempt
def login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get("email")
        password = data.get("password")

        try:
            user = User.objects.get(email=email)
            if check_password(password, user.password):
                user_data = {
                    "id": user.id,
                    "name": user.name,
                    "email": user.email,
                    "is_staff": user.is_staff,
                }
                return JsonResponse({"message": "Login successful!", "user": user_data})
            else:
                return JsonResponse({"error": "Invalid email or password"}, status=400)
        except User.DoesNotExist:
            return JsonResponse({"error": "Invalid email or password"}, status=400)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405) """
