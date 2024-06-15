from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile


class RegisterSerializer(serializers.ModelSerializer):
    name = serializers.CharField(write_only=True)
    surname = serializers.CharField(write_only=True)
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["name", "surname", "email", "password"]

    def create(self, validated_data):
        username = validated_data["email"].split("@")[0]
        user = User.objects.create_user(
            username=username,
            first_name=validated_data["name"],
            last_name=validated_data["surname"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        UserProfile.objects.create(user=user)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__" 


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username","email","is_staff","last_name","first_name"]
