# from django.shortcuts import render
from django.http import HttpResponse


def join():
    return HttpResponse("회원가입 페이지입니다.")


def login(request):
    return HttpResponse("로그인 페이지입니다.")


def user_help():
    return HttpResponse("이메일 찾기 페이지입니다.")


def user_update():
    return HttpResponse("임시 비밀번호 발급 페이지입니다.")
