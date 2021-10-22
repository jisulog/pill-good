from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Qna
from qna.serializers import QnaSerializer


@api_view(['GET'])
def qna_index(request):
    qnas = Qna.objects.all()
    serializer = QnaSerializer(qnas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def qna_detail(request, pk):
    qna = Qna.objects.get(qna_id=pk)
    serializer = QnaSerializer(qna, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def qna_create(request):
    serializer = QnaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
        return Response(serializer.data)
    else:
        print(serializer.errors)
        return Response(serializer.errors)


@api_view(['PUT'])
def qna_update(request, pk):
    qna = Qna.objects.get(qna_id=pk)
    serializer = QnaSerializer(instance=qna, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def qna_delete(request, pk):
    qna = Qna.objects.get(qna_id=pk)
    qna.delete()
    return Response('delete')


@api_view(['POST'])
def qna_answer(request, pk):
    qna = Qna.objects.get(qna_id=pk)
    serializer = QnaSerializer(instance=qna, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response({"message": "오류! 확인 후 다시 시도해주세요."})
