from django.db import models
from django.utils import timezone
# Create your models here.
class Membership(models.Model):
    membership_id = models.IntegerField(primary_key=True)
    number = models.IntegerField()    #횟수
    period = models.IntegerField()    #기간
    price = models.IntegerField()     #가격
    type = models.IntegerField()      #유형

    def __str__(self):
        return self.type

class Pay(models.Model):
    pay_id = models.IntegerField(primary_key=True)              #결제pk
    email = models.EmailField(max_length=30)                    #회원
    pay_date = models.DateTimeField(default=timezone.now)       #결제일시
    pay_type = models.IntegerField()                            #결제방식
    remain = models.IntegerField()                              #잔여횟수
    end_date = models.DateField()                               #종료일자
    membership_id = models.IntegerField()                       #멤버십
    refund_date = models.DateTimeField(null=True)               #환불일시
    status = models.IntegerField()                              #상태



