from membership.models import Membership, Pay
from user.models import User
from lec.models import Lec
from rest_framework import serializers


class MembershipSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Membership
        fields = ['membership_id', 'number', 'period', 'price', 'type']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'name', 'phone', 'intro', 'type', 'image', 'join_date', 'last_date']


class LecSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lec
        fields = ['lec_id', 'title', 'content', 'room', 'date', 'time', 'level', 'email', 'number', 'status']


class PaySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pay
        fields = ['pay_id', 'email', 'pay_date', 'pay_type', 'remain', 'end_date', 'membership_id', 'refund_date',
                  'status']
