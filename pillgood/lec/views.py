from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from lec.serializers import LecSerializer, BookSerializer
from manager.models import Book
from lec.models import Lec


# Create your views here.
from user.models import User


@api_view(['GET'])             # 등록된 전체 강의 목록
def lec_index(request):
    lecs = Lec.objects.all()
    serializer = LecSerializer(lecs, many=True)
    return Response(serializer.data)



@api_view(['GET'])                    # 특정 강의 상세 페이지
def lec_detail(request, pk):
    lec = Lec.objects.get(pk=pk)
    serializer = LecSerializer(lec, many=False)
    return Response(serializer.data)




@api_view(['GET'])      # 예약 페이지 (강의 간단 설명) + 추후 캘린더 구현
def book_index(request, pk):
     lec = Lec.objects.get(pk=pk)
     serializer = LecSerializer(lec, many=False)
     return Response(serializer.data)


@api_view(['POST'])            #예약 신청
def book_create(request, pk):
    lec_id = pk
    print(request.data)
    data = {"lec_id": pk, "email": request.data['email'], "status": 1}
    print(data)
    serializer = BookSerializer(data=data)
    print(serializer)
    if serializer.is_valid():
        print(serializer)
        serializer.save()
        return Response(serializer.data)













