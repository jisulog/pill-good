from django.db import models
from django.utils import timezone


class User(models.Model):
    email = models.CharField(max_length=30, primary_key=True)
    password = models.CharField(max_length=255)
    name = models.CharField(max_length=10)
    phone = models.CharField(max_length=13)
    intro = models.TextField(null=True)
    type = models.IntegerField()
    image = models.CharField(max_length=200, null=True)
    join_date = models.DateTimeField(default=timezone.now)
    last_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
