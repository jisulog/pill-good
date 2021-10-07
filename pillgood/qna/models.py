from django.db import models
from django.utils import timezone
# Create your models here.

class Qna(models.Model):
    qna_id = models.IntegerField(primary_key=True)          #상담pk
    title = models.CharField(max_length=100)                #제목
    question_user = models.CharField(max_length=30)         #작성자(회원)
    question = models.TextField()                           #내용
    answer_user = models.CharField(null=True)               #답변자(회원)
    answer = models.TextField(null=True)                    #답변
    date = models.DateTimeField(default=timezone.now)       #등록일

