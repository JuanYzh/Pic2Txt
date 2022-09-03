from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators import csrf

x = 0
def cambia(request):
    global x
    cambia = {}
    if request.POST and "cambiaa" in request.POST:
        x += 1
        cambia['texts'] = "HELLO WORLD!!! he hecho clic en %s veces"%x
        cambia['request'] = str(request.POST) + str(x)
    return render(request, 'index.html' , cambia)