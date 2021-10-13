from rest_framework import serializers
from user.models import User
from lec.models import Lec


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'intro']
        # fields = ['email', 'password', 'name', 'phone', 'intro', 'type', 'image']





