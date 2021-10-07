from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from serializers import PaySerializer
from pillgood.membership.models import Membership
from pillgood.membership.serializers import MembershipSerializer


@api_view(['GET'])
def membership_index(request):
    memberships = Membership.object.all()
    serializer = MembershipSerializer(memberships, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def membership_pay(request):
    serializer = PaySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Success!"})
    else:
        return Response({"message": "data not valid!"})
