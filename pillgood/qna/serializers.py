from rest_framework import serializers
from .models import Qna


class QnaSerializer(serializers.ModelSerializer):
    answer_user = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    answer = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Qna
        fields = ['qna_id', 'title', 'question_user', 'question', 'answer_user', 'answer']

    def get_answer(self, instance):
        serializers = self.__class__(instance.answer, many=True)
        serializers.bind('', self)
        return serializers.data
