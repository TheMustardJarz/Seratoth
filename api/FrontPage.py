from flask import render_template
from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
import json
from api.db_utils import *

class FrontPage(Resource):
    def get(self):
        return render_template("index.html", title="Seratoth")