from rest_framework.decorators import api_view
import user
from .serializers import UserSerializer, LoginSerializer, HelpSerializer, UpdateSerializer
from .models import User
from rest_framework.response import Response
import re


@api_view(['POST'])
def join(request):
    """
    회원가입 뷰
    """
    validationEmail = re.compile(r'^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
    emailCheck = validationEmail.match(request.data['email'])
    if emailCheck is None:
        return Response({'message': '이메일 형식을 바르게 입력하세요.'})

    validationPW = re.compile(r'^[a-zA-Z0-9_]{8,}$')
    passwordCheck = validationPW.match(request.data['password'])
    if passwordCheck is None:
        return Response({'message': '비밀번호는 영문자와 숫자를 포함하여 8자 이상 입력하세요'})

    validationPhone = re.compile(r'\d{2,3}-\d{3,4}-\d{4}')
    phoneCheck = validationPhone.match(request.data['phone'])
    if phoneCheck is None:
        return Response({'message': '연락처 형식을 바르게 입력하세요.'})

    check = User.objects.filter(email=request.data['email'])
    if check:
        return Response({'message': '해당 이메일의 회원이 존재합니다.'})

    serializer = UserSerializer(data=request.data)  # 새로운 데이터가 넘어올 때는 역직렬화, serializer이 직렬화 역직렬화 두 가지 기능
    if not serializer.is_valid():
        return Response({'message': '회원 정보를 정확히 입력해주세요.'})
    if serializer.is_valid():
        serializer.save()
        return Response({'message': '회원가입이 완료되었습니다!'})



@api_view(['POST'])
def login(request):
    """
    로그인 뷰
    """

    validationEmail = re.compile(r'^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
    emailCheck = validationEmail.match(request.data['email'])
    if emailCheck is None:
        return Response({'message': '이메일 형식을 바르게 입력하세요.'})

    serializer = LoginSerializer(data=request.data)

    if not serializer.is_valid(raise_exception=True):
        return Response({"message": "이메일과 비밀번호를 입력해주세요!"})
    if serializer.validated_data['email'] == "None":
        return Response({'message': '이메일 또는 비밀번호가 정확하지않습니다.'})
    return Response({"message": '방문을 환영합니다!', "email": serializer.validated_data['email'], "id": serializer.validated_data['id'], "is_admin": serializer.validated_data['is_admin']})



@api_view(['POST'])
def user_help(request):
    """
    이메일 찾기 뷰(name, phone)
    """
    serializer = HelpSerializer(data=request.data)

    searchEmail = User.objects.filter(name=request.data['name'], phone=request.data['phone'])
    print(searchEmail)
    # <QuerySet [<User: finish finish@test.com>]>
    # {
    # "name":"finish",
    # "phone":"031-000-0000"
    # }
    if searchEmail:
        print(searchEmail[0])
        return Response({'message': searchEmail[0]})
    # TypeError: Object of type User is not JSON serializable
    if not searchEmail:
        return Response({"message": "해당 정보와 일치하는 이메일이 존재하지 않습니다."})



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


