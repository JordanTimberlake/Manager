from rest_framework import serializers
from .models import employees, manager

class employees_serializer(serializers.ModelSerializer):
    class Meta:
        model = employees
        fields = ('name', 'surname', 'position', 'line_manager', 'salary')

class manager_serializer(serializers.ModelSerializer):
    class Meta:
        model = manager
        fields = ('employee')