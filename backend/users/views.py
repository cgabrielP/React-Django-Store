from rest_framework import status
from rest_framework.response import Response
from .serializers import RegisterSerializer, UserProfileSerializer
from django.contrib.auth import authenticate, login, logout
from .models import UserProfile
from django.contrib.auth.decorators import login_required
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import getUserProfile
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

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
            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED
            )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def signOut(request):
    logout(request)
    return JsonResponse({'message': 'Cierre de sesión exitoso'}, status=200)


@login_required
@csrf_exempt
def getUserDetail(request):
    """
    Vista para ver el perfil del usuario autenticado.
    """
    profile = getUserProfile(request.user)

    if profile:
        data = {
            "email": profile.user.email,
            "role": profile.role,
            # Otros campos del perfil si los tienes
        }
        return JsonResponse(data)
    else:
        return JsonResponse({"error": "Perfil no encontrado"}, status=404)
