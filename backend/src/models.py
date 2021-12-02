from src import db
import datetime
#TODO: add foreign key constraint later
#for now, this works

class User(db.Model):
    id = db.Column(db.String(37), primary_key=True)
    name = db.Column(db.String(64))
    user_name = db.Column(db.String(64), default="")
    email = db.Column(db.String(120), index=True, unique=True)
    password = db.Column(db.String(128))
    address = db.Column(db.String(300), default="")
    bname = db.Column(db.String(128), default="")
    phone = db.Column(db.String(10), default="0000000000", unique=True)
    timestamp = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    ban = db.Column(db.Boolean, default=False)

class Merchant(db.Model):
    id = db.Column(db.String(37), primary_key=True)
    name = db.Column(db.String(64))
    user_name = db.Column(db.String(64), default="")
    email = db.Column(db.String(120), index=True, unique=True)
    password = db.Column(db.String(128))
    address = db.Column(db.String(300), default="")
    bname = db.Column(db.String(128), default="")
    phone = db.Column(db.String(10), default="0000000000", unique=True)
    timestamp = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    ban = db.Column(db.Boolean, default=False)

class UOME(db.Model):
    id = db.Column(db.String(37), primary_key=True)
    score = db.Column(db.Integer, default=0)

class Ledger(db.Model):
    id = db.Column(db.String(37), primary_key=True)
    user_one = db.Column(db.String(37), primary_key=True)
    user_two = db.Column(db.String(37), primary_key=True)
    balance = db.Column(db.Integer, default=0)
    timestamp = db.Column(db.DateTime, default=datetime.datetime.utcnow)

class Transactions(db.Model):
    id = db.Column(db.String(37), primary_key=True)
    user_one = db.Column(db.String(37), primary_key=True)
    user_two = db.Column(db.String(37), primary_key=True)
    amount = db.Column(db.Integer, default=0)
    timestamp = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    isPaid = db.Column(db.Boolean, default=False)
    details = db.Column(db.String(300), default="")
