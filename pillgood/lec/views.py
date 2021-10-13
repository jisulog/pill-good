from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from lec.serializers import LecSerializer, BookSerializer
from manager.models import Book
from lec.models import Lec

# Create your views here.

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
def book_create(request):                           #api 설계 할 때, 파라미터 공유.
    if request.user.type == 1:  #회원인지 확인
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"message": "데이터가 없습니다."})
    else:
        return Response({"message": "권한이 없습니다."})











