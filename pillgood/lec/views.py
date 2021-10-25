from rest_framework.decorators import api_view
from rest_framework.response import Response

from lec.models import Lec
from lec.serializers import LecSerializer, BookSerializer
from manager.models import Book
from manager.serializers import LecSerializer as MLecSerializer
from membership.models import Membership
from membership.serializers import MembershipSerializer


@api_view(['GET'])
def lec_index(request):
    """
    등록된 전체 강의 목록
    """
    lecs = Lec.objects.all()
    serializer = LecSerializer(lecs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def lec_detail(request, pk):
    """
    특정 강의 상세 페이지
    """
    lec = Lec.objects.get(pk=pk)
    serializer = LecSerializer(lec, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def book_index(request, pk):
    """
    예약 페이지 (강의 간단 설명) + 추후 캘린더 구현
    """
    lec = Lec.objects.get(pk=pk)
    serializer = LecSerializer(lec, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def lec_count_plus(request, pk):
    """
    강의 예약 숫자 늘리기
    """
    lec = Lec.objects.get(pk=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['POST'])
def membership_count_minus(request, pk):
    """
    멤버십 잔여횟수 빼기
    """
    exist = Membership.objects.filter(email_id=request.data['email'], status=1).count()
    if exist == 0:
        membership = Membership.objects.get(membership_id=pk)
        serializer = MembershipSerializer(instance=membership, data=request.data)
    else:
        return Response({"message": "멤버십 결제 후 예약해 주세요."})


@api_view(['POST'])
def book_create(request, pk):
    """
    예약 신청
    """
    exist = Book.objects.filter(email_id=request.data['email'], lec_id=request.data['lec_id'], status=1).count()
    if exist == 0:
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    else:
        return Response({"message": "이미 예약된 강의입니다."})
