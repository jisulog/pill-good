from rest_framework.decorators import api_view
import user
from .serializers import UserSerializer, LoginSerializer, HelpSerializer, UpdateSerializer
from .models import User
from rest_framework import generics
from rest_framework.response import Response


@api_view(['POST'])
def join(request):
    """
    회원가입 뷰
    """
    print(request.data)
    serializer = UserSerializer(data=request.data)  # 새로운 데이터가 넘어올 때는 역직렬화, serializer이 직렬화 역직렬화 두 가지 기능
    if serializer.is_valid():
        serializer.save()
    return Response({'message': 'success'})


@api_view(['POST'])
def login(request):
    """
    로그인 뷰
    """
    serializer = LoginSerializer(data=request.data)

    if not serializer.is_valid(raise_exception=True):
        return Response({"message": "Error."})
    if serializer.validated_data['email'] == "None":
        return Response({'message': 'fail'})

    response = {
        'success': 'True',
        # 'token': serializer.data['token']
    }
    return Response(response)


@api_view(['POST'])
def user_help(request):
    """
    이메일 찾기 뷰(name, phone)
    """
    serializer = HelpSerializer(data=request.data)

    if not serializer.is_valid(raise_exception=True):
        return Response({"message": "Error."})
    if serializer.validated_data['email'] == "None":
        return Response({'message': 'go sign up'})

    response = {
        'email': user.email
    }
    return Response(response)


@api_view(['POST'])
def user_update(request):
    """
    임시비밀번호 발급 뷰(email, name, phone)/ Email로 보내기 도전~!
    """
    serializer = UpdateSerializer(data=request.data)

    if not serializer.is_valid(raise_exception=True):
        return Response({"message": "Error."})
    if serializer.validated_data['name'] == "None":
        return Response({'message': 'fail'})

    response = {
        'Temporary password': 'my_new_password'
    }
    return Response(response)
