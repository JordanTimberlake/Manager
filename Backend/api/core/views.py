from django.shortcuts import render
from django.views import View
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics
import json
import hashlib
import random

from django.utils import timezone
from django.http import JsonResponse
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password
from django.views.decorators.http import require_http_methods
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.middleware.csrf import get_token

def generate_sha256_hash(data: str) -> str:
    # Create a new SHA-256 hash object
    sha256_hash = hashlib.sha256()
    
    # Update the hash object with the bytes-like object (encode the string to bytes)
    sha256_hash.update(data.encode('utf-8'))
    
    # Return the hexadecimal representation of the hash
    return sha256_hash.hexdigest()


# Create your views here.

from .models import Employees, Manager
from .serializers import Employees_Serializer, Manager_Serializer

@csrf_exempt
@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({'message': 'CSRF cookie set','csrfToken': get_token(request)})

class EmployeesView(generics.ListAPIView):
    queryset = Employees.objects.all()
    serializer_class = Employees_Serializer
    http_method_names = ['get']

@csrf_exempt
class ManagerView(generics.ListAPIView):
    queryset = Manager.objects.all()
    serializer_class = Manager_Serializer
    http_method_names = ['get']

@csrf_exempt
@require_http_methods(['GET'])
def getManagers(request):
    managers = Manager.objects.all()
    return JsonResponse({'status': 'success', 'message': 'Employees found', 'data': Manager_Serializer(managers, many=True).data}, status=200)

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
            username = first_name + last_name + str(random.randint(1, 100000000))
            new_user = User(first_name=first_name, last_name=last_name, username=username, email=email, password=make_password(password))
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
    def get(request,id):
        try:
            # Fetch a single user object by ID
            user = User.objects.get(id=id)
            # Convert the user object to a dictionary and return as JSON
            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                # Add other fields you want to include in the response
            }
            return JsonResponse(user_data, status=200)
        except ObjectDoesNotExist:
            # Return a 404 response if the user is not found
            return JsonResponse({'error': 'User not found'}, status=404)

    @csrf_exempt
    def list(request):
        queryset = User.objects.all()
        return JsonResponse(list(queryset.values()), safe=False, status=200)

    @csrf_exempt
    @require_http_methods(["POST"])
    def signOut(request):
        logout(request)
        return JsonResponse({'status': 'success', 'message': 'User signed out successfully'}, status=200)
 # This is to allow POST requests without CSRF token for Dev
@csrf_exempt
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
 # This is to allow POST requests without CSRF token for Dev
@csrf_exempt
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

        if employee:
            if u_first_name is not None:
                user.first_name = u_first_name
            if u_last_name is not None:
                user.last_name = u_last_name
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
                        manager = Manager.objects.get(e_id=id)
                        manager.e_id = id
                        manager.clean()
                        manager.save()
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

 # This is to allow POST requests without CSRF token for Dev
@csrf_exempt
@require_http_methods(["DELETE"])
def delete_employee(request):
    try:
        data = json.loads(request.body)
        id = data.get('u_id')

        user = User.objects.get(id=u_id)
        employee = Employees.objects.get(u_id=id)
        if Manager.objects.get(e_id=id).exists():
            Manager.objects.get(e_id=id).delete()
        if employee:
            employee.delete()
        if user:
            user.delete()
        return JsonResponse({'status': 'success', 'message': 'Employee deleted successfully'}, status=200)
    except Employees.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Employee not found'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

@csrf_exempt
@require_http_methods(["POST"])
def create_employee(request):
    data = json.loads(request.body)

    e_id = data.get('e_id')
    u_first_name = data.get('first_name')
    u_last_name = data.get('last_name')
    email = data.get('email')
    password = data.get('password')
    e_position = data.get('position')
    e_birth_date = data.get('birth_date')
    e_salary = data.get('salary')
    e_line_manager = data.get('line_manager')
    e_is_manager = data.get('is_manager')
    e_gravatar_url = 'https://gravatar.com/avatar/' + generate_sha256_hash(email)
    

    if User.objects.filter(email=email).exists():
        return JsonResponse({'status': 'error', 'message': 'Email is already in use'}, status=409)

    try:
        username = u_first_name + u_last_name

        new_user = User(first_name=u_first_name, last_name=u_last_name, username=username, email=email, password=make_password(password))
        new_user.full_clean()
        new_user.save()
        # first add the new user then add the employee
        employee = Employees(u_id=new_user, created_at=timezone.now(), updated_at=timezone.now(), e_id=e_id, salary=e_salary, birth_date=e_birth_date, position=e_position, is_Manager=e_is_manager, gravatar_url=e_gravatar_url)
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
                        manager = Manager.objects.get(e_id=id)
                        manager.e_id = id
                        manager.clean()
                        manager.save()
                else:
                    employee.is_Manager = e_is_manager
                    if Manager.objects.filter(e_id=employee.e_id).exists():
                        Manager.objects.get(e_id=employee.e_id).delete()
        employee.clean()
        employee.save()

        login(request, new_user)  # Automatically log in the user after signing up
        return JsonResponse({'status': 'success', 'message': 'User signed up successfully', 'user_id': new_user.id}, status=201)
    except ValidationError as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)