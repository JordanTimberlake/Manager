from rest_framework import serializers
from .models import Employees, Manager
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email')  # Add any other fields you need

class Employees_Serializer(serializers.ModelSerializer):
    user = UserSerializer(source='u_id')  # Reference to the related UserSerializer

    class Meta:
        model = Employees
        fields = ('user', 'position', 'line_Manager', 'salary')

class Manager_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = ('id', 'e_id')