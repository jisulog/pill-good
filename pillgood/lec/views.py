from django.http import HttpResponse

# Create your views here.
def lec_index(request):
    return HttpResponse("강의목록")

def lec_detail():
    return HttpResponse("강의상세")

def book_create():
    return HttpResponse("강의목록")