## Quiz App
By:
* Norah Waswala
* Kelvin Malomba
* Beth Nduta
* Michael Ogaye
* Moureen Chepkoech
## PROJECT DESCRIPTION
An application that will ensure students in Moringa school have relevant questions that match with course outline and weekly Independent Projects.
As a user you can:
* start the quiz by pressing a button
* see a question with 4 possible answers for oral tech questions
* see the next question after selecting an answer
*see the following statistics
--time it took to finish the quiz
--summary of the interviews
--percentage achieved
* Create an account and have all scores saved in your dashboard
* complete a quiz only once
* Add multiple quizzes to the application

## Technologies Used
* Python3.10.4
* Django
* HTML, CSS, BOOTSTRAP
* JAVASCRIPT
* POSTGRESQL
* HEROKU

## SETUP/INSTALLATION REQUIREMENTS
To access the code:
- clone the repo https://github.com/MalombaKevin/Quiz_App_Angular.git

* activate virtual environment using python3.10.4 as default handler virtualenv env && env\Scripts\activate

* Install dependencies
Install dependencies that will create an environment for the app to run pip install -r requirements.txt

* Create the database
--psql
* CREATE DATABASE quiz;

* env file
Create .env file and paste the following filling where necessary: SECRET_KEY = <'secret_key>' DBNAME = '' USER = '' PASSWORD = '' DEBUG = True

* Run initial migration
- python 3.10.4 manage.py runmigrations instagram
- python 3.10.4 manage.py migrate

* Run the app
python 3.10.4 manage.py runserver
-open terminal on localhost:8000

* Current Bugs
There are no known bugs as of now. Incase you find one feel free to solve the bug and push the changes
## SUPPORT AND CONTACT DETAILS

Incase you want to contribute to the project fork the repository and make changes. Incase you wish to brainstorm any idea concerning the project kindly keep in touch with us through;
* Moringa Brainer


## LICENSE
MIT Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

