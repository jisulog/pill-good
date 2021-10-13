# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Membership
from .serializers import MembershipSerializer
from .serializers import PaySerializer


@api_view(['GET'])
def membership_index(request):
    memberships = Membership.objects.all()
    serializer = MembershipSerializer(memberships, many=True)
    return Response(serializer.data)


# 맴버십 결제
@api_view(['POST'])
def membership_pay(request):
    # 로그인 여부 권한 체크
    if request.user.is_authenticated:

        serializer = PaySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
    else:
        return Response({"message": "로그인 해주세요!"})
