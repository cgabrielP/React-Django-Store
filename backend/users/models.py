from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    is_staff= models.BooleanField(default=False)
    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def __str__(self):
        return self.email
