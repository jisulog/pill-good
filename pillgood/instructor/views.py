from django.http import HttpResponse
from lec.models import Lec
from rest_framework.decorators import api_view
from rest_framework.response import Response
from user.models import User
from instructor.serializers import UserSerializer, InstructorLecSerializer
from manager.models import Book
from lec.serializers import BookSerializer, LecSerializer


# Create your views here.


@api_view(['GET'])
def user_list(request, pk):
    """
    회원목록
    """
    book_join = Book.objects.filter(lec_id_id=pk).select_related('email')
    print(book_join)
    user_lec = User.objects.filter(id__in=[book.email_id for book in book_join])
    serializer = UserSerializer(user_lec, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def lec_list(request, id):
    """
    강의 목록 = 자신의 강의
    """
    login_user = id  # 강사 권한 체크 (type 2 = 강사), 현재는 임시로 type 1 설정
    lecs = Lec.objects.filter(email_id=login_user)  # 로그인 한 유저 = 강의를 생성한 유저 (강사 본인이 생성한 강의)
    serializer = InstructorLecSerializer(lecs, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def lec_create(request):
    """
    강의 등록
    """
    # if request.user.type == 1:          #강사 권한 체크
    serializer = LecSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        print(request.data)
        serializer.save()  # 등록할 때 항상 미승인 상태(status=1)
        print(serializer)
        return Response(serializer.data)
    return HttpResponse("권한이 없습니다")

# @api_view(['PUT'])         #강의 수정
# def lec_update(request, pk):
#         #강사 권한 체크 (현재는 관리자)
#         lec = Lec.objects.get(pk=pk)  #수정할 강의 선택
#         print(lec)
#         serializer = LecSerializer(instance=lec, data=request.data)
#         print(request.data)
#         if serializer.is_valid():
#             print(serializer)
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response({"message": "권한이 없습니다."})
