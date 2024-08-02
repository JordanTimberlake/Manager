from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here. 

class Manager(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, auto_created=True)
    e_id = models.BigIntegerField(unique=True, auto_created=True, verbose_name='ID')
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.e_id

class Employees(models.Model):
    # Change ID to bigint such that I can properly use it to reference the user on postman requests
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, auto_created=True)
    u_id = models.ForeignKey(User, on_delete=models.CASCADE, default=99999999)
    e_id = models.BigIntegerField(unique=True, auto_created=True, verbose_name='ID')
    birth_date = models.DateField(blank=True, auto_created=True, null=True)
    position = models.CharField(max_length=100, default='Employee', null=True)
    salary = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, null=True)
    hired_date = models.DateField(blank=True, auto_created=True, null=True)
    line_Manager = models.ForeignKey(Manager, on_delete=models.SET_NULL, null=True, blank=True, related_name='subordinates')
    is_Manager = models.BooleanField(default=False, null=True)
    image = models.ImageField(upload_to='images/%Y/%m/%d/', blank=True, null=True, default='default.jpg')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
