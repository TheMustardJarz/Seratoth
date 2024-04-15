from db_utils import *

def registerUser(username, password, email):
    exec_commit("INSERT INTO users VALUES (%s, %s, %s)", (username, password, email))