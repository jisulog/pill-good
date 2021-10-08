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


@api_view(['POST'])
def membership_pay(request):
    serializer = PaySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Success!"})
    else:
        return Response({"message": "data not valid!"})
