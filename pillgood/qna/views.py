from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Q&A입니다.")


def detail():
    return None


def create():
    return None


def update():
    return None


def delete():
    return None


def answer():
    return None