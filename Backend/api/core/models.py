from django.db import models
import uuid

# Create your models here. 

class manager(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, auto_created=True)
    e_id = models.UUIDField(default=uuid.uuid4)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.e_id

class employees(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, auto_created=True)
    e_id = models.BigIntegerField(unique=True, auto_created=True, verbose_name='ID', default=00000000)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255, default='')
    birth_date = models.DateField()
    position = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    hired_date = models.DateField()
    line_manager = models.ForeignKey(manager, on_delete=models.SET_NULL, null=True, blank=True, related_name='subordinates')
    is_manager = models.BooleanField(default=False)
    image = models.ImageField(upload_to='images/%Y/%m/%d/', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
