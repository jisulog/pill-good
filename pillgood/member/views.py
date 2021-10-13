from rest_framework.decorators import api_view
from rest_framework.response import Response

from manager.models import Book
from manager.serializers import BookSerializer
from membership.models import Pay
from membership.serializers import PaySerializer
from user.models import User
from .serializers import UserSerializer


@api_view(['GET'])
def main(request):
    """
    회원정보 확인
    """

    # 로그인여부 체크해 접근 제한, 테스트 중이므로 주석처리
    # if request.user.is_authenticated:

    # 세션에서 로그인 유저 아이디 가져오기
    login_user = 1 #request.user.id

    # 유저정보 가져와서 serializer로 데이터 정렬
    user = User.objects.get(id=login_user)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

    # else:
    #     return Response({"message": "로그인을 해주세요"})


@api_view(['PUT'])
def update(request, member):
    """
    회원정보 업데이트, 비밀번호, 소개, 연락처 등
    """

    # 로그인여부 체크해 접근 제한, 테스트 중이므로 주석처리
    if request.user.is_authenticated:

        # 세션에서 로그인 유저 아이디 가져오기
        login_user = request.user.id

        # serializer로 데이터 정렬해 update
        user = User.objects.get(id=login_user)
        serializer = UserSerializer(instance=user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    else:
        return Response({"is_active": 0})


@api_view(['PUT'])
def delete(request):
    """
    회원 탈퇴 is_active 0으로 변경, 데이터 삭제X
    """

    # 로그인여부 체크해 접근 제한, 테스트 중이므로 주석처리
    if request.user.is_authenticated:

        # 세션에서 로그인 유저 아이디 가져오기
        login_user = request.user.id

        # serializer로 데이터 정렬해 update
        user = User.objects.get(id=login_user)
        serializer = UserSerializer(instance=user, data={"is_active": 0})

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    else:
        return Response({"message": 0})


@api_view(['GET'])
def paylist(request):
    """
    결제 조회
    """

    # 로그인여부 체크해 접근 제한, 테스트 중이므로 주석처리
    # if request.user.is_authenticated:

    # 세션에서 로그인 유저 아이디 가져오기
    login_user = request.user.id
    print(login_user)

    # pay정보 가져와서 serializer로 데이터 정렬
    pays = Pay.objects.filter(email=login_user)
    serializer = PaySerializer(pays, many=True)
    return Response(serializer.data)

    # else:
    #     return Response({"message": 0})


@api_view(['PUT'])
def pay_refund(request, pk):
    """
    환불
    """

    # 로그인여부 체크해 접근 제한, 테스트 중이므로 주석처리
    # if request.user.is_authenticated:

    # serializer로 데이터 정렬해 update
    pay = Pay.objects.get(id=pk)
    serializer = PaySerializer(instance=pay, data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)

    # else:
    #     return Response({"message": 0})


@api_view(['GET'])
def book(request):
    """
    예약한 강의 목록 보기
    """

    # 로그인여부 체크해 접근 제한, 테스트 중이므로 주석처리
    if request.user.is_authenticated:

        # 세션에서 로그인 유저 아이디 가져오기
        login_user = request.user.id

        # 예약정보 가져와서 serializer로 데이터 정렬
        books = Book.objects.filter(email_id=login_user)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

    else:
        return Response({"message": 0})


@api_view(['PUT'])
def book_cancel(request, pk):
    """
    예약한 강의 취소
    """

    if request.user.is_authenticated:

        # 요청 들어온 예약 정보 삭제
        book = Book.objects.get(book_id=pk)
        serializer = BookSerializer(instance=book, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    else:
        return Response({"message": 0})
