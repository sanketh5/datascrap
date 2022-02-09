from django.test import TestCase
from mainapp.views import *
from django.test import Client
# Create your tests here.


class Auth(TestCase):
    def testcase_success(self):
        c = Client()
        response = c.post('', {'username': 'admin@gmail.com', 'password': 'admin'})
        response.status_code
        
        self.assertEqual(response.status_code, 204)

    def testcase_failure(self):
   
        c = Client()
        response = c.post('', {'username': 'admin@gmail.com', 'password': 'admin'})
        response.status_code
        
        self.assertEqual(response.status_code, 204)
    
class fetch(TestCase):
    def testcase_success(self):
        c = Client()
        response = c.get('/fetch?email=admin@gmail.com')
        response.status_code
        
        self.assertEqual(response.status_code, 200)