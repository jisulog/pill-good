from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from rest_framework.decorators import api_view
import user
from .serializers import UserSerializer, LoginSerializer, HelpSerializer, UpdateSerializer
from .models import User
from rest_framework.response import Response
from django.contrib.auth import authenticate, login



@api_view(['POST'])
def join(request):
    """
    회원가입 뷰
    """
    print(request.data)
    serializer = UserSerializer(data=request.data)  # 새로운 데이터가 넘어올 때는 역직렬화, serializer이 직렬화 역직렬화 두 가지 기능
    if serializer.is_valid():
        serializer.save()
        print("회원가입성공")
    return Response({'message': 'success'})


@api_view(['POST'])
def login(request):
    """
    로그인 뷰
    """
    print(request.data)

    # data 검사
    serializer = LoginSerializer(data=request.data)

    if not serializer.is_valid(raise_exception=True):
        return Response({"message": "Error."})
    if serializer.validated_data['email'] == "None":
        return Response({'message': 'fail'})
    print(serializer.validated_data['email'], serializer.validated_data['id'])
    # user = User.objects.filter(email=request.data["email"])
    # print(user)
    # userserializer = UserSerializer(user)
    # print(userserializer.data)
    # return Response(userserializer.data)
    return Response({"email":serializer.validated_data['email'], "id":serializer.validated_data['id']})

    # get 변경 후 Bad Request: /user/login/






    # TypeError: Object of type property is not JSON serializable

    # return Response(UserSerializer.data, request.data["email"])
    # TypeError: HTTP status code must be an integer.

    # return Response없으면 나는 error
    # AssertionError: Expected a `Response`,
    # `HttpResponse` or `HttpStreamingResponse`
    # to be returned from the view, but received a `<class 'NoneType'>`
"""
AttributeError: Got AttributeError when attempting to get a value for field `email` on serializer `UserSerializer`.
The serializer field might be named incorrectly and not match any attribute or key on the `QuerySet` instance.
Original exception text was: 'QuerySet' object has no attribute 'email'.
"""



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


