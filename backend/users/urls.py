from django.urls import path
from .views import register,signIn

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', signIn, name='login')
] 
