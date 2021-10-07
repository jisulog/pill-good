from rest_framework import serializers
from pillgood.membership.models import Membership, Pay


class MembershipSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Membership
        fields = ['membership_id', 'number', 'period', 'price', 'type']


class PaySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pay
        fields = ['pay_id', 'email', 'pay_date', 'pay_type', 'remain',
                  'end_date', 'membership_id', 'refund_date', 'status']
