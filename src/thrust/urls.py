from thrust.views import home_view, Falcon9_view, Electron_view, New_Shepard_view, News_view, Relativity_view, About_view, Contact_view, crew1_view, starship_view, rocketlab_view, rocket_compare_view          

from django.urls import path, include
from . import views
urlpatterns = [
    path('', home_view, name='home_view'),
    path('', crew1_view, name='crew1_view'),
    path('', starship_view, name='starship_view'),
    path('', rocketlab_view, name='rocketlab_view'),
    path('', rocket_compare_view, name='rocket_compare_view')
]




