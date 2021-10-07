from django.db import models

# Create your models here.
class Book(models.Model):
    object = models.Manager()
    book_id = models.IntegerField(primary_key=True)
    # email = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=30)
    # lec_id = models.ForeignKey(Lec, on_delete=models.CASCADE)
    lec_id = models.IntegerField()
    status = models.IntegerField()

    def __str__(self):
        return self.book_id