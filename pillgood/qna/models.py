from django.db import models
from django.utils import timezone
# Create your models here.

class Qna(models.Model):
    qna_id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    question_user = models.CharField(max_length=30)
    question = models.TextField()
    answer_user = models.CharField(null=True)
    answer = models.TextField(null=True)
    date = models.DateTimeField(default=timezone.now())