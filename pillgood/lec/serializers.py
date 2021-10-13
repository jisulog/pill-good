from rest_framework import serializers
from lec.models import Lec
from manager.models import Book


class LecSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'room', 'date', 'time', 'level', 'email', 'number', 'status']


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['book_id', 'email', 'lec_id', 'status']

