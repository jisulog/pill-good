from rest_framework import serializers
from user.models import User
from lec.models import Lec


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'intro']

class InstructorLecSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'room', 'date', 'time', 'level', 'email', 'number', 'status']
#








