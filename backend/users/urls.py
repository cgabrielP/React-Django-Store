from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import register, signOut, getUserDetail

urlpatterns = [
    path("register/", register, name="register"),
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("logout/", signOut, name="logout"),
    path("profile/", getUserDetail, name="profile"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
