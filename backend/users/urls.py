from django.urls import path
from .views import register,signIn,signOut,getUserDetail

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', signIn, name='login'),
    path('logout/', signOut, name='logout'),
    path('userDetail/', getUserDetail, name='userDetail')
] 
