from rest_framework import serializers
from manager.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['book_id', 'email', 'lec_id', 'status']