from rest_framework import serializers
from .models import Qna


class QnaSerializer(serializers.ModelSerializer):
    answer_user = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    answer = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Qna
        fields = ['qna_id', 'title', 'category', 'question_user', 'question', 'answer_user', 'answer', 'date']

