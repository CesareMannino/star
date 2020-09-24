"""starships URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from thrust.views import home_view, Falcon9_view, Electron_view, New_Shepard_view, News_view


urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', home_view, name='home_view'),
    path('home/',home_view),
    #path is a django method,as argument got the url address as a 
    #string and as second argument the function from view
    path("New_Shepard/", New_Shepard_view), 
    path("Electron/", Electron_view),
    path("Falcon9/",Falcon9_view),
    path('admin/', admin.site.urls),
    path('News/',News_view)
]
