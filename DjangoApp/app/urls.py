
from django.urls import path
import sys
sys.path.append("..")
import view

urlpatterns = [
    path(r'index/', view.cambia),
    #path(r'index/', view.index),
]