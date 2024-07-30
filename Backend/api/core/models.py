from django.db import models
import uuid

# Create your models here. 

class employees(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255, default='')
    birth_date = models.DateField()
    position = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    hired_date = models.DateField()
    line_manager = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='subordinates')
    is_manager = models.BooleanField(default=False)
    image = models.ImageField(upload_to='images/%Y/%m/%d/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class manager(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    employee = models.OneToOneField(employees, on_delete=models.CASCADE, null=True, related_name='manager_profile')
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.employee