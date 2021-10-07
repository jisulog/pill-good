# Create your models here.
from django.conf import settings
from django.db import models


# Create your models here.


class Lec(models.Model):
    object = models.Manager()

    lec_id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)
    content = models.TextField()
    room = models.CharField(max_length=10)
    date = models.DateField()
    time = models.TimeField()
    level = models.IntegerField()
    email = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    number = models.IntegerField()
    status = models.IntegerField()


class Image(models.Model):
    object = models.Manager()

    image_id = models.IntegerField(primary_key=True)
    lec_id = models.ForeignKey('Lec', on_delete=models.CASCADE)
    image_url = models.CharField(max_length=255)
