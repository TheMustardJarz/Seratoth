from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource

from api.FrontPage import *

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('data.sql');
    print("Starting flask");
    app.run(debug=True), #starts Flask

