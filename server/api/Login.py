from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
import json
import hashlib

from api.login_api import *

parser = reqparse.RequestParser()

class Login(Resource):
    def post(self):
        return
    
class Register(Resource):
    def get(self):
        return

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
        register_user(username, password, email)
        return "Congratulations! You have been registered!"
