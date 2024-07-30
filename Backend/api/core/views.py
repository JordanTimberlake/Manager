from django.shortcuts import render
from django.views import View
from django.contrib.auth import authenticate, login
from rest_framework import generics

# Create your views here.

from .models import employees, manager
from .serializers import employees_serializer, manager_serializer

class employeesView(generics.ListAPIView):
    queryset = employees.objects.all()
    serializer_class = employees_serializer
    http_method_names = ['get']

class managerView(generics.ListAPIView):
    queryset = manager.objects.all()
    serializer_class = manager_serializer
    http_method_names = ['get']
