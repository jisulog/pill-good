
from lec.serializer import LecSerializer
from lec.models import Lec
from rest_framework.decorators import api_view
from rest_framework.response import Response
from user.models import User



# Create your views here.

@api_view(['GET'])
def user_list(request):       #회원목록 (강사 권한 인증)
    users = User.objects.all()
    serializer = UserSerializer(lecs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def lec_list(request):               # 강의 목록 = 강사의 자신이 강의하는 목록(강사권한)
    lecs = Lec.objects.all()
    serializer = LecSerializer(lecs, many=True)
    return Response(serializer.data)



@api_view(['POST'])               #강의 등록 : 강사 시점
def lec_create(request):
    serializer = LecSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Sucess!"})


@api_view(['PUT'])         # 강의수정 : 강사시점
def lec_update(request, pk):
    lec = Lec.objects.get(id=pk)
    serializer = LecSerializer(instance=lec, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
