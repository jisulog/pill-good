from rest_framework import serializers

from member.serializers import UserSerializer
from .models import Qna


class QnaSerializer(serializers.ModelSerializer):
    #question_user = UserSerializer(read_only=False, )
    #answer_user = serializers.CharField(allow_null=True, required=False)
    answer = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Qna
        fields = ['qna_id', 'title', 'category', 'question_user', 'question', 'answer', 'date']

"""
    def to_representation(self, instance):
        response = super().to_representation(instance)
        # user = User.objects.get(id=)
        print(UserSerializer(instance.question_user).data)
        response['question_user'] = UserSerializer(instance.question_user).data
        return response
"""