from django.urls import path
from . import views

urlpatterns = [
    path('items/types/', views.TypesList.as_view(), name='types-list'),
]
