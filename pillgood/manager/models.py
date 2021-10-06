from django.db import models

# Create your models here.
class Book(models.Model):
    book_id = models.IntegerField(primary_key=True)
    email = models.ForeignKey(User, on_delete=models.CASCADE)
    lec_id = models.ForeignKey(Lec, on_delete=models.CASCADE)
    status = models.IntegerField()

    def __str__(self):
        return self.book_id