from django.http import HttpResponse

def index(request):
    return HttpResponse("메인입니다.")
