from django.views.generic import TemplateView
from thrust.views import home_view, Falcon9_view, Articles_view, New_Shepard_view, News_view, Relativity_view, About_view, Contact_view, crew1_view, starship_view, rocketlab_view, rocket_compare_view          
from django.contrib.sitemaps.views import sitemap
from django.urls import path, include
from thrust.sitemaps import StaticViewSitemap
from . import views

sitemaps = {
    'static': StaticViewSitemap
}


urlpatterns = [
   
    path('', home_view, name='home_view'),
    path('crew1/', crew1_view, name='crew1_view'),
    path('starship/', starship_view, name='starship_view'),
    path('articles/', Articles_view, name='articles_view'),
    path('rocketlab/', rocketlab_view, name='rocketlab_view'),
    path('rocket_compare/', rocket_compare_view, name='rocket_compare_view'),
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type='text/plain')),
    path('sitemap.xml', sitemap, {'sitemaps':sitemaps},
    name='django.contrib.sitemaps.views.sitemap')
]

# path("New_Shepard/", New_Shepard_view), 
#     path("Electron/", Electron_view),
#     path("Falcon9/",Falcon9_view),
#     path('admin/', admin.site.urls),
#     path('News/',News_view),
#     path('relativity/',Relativity_view),
#     path('about/',About_view),
#     path('contact/',Contact_view),
#     path('crew1/', crew1_view),
#     path('starship/', starship_view),
#     path('rocketlab/', rocketlab_view),
#   path('rocket_compare/', rocket_compare_view)


