from django.shortcuts import render
from django.views import View
from django.contrib.auth import authenticate, login
from rest_framework import generics
import json

from django.utils import timezone
from django.http import JsonResponse
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password
from django.views.decorators.http import require_http_methods

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

@require_http_methods(["POST"])
def signup(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        surname = request.POST.get('surname')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if employees.objects.filter(email=email).exists():
            return JsonResponse({'status': 'error', 'message': 'Email is already in use'},status=409)

        try:
            new_employee = employees(name=name,surname=surname,email=email,password=make_password(password),created_at=timezone.now())
            new_employee.full_clean()
            new_employee.save()
            return JsonResponse({'status': 'success', 'message': 'Employee signed up successfully', 'id': new_employee.id}, status=201)

        except ValidationError as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)


# Not entirely sure this will work - not tested
@require_http_methods(["PUT"])
def continue_signup(request):
    id = request.PUT.get('id')
    e_birth_date = request.PUT.get('birth_date')
    e_salary = request.PUT.get('sallary')
    e_hired_date = request.PUT.get('hired_date')
    e_line_manager = request.PUT.get('line_manager')

    try:
        employee = employees.objects.get(id=id)
        employee.birth_date = e_birth_date
        employee.line_manager = e_line_manager
        employee.salary = e_salary
        employee.hired_date = e_hired_date
        employee.updated_at = timezone.now()

        employee.clean()
        employee.save()

        return JsonResponse({'status': 'success', 'message': 'Employee updated successfully', 'id': new_employee.id}, status=201)

    except ValidationError as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)


## Check the validity of this request when integrating
# request to make current signing in employee a manager
@require_http_methods(["POST"])
def create_manager(request):
    id = request.POST.get('id')

    try:
        new_manager = manager(e_id=id)
        new_manager.clean()
        new_manager.save()

        return JsonResponse({'status': 'success', 'message': 'Manager created successfully', 'id': new_employee.id}, status=201)

    except ValidationError as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)