from django.contrib.auth import get_user_model
from rest_framework import serializers

from membership.models import Pay
from membership.serializers import MembershipSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    password = serializers.CharField(max_length=128, write_only=True)
    name = serializers.CharField(max_length=10, required=False)
    phone = serializers.CharField(max_length=13, required=False)
    intro = serializers.CharField(required=False, allow_blank=True)
    image = serializers.CharField(required=False, allow_blank=True)
    type = serializers.IntegerField(required=False)
    is_active = serializers.IntegerField(required=False)

    class Meta:
        model = User
        fields = ['id', 'password', 'name', 'phone', 'intro', 'image', 'type', 'is_active']


# class PasswordSerializer(serializers.Serializer):
#     old_password = serializers.CharField(required=True)
#     new_password = serializers.CharField(required=False)
#
#     def validate_old_password(self, value):
#         user = self.context['request'].user
#         if not user.check_password(value):
#             raise serializers.ValidationError('비밀번호가 일치하지 않습니다.')
#
#     def save(self, **kwargs):
#         password = self.validated_data['new_password']
#         user = self.context['request'].user
#         user.set_password(password)
#         user.save()
#         return user

class PaySerializer(serializers.ModelSerializer):
    membership_id = MembershipSerializer(read_only=True)

    class Meta:
        model = Pay
        fields = ['pay_id', 'email', 'pay_type', 'remain', 'pay_date', 'end_date', 'membership_id', 'status']
