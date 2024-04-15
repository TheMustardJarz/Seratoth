from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
import json
from .db_utils import *

class Front_Page(Resource):
    def get(self):
        return exec_get_one("SELECT numVal FROM test WHERE id=1")