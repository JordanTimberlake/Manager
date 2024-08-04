from django.shortcuts import render
from django.views import View
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics
import json

from django.utils import timezone
from django.http import JsonResponse
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password
from django.views.decorators.http import require_http_methods
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token

# Create your views here.

from .models import Employees, Manager
from .serializers import Employees_Serializer, Manager_Serializer

@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({'message': 'CSRF cookie set','csrfToken': get_token(request)})

class EmployeesView(generics.ListAPIView):
    queryset = Employees.objects.all()
    serializer_class = Employees_Serializer
    http_method_names = ['get']

class ManagerView(generics.ListAPIView):
    queryset = Manager.objects.all()
    serializer_class = Manager_Serializer
    http_method_names = ['get']

@csrf_exempt
@require_http_methods(['GET'])
def getManagers(request):
    managers = Manager.objects.all()
    return JsonResponse({'status': 'success', 'message': 'Employees found', 'data': Manager_Serializer(managers, many=True).data}, status=200)

@method_decorator(csrf_exempt, name='dispatch') # This is to allow POST requests without CSRF token for Dev
class Auth_User(View):
    @csrf_exempt
    @require_http_methods(["POST"])
    def signIn(request):
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        user = authenticate(username=email, password=password)
        if user is not None:
            login(request, user)
            employee_id = Employees.objects.get(u_id=user).id
            return JsonResponse({'status': 'success', 'message': 'User authenticated successfully', 'user_id': user.id}, status=200)
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=401)
    
    @csrf_exempt
    @require_http_methods(["POST"])
    def signUp(request):
        data = json.loads(request.body)
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        password = data.get('password')

        if User.objects.filter(email=email).exists():
            return JsonResponse({'status': 'error', 'message': 'Email is already in use'}, status=409)
        
        try:
            username = email.split('@')[0]
            new_user = User(first_name=first_name, last_name=last_name, username=email, email=email, password=make_password(password))
            new_user.full_clean()
            new_user.save()

            # first add the new user then add the employee
            new_employee = Employees(u_id=new_user, created_at=timezone.now(), updated_at=timezone.now(), e_id=new_user.id)
            new_employee.clean()
            new_employee.save()

            login(request, new_user)  # Automatically log in the user after signing up
            return JsonResponse({'status': 'success', 'message': 'User signed up successfully', 'user_id': new_user.id}, status=201)
        except ValidationError as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    @csrf_exempt
    def get(request):
        queryset = User.objects.all()
        return JsonResponse(list(queryset.values()), safe=False, status=200)

    @csrf_exempt
    def list(request):
        queryset = User.objects.all()
        return JsonResponse(list(queryset.values()), safe=False, status=200)

    @csrf_exempt
    @require_http_methods(["POST"])
    def signOut(request):
        logout(request)
        return JsonResponse({'status': 'success', 'message': 'User signed out successfully'}, status=200)

@csrf_exempt # This is to allow POST requests without CSRF token for Dev
@require_http_methods(["GET"])
def get_employee(request, id):
    try:
        employee = Employees.objects.get(u_id=id)
        if employee:
            return JsonResponse({'status': 'success', 'message': 'Employee found', 'data': Employees_Serializer(employee).data}, status=200)
    except Employees.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Employee not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@csrf_exempt
@require_http_methods(["GET"])
def get_employees(request):
    employees = Employees.objects.all()
    return JsonResponse({'status': 'success', 'message': 'Employees found', 'data': Employees_Serializer(employees, many=True).data}, status=200)

@csrf_exempt # This is to allow POST requests without CSRF token for Dev
@require_http_methods(["PUT"])
def update_employee(request, id):
    try:
        data = json.loads(request.body)
        u_id = data.get('u_id')
        id = data.get('e_id')

        u_first_name = data.get('first_name')
        u_last_name = data.get('last_name')
        e_position = data.get('position')
        e_birth_date = data.get('birth_date')
        e_salary = data.get('salary')
        e_hired_date = data.get('hired_date')
        e_line_manager = data.get('line_manager')
        e_is_manager = data.get('is_manager')

        employee = Employees.objects.get(u_id=u_id)
        user = User.objects.get(id=u_id)

        employee.e_id = id
        if employee.is_Manager:
            manager = Manager.objects.get(e_id=u_id)
            manager.e_id = id

        if employee:
            if u_first_name is not None:
                User.first_name = u_first_name
            if u_last_name is not None:
                User.last_name = u_first_name
            if e_birth_date is not None:
                employee.birth_date = e_birth_date
            if e_salary is not None:
                employee.salary = e_salary
            if e_hired_date is not None:
                employee.hired_date = e_hired_date
            if e_position is not None:
                employee.position = e_position
            if e_line_manager is not None:
                employee.line_Manager = Manager.objects.get(e_id=e_line_manager)
            if e_is_manager is not None:
                if e_is_manager:
                    employee.is_Manager = e_is_manager
                    if not Manager.objects.filter(e_id=employee.e_id).exists():
                        new_Manager = Manager(e_id=employee.e_id)
                        new_Manager.clean()
                        new_Manager.save()
                else:
                    employee.is_Manager = e_is_manager
                    if Manager.objects.filter(e_id=employee.e_id).exists():
                        Manager.objects.get(e_id=employee.e_id).delete()



            employee.updated_at = timezone.now()

            user.full_clean()
            employee.full_clean()  # Validate before saving
            user.save()
            employee.save()


        return JsonResponse({'status': 'success', 'message': 'Employee updated successfully'}, status=200)
    except Employees.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Employee not found'}, status=404)
    except ValidationError as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


@csrf_exempt # This is to allow POST requests without CSRF token for Dev
@require_http_methods(["DELETE"])
def delete_employee(request):
    try:
        data = json.loads(request.body)
        id = data.get('u_id')

        employee = Employees.objects.get(u_id=id)
        if employee:
            employee.delete()

        return JsonResponse({'status': 'success', 'message': 'Employee deleted successfully'}, status=200)
    except Employees.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Employee not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

# request to make current signing in employee a manager
@csrf_exempt # This is to allow POST requests without CSRF token for Dev
@require_http_methods(["POST"])
def make_manager(request):
    data = json.loads(request.body)
    u_id = data.get('u_id')

    try:
        # Update the employee to be a manager
        employee = Employees.objects.get(u_id=u_id)
        e_id = employee.id

        if Manager.objects.filter(e_id=e_id).exists():
            return JsonResponse({'status': 'error', 'message': 'Already a manager'}, status=409)
        
        employee.is_Manager = True
        employee.updated_at = timezone.now()
        employee.full_clean()  # Validate before saving
        employee.save()

        # Create a new Manager instance
        new_Manager = Manager(e_id=e_id)
        new_Manager.clean()
        new_Manager.save()

        return JsonResponse({'status': 'success', 'message': 'Manager created successfully', 'id': employee.id}, status=201)

    except ValidationError as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

@csrf_exempt
@require_http_methods(["POST"])
def create_employee(request):
    data = json.loads(request.body)
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')

    if User.objects.filter(email=email).exists():
        return JsonResponse({'status': 'error', 'message': 'Email is already in use'}, status=409)
    
    try:
        # first add the new user then add the employee

        new_employee = Employees(u_id=new_user, created_at=timezone.now(), updated_at=timezone.now(), e_id=new_user.id)
        new_employee.clean()
        new_employee.save()

        login(request, new_user)  # Automatically log in the user after signing up
        return JsonResponse({'status': 'success', 'message': 'User signed up successfully', 'user_id': new_user.id}, status=201)
    except ValidationError as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)