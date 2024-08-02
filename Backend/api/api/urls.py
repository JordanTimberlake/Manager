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
    path('api/token/', views.get_csrf_token, name='token'),
    path('api/managers/', views.ManagerView.as_view(), name='Managers List'),
    path('api/auth/signup/', views.Auth_User.signUp, name='User Sign Up'),
    path('api/auth/signin/', views.Auth_User.signIn, name='User Sign In'),
    path('api/auth/signout/', views.Auth_User.signOut, name='User Sign Out'),
    path('api/employee/', views.EmployeesView.as_view(), name='Employee List'),
    path('api/employee/<int:id>/', views.get_employee, name='Get Employee'),
    path('api/employee/create/', views.create_employee, name='Create Employee'),
    path('api/employee/update/', views.update_employee, name='Update Employee'),
    path('api/employee/delete/', views.delete_employee, name='Delete Employee'),
    path('api/employee/make_manager/', views.make_manager, name='Make Manager'),
]
