from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
import json
from .db_utils import *
from server.api.login_api import *
import hashlib

parser = reqparse.RequestParser()

class Login(Resource):
    def post(self):
        return
    
class Register(Resource):
    def post(self):
        parser.add_argument("username", location='args')
        parser.add_argument("password", location='args')
        parser.add_argument("email", location='args')
        args = parser.parse_args()
        username = args['username']
        password = args['password']
        email = args['email']
        if username_already_exists(username):
            return("This username already exists! Please try another one")
        exec_commit("INSERT INTO users VALUES (%s, %s, %s)", (username, password, email))
        return "Congratulations! You have been registered!"
