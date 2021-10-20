from rest_framework import serializers


from lec.serializers import LecSerializer
from manager.models import Book
from member.serializers import UserSerializer


class BookSerializer(serializers.ModelSerializer):
    email = UserSerializer(read_only=True)
    lec_id = LecSerializer(read_only=True)

    class Meta:
        model = Book
        fields = ['book_id', 'email', 'lec_id', 'status']