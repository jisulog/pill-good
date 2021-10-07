from django.http import HttpResponse
from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .serializers import UserSerializer


# 회원가입 기능 구현 1
# @api_view(['POST'])
# def join(request):
#     serializer = UserSerializer(data=request.data)
#     # if serializer.validate():
#     serializer.save()
#     return Response({"message": "회원가입이 완료되었습니다!"})

from django.shortcuts import render
from .serializers import UserSerializer
from .models import User
from rest_framework import generics

# 회원가입  기능 구현 2
class join(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# 로그인 기능 구현
# @api_view(['POST'])
# def login(request):
#     return HttpResponse("로그인 페이지입니다.")

# 이메일 찾기 기능 구현
@api_view(['GET'])
def user_help(request):
    return HttpResponse("이메일 찾기 페이지입니다.")

# 임시 비밀번호 발급 기능 구현
@api_view(['PUT'])
def user_update(request):
    return HttpResponse("임시 비밀번호 발급 페이지입니다.")
