import datetime
from flask import Blueprint, jsonify, request, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from . import models, db
import uuid
import jwt
from functools import wraps

auth_blueprint = Blueprint("auth", __name__);

@auth_blueprint.route("/register", methods=["POST"])
def signup():
    data = request.get_json()
    try:
        db.session.add(models.User(
            id=str(uuid.uuid4()),
            name=data["name"],
            email=data["email"],
            password=generate_password_hash(data["password"], method="sha256"),
            phone=data["phone"],
            address=data["address"]
        ))
        db.session.commit()
        return jsonify({"success": "at creation of account"})
    except Exception as e:
        return jsonify({"error": str(e)}), 401


@auth_blueprint.route("/registerMerchant", methods=["POST"])
def signupMerchant():
    data = request.get_json()
    try:
        db.session.add(models.Merchant(
            id=str(uuid.uuid4()),
            name=data["name"],
            email=data["email"],
            password=generate_password_hash(data["password"], method="sha256"),
            bname=data["bname"],
            phone=data["phone"],
            address=data["address"]
        ))
        db.session.commit()
        return jsonify({"success": "at creation of account"})
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@auth_blueprint.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    try:
        u = models.User.query.filter_by(email=data["email"]).first()
        if u:
            if check_password_hash(u.password, data["password"]):
                token = jwt.encode(
                        {"id": u.id, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2), "email": u.email},
                        current_app.config["SECRET_KEY"],
                        "HS256"
                        )
                return jsonify({"token": jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])})
            else:
                return jsonify({"error": "wrong password"}), 401
        else:
            return jsonify({"error": "no such user with such email"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@auth_blueprint.route("/loginMerchant", methods=["POST"])
def loginMerchant():
    data = request.get_json()
    try:
        u = models.Merchant.query.filter_by(email=data["email"]).first()
        if u:
            if check_password_hash(u.password, data["password"]):
                token = jwt.encode(
                        {"id": u.id, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2), "email": u.email,},
                        current_app.config["SECRET_KEY"],
                        "HS256"
                        )
                return jsonify({"token": jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])})
            else:
                return jsonify({"error": "wrong password"}), 401
        else:
            return jsonify({"error": "no such user with such email"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 401


@auth_blueprint.route("/user/<string:email>", methods=["GET"])
def user(email):
    try:
        u = models.User.query.filter_by(email=email).first()
        return jsonify({"name": u.name, "email": u.email, "phone": u.phone, "address": u.address, "id": u.id})
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@auth_blueprint.route("/merchant/<string:email>", methods=["GET"])
def merchant(email):
    try:
        u = models.Merchant.query.filter_by(email=email).first()
        return jsonify({"name": u.name, "email": u.email, "phone": u.phone, "address": u.address, "id": u.id, "bname": u.bname})
    except Exception as e:
        return jsonify({"error": str(e)}), 401

def authorize_user(f):
    @wraps(f)
    def find_user(*args, **kwargs):
        if not "Authorization" in request.headers:
            return jsonify({"error": "Authorization header missing"}), 401
        token = request.headers["Authorization"].replace("Bearer ", "")
        try:
            data = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
            u = models.User.query.filter_by(id=data["id"]).first()
        except:
            return jsonify({"error": "wrong token"}), 401
        return f(u, *args, **kwargs)
    return find_user

def authorize_merchant(f):
    @wraps(f)
    def find_user(*args, **kwargs):
        if not "Authorization" in request.headers:
            return jsonify({"error": "Authorization header missing"}), 401
        token = request.headers["Authorization"].replace("Bearer ", "")
        try:
            data = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
            u = models.Merchant.query.filter_by(id=data["id"]).first()
        except:
            return jsonify({"error": "wrong token"}), 401
        return f(u, *args, **kwargs)
    return find_user

@auth_blueprint.route("/test/<int:i>", methods=["GET", "POST"])
@authorize_user
def test(user, i):
    '''example endpoint to test auth'''
    return jsonify({"success": "Hi " + user.name + ", you passed " + str(i)})

