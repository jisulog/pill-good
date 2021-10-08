from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from lec.serializers import LecSerializer, BookSerializer
from lec.models import Lec


# Create your views here.

@api_view(['GET'])
def lec_index(request):           #전체 강의 리스트 : 회원시점
    lecs = Lec.objects.all()
    serializer = LecSerializer(lecs, many=True)
    return Response(serializer.data)


@api_view(['GET'])                # 강의 상세 : 회원시점
def lec_detail(request, pk):
    lec = Lec.objects.get(id=pk)
    serializer = LecSerializer(lec, many=False)
    return Response(serializer.data)


@api_view(['POST'])            #예약 생성 : 회원 시점
def book_create(request):
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "book Sucess!"})




