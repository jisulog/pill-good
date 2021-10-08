from rest_framework.response import Response
from rest_framework.decorators import api_view
from user.serializers import UserSerializer
from lec.serializer import LecSerializer
from membership.serializers import MembershipSerializer, PaySerializer
from user.models import User
from lec.models import Lec
from membership.models import Pay
# Create your views here.

@api_view(['GET'])
def manager_user(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def manager_user_access(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(instance=user, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def manager_user_detail(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def manager_lec(request):
    lecs = Lec.objects.all()
    serializer = LecSerializer(lecs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def manager_lec_detail(request, pk):
    lec = Lec.objects.get(id=pk)
    serializer = LecSerializer(lec, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def manager_lec_access(request, pk):
    lec = Lec.objects.get(id=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def manager_lec_reject(request, pk):
    lec = Lec.objects.get(id=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def manager_lec_update(request, pk):
    lec = Lec.objects.get(id=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def manager_lec_delete(request, pk):
    lec = Lec.objects.get(id=pk)
    lec.delete()
    return Response('Delete Lec')

@api_view(['POST'])
def manager_membership(request):
    serializer = MembershipSerializer(request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def manager_refund(request):
    pays = Pay.objects.all()
    serializer = PaySerializer(pays, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def manager_refund_detail(request, pk):
    pay = Pay.objects.get(id=pk)
    serializer = PaySerializer(pay, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def manager_refund_access(request, pk):
    pay = Pay.objects.get(id=pk)
    serializer = PaySerializer(instance=pay, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def manager_refund_reject(request, pk):
    pay = Pay.objects.get(id=pk)
    serializer = PaySerializer(instance=pay, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)