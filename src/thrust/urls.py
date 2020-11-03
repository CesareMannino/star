from thrust.views import home_view, Falcon9_view, Electron_view, New_Shepard_view, News_view, Relativity_view, About_view, Contact_view
from django.urls import path, include
from . import views
urlpatterns = [
    path('', home_view, name='home_view'),
]
