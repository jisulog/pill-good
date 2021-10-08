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

app_name = 'member'
urlpatterns = [
    path('', views.main, name='main'),
    path('update/', views.update, name='update'),
    path('delete/', views.delete, name='delete'),
    path('paylist/', views.paylist, name='paylist'),
    path('paylist/refund/<int:pk>/', views.pay_refund, name='pay_refund'),
    path('lec/', views.lec, name='lec'),
    path('lec/delete/<int:pk>/', views.lec_delete, name='lec_delete'),
]
