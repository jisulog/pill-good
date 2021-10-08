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
            # 주석 시 저장안됌, type_error : create_user() got an unexpected keyword argument 'intro' - 7line
            type=validated_data['type'],
            # image=validated_data['image'],
            # 주석 시 변경사항 확인예정, type_error : 7line create_user() got an unexpected keyword argument 'image' - 7line
            # join_date=validated_data['join_date'], # 주석 시 정상작동
            # last_login=validated_data['last_login'],
        )
        return user


    class Meta:
        model = User
        fields = ['email', 'password', 'name', 'phone', 'intro', 'type', 'image']
