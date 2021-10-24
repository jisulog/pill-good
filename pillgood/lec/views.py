from rest_framework.decorators import api_view
from rest_framework.response import Response

from instructor.serializers import InstructorLecSerializer
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


@api_view(['PUT'])
def lec_count_plus(request, pk):
    lec = Lec.objects.get(pk=pk)
    print(request.data)
    if lec.number > lec.lec_count:
        lec.lec_count += 1
        print(lec)
        serializer = InstructorLecSerializer(instance=lec, data=lec)
        if serializer.is_valid():
            serializer.save()
            print(11)





@api_view(['POST'])            #예약 신청
def book_create(request, pk):
    print(request.data)
    serializerBook = BookSerializer(data=request.data)
    if serializerBook.is_valid():
        serializerBook.save()
        print(22)
        return Response(serializerBook.data)
    else:
        return Response(serializerBook.errors)



    # lec_id = pk
    # serializerBook = BookSerializer(data=request.data)
    # lec = Lec.objects.get(pk=pk)
    # if lec.lec_count < lec.number:
    #     print(lec.lec_count)
    #     lec.lec_count += 1
    #     print(lec.lec_count)
    #     serializerLec = LecSerializer(instance=lec, data=lec)
    #     if serializerLec.is_valid():
    #         serializerLec.save()
    # else:
    #     return Response({"message": "정원이 모두 찼습니다."})
    # if serializerBook.is_valid():
    #     serializerBook.save()
    #     return Response(serializerBook.data)













