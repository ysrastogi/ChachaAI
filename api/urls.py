from django.urls import path
from . import views

urlpatterns = [
    path('health', views.health_check, name='health_check'),  # No trailing slash
    path('health/', views.health_check, name='health_check_slash'),  # With trailing slash
]