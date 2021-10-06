from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("memebership 목록 입니다.")


def pay():
    return None