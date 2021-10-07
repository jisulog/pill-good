from rest_framework.response import Response
from rest_framework.decorators import api_view
from manager.serializer import MembershipSerializer, UserSerializer, LecSerializer, PaySerializer
from user.models import User
from lec.models import Lec
from membership.models import Pay
# Create your views here.

@api_view(['GET'])
def manager_user(request):
    users = User.object.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def manager_user_access(request, pk):
    user = User.object.get(id=pk)
    serializer = UserSerializer(instance=user, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def manager_user_detail(request, pk):
    user = User.object.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def manager_lec(request):
    lecs = Lec.object.all()
    serializer = LecSerializer(lecs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def manager_lec_detail(request, pk):
    lec = Lec.object.get(id=pk)
    serializer = LecSerializer(lec, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def manager_lec_access(request, pk):
    lec = Lec.object.get(id=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def manager_lec_reject(request, pk):
    lec = Lec.object.get(id=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def manager_lec_update(request, pk):
    lec = Lec.object.get(id=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def manager_lec_delete(request, pk):
    lec = Lec.object.get(id=pk)
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
    pays = Pay.object.all()
    serializer = PaySerializer(pays, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def manager_refund_detail(request, pk):
    pay = Pay.object.get(id=pk)
    serializer = PaySerializer(pay, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def manager_refund_access(request, pk):
    pay = Pay.object.get(id=pk)
    serializer = PaySerializer(instance=pay, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def manager_refund_reject(request, pk):
    pay = Pay.object.get(id=pk)
    serializer = PaySerializer(instance=pay, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)