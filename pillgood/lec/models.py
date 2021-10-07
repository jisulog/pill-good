from django.db import models

# Create your models here.
from django.db import models


# Create your models here.
class Lec(models.Model):
    lec_id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)
    content = models.TextField()
    room = models.CharField(max_length=10)
    date = models.DateField()
    time = models.TimeField()
    level = models.IntegerField()
    email = models.CharField(max_length=30)
    number = models.IntegerField()
    status = models.IntegerField()


class Image(models.Model):
    image_id = models.IntegerField(primary_key=True)
    lec_id = models.IntegerField()
    image_url = models.CharField(max_length=255)
