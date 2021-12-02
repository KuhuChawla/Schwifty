from flask import Flask, jsonify
from src import create_app, db

app = create_app()
with app.app_context():
    db.create_all()

@app.route("/", methods=["GET", "POST"])
def index():
    return jsonify({"test": "UOME"})
