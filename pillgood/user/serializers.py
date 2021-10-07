from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            name=validated_data['name'],
            phone=validated_data['phone'],
            intro=validated_data['intro'],
            type=validated_data['type'],
            image=validated_data['image'],
            join_date=validated_data['join_date'],
            last_date=validated_data['last_date'],
        )
        return user


    class Meta:
        model = User
        fields = ['email', 'password', 'name', 'phone', 'intro', 'type', 'image', 'join_date', 'last_Date']
