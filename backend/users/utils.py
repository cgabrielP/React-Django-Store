from django.shortcuts import get_object_or_404
from .models import UserProfile


def getUserProfile(user):
    return UserProfile.objects.filter(user=user).first()
