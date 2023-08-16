import os

from flask import Flask, redirect, render_template, request, session, url_for, flash
from helpers import get_users, hash_password

__winc_id__ = "8fd255f5fe5e40dcb1995184eaa26116"
__human_name__ = "authentication"

app = Flask(__name__)

app.secret_key = os.urandom(16)

@app.route("/home")
def redirect_index():
    return redirect(url_for("index"))

@app.route("/")
def index():
    return render_template("index.html", title="Index")

@app.route("/about")
def about():
    return render_template("about.html", title="About")

@app.route("/lon")
def lon():
    return render_template("lon.html", title="League of Nations")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        users = get_users()
        user = request.form['username']
        password = request.form['password']
        if user in users and hash_password(password) == users[user]:
                session['loggedin'] = True
                session["username"] = user
                return redirect(url_for("dashboard", name=session['username']))
        else:
                flash("Password or username is incorrect, please try again!")
                return redirect(url_for('login', error=True))      
    return render_template("login.html")

@app.route("/dashboard/")
@app.route("/dashboard/<name>")
def dashboard(name=None):
    return render_template("dashboard.html", title="Dashboard", name=session['username'])

@app.route("/logout", methods=["GET", "POST"])
def logout():
    session['loggedin'] = False
    if request.method == "POST":
        session.pop('username', None)
        return redirect(url_for("index"))
    return redirect(url_for("index"))


if __name__ == "__main__":
        app.run()