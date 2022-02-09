Tech stack:
	Frontend : Angular
	Backend : Django
	DB : Sqlite

Root User Credentials (django) :
	email: admin@gmail.com
	pass: admin


User Credentials :
	email: test1@gmail.com
	pass: petrichore@123

Steps to run this file:

--> Requirements : Angular version: 12, Python version 3.8+, Pip, Npm

--> Unzip the file, we will find two folders 
	1. frontend : It consist of Angular frontend code
	2. backend : It consist of Django backend code 
--> Frontend -> 1. Open the terminal navigate to the folder and enter [ npm i ] (exclude the [])
	     -> 2. Then click ng serve
	     -> 3. The frontend is live now you can find it on localhost:4200
--> Backend  -> 1. Open the terminal navigate to the folder and enter [ pip install -r requirements.txt ] (exclude the [])
	     -> 2. python manage.py makemigrations
	     -> 3. python manage.py migrate
	     -> 4. python manage.py runserver 80
	     -> can run test cases to see everythng is setup correctly use [ python manage.py test ] (exclude the [])
--> Now by doing the above steps you have hosted both frontend and backend on your machine and as we are using sqlite it will be automatically configured and hosted by djnago you can access the site at http://localhost:4200

--> Navigate http://localhost:4200
--> Enter following credentials
	1. email : test1@email.com
	2. password : petrichore@123
--> Try uploading the json file from the bottom upload file button
--> you will see all the data in tablular format
--> you can logout from the logout button at the top