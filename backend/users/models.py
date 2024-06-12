from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings

class UserProfile(models.Model):
    user=models.OneToOneField(get_user_model(),on_delete=models.CASCADE)
    role=models.CharField(max_length=100,choices=settings.ROLES,default='client')
    
    def __str__(self):
        return self.user.email
