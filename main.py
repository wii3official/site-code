from flask import Flask, redirect, render_template
from threading import Thread
app = Flask('')

@app.route('/')
def home():
    return render_template("Wii3root/index.html")
    
@app.route('/add')
def add():
    return redirect("https://discord.com/oauth2/authorize?client_id=886920287659106345&scope=bot&permissions=534664703991", code=302)

def run():
  app.run(host='0.0.0.0',port=1001)
  
def keep_alive():  
    t = Thread(target=run)
    t.start()

keep_alive()
