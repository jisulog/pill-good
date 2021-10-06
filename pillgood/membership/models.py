from django.db import models
from django.utils import timezone
# Create your models here.
class Membership(models.Model):
    membership_id = models.IntegerField(primary_key=True)
    number = models.IntegerField()   #횟수
    period = models.IntegerField()  #기간
    price = models.IntegerField()   #가격
    type = models.IntegerField()    #유형


class Pay(models.Model):
    pay_id = models.IntegerField(primary_key=True)
    email = models.CharField(max_length=30)
    pay_date = models.DateTimeField(default=timezone.now())
    pay_type = models.IntegerField()
    remain = models.IntegerField()
    end_date = models.DateField()
    membership_id = models.IntegerField()
    refund_date = models.DateTimeField(null=True)
    status = models.IntegerField()

