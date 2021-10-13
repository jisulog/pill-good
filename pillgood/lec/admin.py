from django.contrib import admin
from lec.models import Lec, Image
from manager.models import Book

# Register your models here.
admin.site.register(Lec)
admin.site.register(Book)
admin.site.register(Image)