from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Qna
from .serializers import QnaSerializer


@api_view(['GET'])
def qna_index(request):
    qna = Qna.object.all()
    serializer = QnaSerializer(qna, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def qna_detail(request, pk):
    qna = Qna.object.get(id=pk)
    serializer = QnaSerializer(qna, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def qna_create(request):
    serializer = QnaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Success!"})
    else:
        return Response({"message": "data not valid!"})


@api_view(['PUT'])
def qna_update(request, pk):
    qna = Qna.object.get(id=pk)
    serializer = QnaSerializer(instance=qna, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Success!"})


@api_view(['DELETE'])
def qna_delete(pk):
    qna = Qna.object.get(id=pk)
    qna.delete()
    return Response({"message": "Success!"})


@api_view(['POST'])
def qna_answer(request, pk):
    qna = Qna.object.get(id=pk)
    serializer = QnaSerializer(instance=qna, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Success!"})
    else:
        return Response({"message": "data not valid!"})
