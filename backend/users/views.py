from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        surname = data.get('surname')
        email = data.get('email')
        password = data.get('password')
        
        if not name or not surname or not email or not password:
            return JsonResponse({'error': 'Todos los campos son requeridos'}, status=400)
        
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email ya existente'}, status=400)
        
        user = User.objects.create(name=name, surname=surname, email=email, password=password)
        return JsonResponse({'message': 'Usuario creado exitosamente'})
    else:
        return JsonResponse({'error': 'Metodo invalido'}, status=405)
    
@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        try:
            user = User.objects.get(email=email, password=password)
            user_data={
                'id': user.id,
                'name': user.name,
                'email': user.email,
            }
            return JsonResponse({'message': 'Login successful!','user': user_data})
        except User.DoesNotExist:
            return JsonResponse({'error': 'Invalid email or password'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def allUsers(request):
    if request.method=='GET':
        users = list(User.objects.values())
        return JsonResponse(users, safe=False)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
