from distutils.log import error
from http.client import ImproperConnectionState
from django.shortcuts import render, redirect
from django.views import generic
from mainapp.models import records,user
from django.http import HttpResponse, JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
import numpy as np
from json import JSONEncoder
# Create your views here.
@csrf_exempt
def auth(request):
    if(request.method == 'GET'):
        abc = user.objects.all()
        
    elif(request.method == 'POST'):
        username = request.POST['username']
        password = request.POST['password']
        print(username)
        try:
            a = user.objects.get(email=username, password=password)
            if(a):
                return JsonResponse({"status":200})
            else:
                return HttpResponse(status=204)
        except Exception as er:
            print("*****************")
            print(er)
            return HttpResponse(status=204)

    return HttpResponse("hello")


class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

@csrf_exempt
def fetch(request):
    if(request.method == 'GET'):
        print(request.GET)
        email = request.GET["email"]
        print(email)
        abc = records.objects.filter(user_email=email)
        A = list(abc)
        print(A)
        list_=[]
        for i in A:
            temp_dic = {}
            print(i)
            temp_dic['userId'] = i.userId
            temp_dic['sec_id']= i.sec_id
            temp_dic['title']= i.title
            temp_dic['body']= i.body
            list_.append(temp_dic)
        # numpyData = {"array": A}
        # encodedNumpyData = json.dumps(numpyData, cls=NumpyArrayEncoder)
        return JsonResponse({"data":list_})
    return HttpResponse("hello")


@csrf_exempt
def upload(request):
    if(request.method == 'POST'):
        username = request.POST['user']
        file = request.FILES['files'].read()
        data = json.loads(file)
        for i in data:
            i['user_email'] = username 
            i['sec_id'] = i.pop("id")
            m = records(**i)
            m.save()
        return JsonResponse({"data":200})