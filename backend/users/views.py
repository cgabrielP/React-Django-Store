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
            return JsonResponse({'error': 'All fields are required'}, status=400)
        
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email is already registered'}, status=400)
        
        user = User.objects.create(name=name, surname=surname, email=email, password=password)
        return JsonResponse({'message': 'User created successfully!'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        try:
            user = User.objects.get(email=email, password=password)
            return JsonResponse({'message': 'Login successful!'})
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
