from django.urls import path
from mainapp import views

urlpatterns = [
    path('', views.auth),
    path('fetch', views.fetch),
    path('upload',views.upload)
]
