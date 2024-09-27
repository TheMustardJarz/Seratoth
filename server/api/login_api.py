from api.db_utils import *

def register_user(username, password, email):
    exec_commit("INSERT INTO users VALUES (%s, %s, %s)", (username, password, email))

def username_already_exists(username):
    return exec_get_one("SELECT username FROM users WHERE username=%s", (username))[0]