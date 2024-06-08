from django.urls import path
from .views import login,register,allUsers

urlpatterns = [
    path('login/', login, name='login'),
    path('register/', register, name='register'),
    path('users/', allUsers, name='users'),
]