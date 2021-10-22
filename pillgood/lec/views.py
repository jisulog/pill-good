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
    lec_id =pk
    # data = {"lec_id": pk, "email": User.objects.filter(email = request.data['email']).id,"status":1 }
    data = {"lec_id": pk, "email": 1,"status":1 }

    print(data)
    serializer = BookSerializer(data=data)
    if serializer.is_valid():
       serializer.save()
    return Response(serializer.data)
    # lecs = Book.objects.get(email_id=login_user)
    # lec_ids = Lec.obects.select_related('lec_id').all
    # login_user = request.user.id
    # lecs = Book.objects.get(email_id=login_user)
    # serializer = BookSerializer(data=request.data)
    # if serializer.is_valid():          #try except로 바꿔서 error 원인 파악하기
    #     print(serializer.data)
    #     serializer.save()
    #     return Response(serializer.data)
    # else:
    #     return Response({"message": "데이터가 없습니다."})

    # else:
    #     return Response({"message": "권한이 없습니다."})

    #
    # lec = Lec.objects.get(lec_id=pk)
    # email_id = request.user.email
    # serializer = BookSerializer(data=request.data, lec_id_id=lec)
    # print(serializer)











