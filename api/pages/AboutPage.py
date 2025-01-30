from flask import render_template
from flask_restful import Resource, request, reqparse
import json
from api.db_utils import *

parser = reqparse.RequestParser()
parser.add_argument('name', type=str, required=True, help="Name cannot be blank!")
parser.add_argument('description', type=str)

class AboutPage(Resource):
    def get(self):
        return render_template("aboutPage.html")