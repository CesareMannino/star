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
from django.views.generic import TemplateView
from django.urls import path, include
from thrust.sitemaps import StaticViewSitemap
from django.contrib.sitemaps.views import sitemap
from thrust.views import home_view, Falcon9_view, Articles_view, New_Shepard_view, News_view,Relativity_view, About_view, Contact_view,crew1_view, starship_view, rocketlab_view, rocket_compare_view, virgin25_view, galactic01_view

sitemaps = {
    'static': StaticViewSitemap
}

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',include('thrust.urls')),
    path('sitemap.xml', sitemap, {'sitemaps':sitemaps},
    name='django.contrib.sitemaps.views.sitemap'),
    path('', home_view, name='home_view'),
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type='text/plain')),
    path('home/',home_view),
    #path is a django method,as argument got the url address as a 
    #string and as second argument the function from view
    path("New_Shepard/", New_Shepard_view), 
    path("Articles/", Articles_view),
    path("Falcon9/",Falcon9_view),
    path('admin/', admin.site.urls),
    path('News/',News_view),
    path('relativity/',Relativity_view),
    path('about/',About_view),
    path('contact/',Contact_view),
    path('crew1/', crew1_view),
    path('starship/', starship_view),
    path('rocketlab/', rocketlab_view),
  path('rocket_compare/', rocket_compare_view),
  path('virgin25/', virgin25_view),
  path('galactic01/', galactic01_view)

]
