from rest_framework import serializers
from lec.models import Lec



class LecSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'room', 'date', 'time', 'level', 'email', 'number', 'status']



