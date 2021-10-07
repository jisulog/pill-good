from django.db import models
from django.conf import settings
from lec.models import Lec

# Create your models here.
class Book(models.Model):
    object = models.Manager()
    book_id = models.IntegerField(primary_key=True)
    email = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    lec_id = models.ForeignKey(Lec, on_delete=models.CASCADE)
    status = models.IntegerField()

    def __str__(self):
        return self.book_id
