from django.http import HttpResponse

# Create your views here.
def user_list(request):
    return HttpResponse("강의 목록")

def lec_detail():
    return HttpResponse("강의 목록")

def lec_create():
    return HttpResponse("강의 목록")

def lec_update():
    return HttpResponse("강의 목록")