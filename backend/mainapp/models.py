from turtle import title
from django.db import models

# Create your models here.

class user(models.Model):
   email= models.CharField(max_length=100)
   password = models.CharField(max_length=100)


class records(models.Model):
    user_email= models.CharField(max_length=100,default="admin@gmail.com")
    userId= models.CharField(max_length=100)
    sec_id= models.CharField(max_length=100)
    title= models.CharField(max_length=100)
    body= models.CharField(max_length=1000)