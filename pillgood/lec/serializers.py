from rest_framework import serializers
from lec.models import Lec
from manager.models import Book
from user.models import User



class LecSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'room', 'date', 'time', 'level', 'email', 'number', 'status']
#
class LecCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lec
        fields = ['lec_id']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id']

class BookSerializer(serializers.ModelSerializer):
    lec_id = LecCreateSerializer()
    email = UserSerializer()

    class Meta:
        model = Book
        fields = ['book_id', 'email', 'lec_id', 'status']


# class BookSerializer(serializers.ModelSerializer):
#     lec_id = LecCreateSerializer(read_only=True)
#
#     class Meta:
#         model = Book
#         fields = ['book_id', 'email', 'lec_id', 'status']
#
#     def create(self, validated_data):
#         lec_dict = validated_data.pop('lec_id')
#         book = Book.objects.create(**validated_data)
#         lec_id = lec_dict.lec_id
#         book.lec_id_id = Lec.objects.get(lec_id=lec_id)
#         return book


