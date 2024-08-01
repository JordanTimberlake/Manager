"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('employees/', views.EmployeesView.as_view(), name='Employee List'),
    path('managers/', views.ManagerView.as_view(), name='Managers List'),
    path('auth/signup', views.Auth_User.signUp, name='User Sign Up'),
    path('auth/signin', views.Auth_User.signIn, name='User Sign In'),
    path('auth/signout', views.Auth_User.signOut, name='User Sign Out'),
    path('employee/update', views.update_employee, name='Update Employee'),
    # path('employee/delete', views.delete_employee, name='Delete Employee'),
    # path('employee/create', views.create_employee, name='Create Employee'),
    path('employee/create_manager', views.Create_Manager, name='Create Manager'),
]
