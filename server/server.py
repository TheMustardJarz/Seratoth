from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
from api.login import *

from api.db_utils import *
from api.FrontPage import *

app = Flask(__name__) #create Flask instance
CORS(app) #Enable CORS on Flask server to work with Nodejs pages
api = Api(app) #api router

api.add_resource(Front_Page,'/')
# api.add_resource(Login, '/login')
api.add_resource(Register, '/register')

if __name__ == '__main__':
    print("Loading db")
    exec_sql_file('data.sql')
    print("Starting flask")
    app.run(debug=True), #starts Flask

