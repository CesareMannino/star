from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request,*args,**kwargs):
    #return HttpResponse("<h1>Hello World</h1>") #string of HTML code
    return render(request,"home.html",{})

def Falcon9_view(request,*args, **kwargs):
    print(*args, **kwargs)
    print(request.user)
    #return HttpResponse("<h1>Falcon9 description</h1>") #string of HTML code
    return render(request,"Falcon9.html",{})

def Electron_view(request,*args, **kwargs):
    return render(request,"Electron.html",{})

def New_Shepard_view(request,*args, **kwargs):
    return render(request,"New_Shepard.html",{})

def News_view(request,*args,**kwargs):
    return render(request,"News.html",{})