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

def Articles_view(request,*args, **kwargs):
    return render(request,"Articles.html",{})

def New_Shepard_view(request,*args, **kwargs):
    return render(request,"New_Shepard.html",{})

def News_view(request,*args,**kwargs):
    return render(request,"News.html",{})

def Relativity_view(request,*args,**kwargs):
    return render(request,"relativity.html",{})

def About_view(request,*args,**kwargs):
    return render(request,"about.html",{})

def Contact_view(request,*args,**kwargs):
    return render(request,"contact.html",{})

def crew1_view(request,*args,**kwargs):
    return render(request,"crew1.html",{})

def starship_view(request,*args,**kwargs):
    return render(request,"starship.html",{})


def rocketlab_view(request,*args,**kwargs):
    return render(request,"rocketlab.html",{})

def rocket_compare_view(request,*args,**kwargs):
    return render(request,"rocket_compare.html",{})


def virgin25_view(request,*args,**kwargs):
    return render(request,"virgin25.html",{})




