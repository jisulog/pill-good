from rest_framework import serializers
from .models import Qna


class QnaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Qna
        fields = ['qna_id', 'title', 'question_user', 'question', 'answer_user', 'answer', 'date']



