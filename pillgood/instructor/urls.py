"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from . import views

urlpatterns = [
    path('user/', views.user_list, name='user_list'),
    path('lec/', views.lec_list, name='lec_list'),
    path('lec/create/', views.lec_create, name='lec_create'),
    path('lec/update/<int:pk>/', views.lec_update, name='lec_update'),
    path('lec/<int:pk>/', views.instructor_lec_detail, name='instructor_lec_detail')
]
