from . import db
from . import auth
from . import models
from flask import Blueprint, jsonify, request, current_app
import uuid
import razorpay
import requests

txn_blueprint = Blueprint("transaction", __name__)

@txn_blueprint.route("/lend", methods=["POST"])
@auth.authorize_merchant
def new_lend(user):
    # merchant tells us that he wants to lend X rupees
    # merchant also tells us whom he wants to lend to
    data = request.get_json()
    print(data)
    print(request)
    try:
        customer = data["user"]
        amount = data["amount"]
        details = data["details"]
        ledger_id = str(uuid.uuid4())
        db.session.add(models.Ledger(
                id=ledger_id,
                user_one=user.id,
                user_two=customer,
                details=details,
                balance=amount
            ))
        db.session.commit()
        return jsonify({"status": "success", "ledger_id": ledger_id})
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 401

@txn_blueprint.route("/borrow", methods=["POST"])
@auth.authorize_user
def new_borrow(user):
    # customer chooses whether to accept the lending or not
    data = request.get_json()
    try:
        ledger_id = data["ledger_id"]
        confirm = data["confirm"]
        result = models.Ledger.query.filter_by(id=ledger_id).first()
        if result.user_two == user.id:
            if confirm:
                result.confirm = confirm
                db.session.commit()
                return jsonify({"status": "success"})
            else:
                db.session.delete(result)
                db.session.commit()
                return jsonify({"status": "declined"})
        else:
            return jsonify({"error": "not your ledger"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@txn_blueprint.route("/payUp", methods=["POST"])
@auth.authorize_user
def pay_up(user):
    # customer pays
    data = request.get_json()
    try:
        ledger_id = data["ledger_id"]
        amount = data["amount"]

        result = models.Ledger.query.filter_by(id=ledger_id).first()
        if result.user_two == user.id:
            if amount > result.balance:
                amount = result.balance            
            client = razorpay.Client(auth=(current_app.config["KEY_ID"], current_app.config["KEY_SECRET"]))
            payment = client.order.create({"amount": (amount * 100), "currency": "INR", "payment_capture": '1'})
            print(payment)
            return jsonify({"order_id": payment["id"], "amount": payment["amount"]})
        else:
            return jsonify({"error": "not your ledger"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@txn_blueprint.route("/check/<string:ledgerId>", methods=["GET"])
@auth.authorize_merchant
def check(user, ledgerId):
    # merchant checks the status of the transaction
    try:
        result = models.Ledger.query.filter_by(id=ledgerId).first()
        if result.confirm == True:
            return jsonify({"status": "success"})
        else:
            return jsonify({"status": "pending"})
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@txn_blueprint.route("/checkLedger/<string:customerId>", methods=["GET"])
@auth.authorize_user
def checkLedger(user, customerId):
    #user checks for pending transactions
    try:
        result = models.Ledger.query.filter_by(user_two=customerId, confirm=False).all()
        if result:
            return jsonify({"status": "pending", "ledger_id": result[0].id, "merchant_id": result[0].user_one, "amount": result[0].balance}), 200
        else:
            return jsonify({"status": "none"})
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@txn_blueprint.route("/allPendingTransactions/<string:customerId>", methods=["GET"])
@auth.authorize_user
def allTransactions(user, customerId):
    #user fetch all transactions
    try:
        result = models.Ledger.query.filter_by(user_two=customerId, confirm=True).all()
        if result:
            return jsonify({"status": "success", "transactions": result}), 200
        else:
            return jsonify({"status": "none"})
    except Exception as e:
        return jsonify({"error": str(e)}), 401
        

@txn_blueprint.route("/verify", methods=["POST"])
@auth.authorize_user
def verify(user):
    #send the backend order_id
    #send order_id
    #NOT TESTED
    data = request.get_json()
    try:
        ledger_id = data["ledger_id"]
        result = models.Ledger.query.filter_by(id=ledger_id).first()
        if result:
            client = razorpay.Client(auth=(current_app.config["KEY_ID"], current_app.config["KEY_SECRET"]))
            return jsonify(client.order.payments(data["order_id"]))
    finally:
        return jsonify({"error": "not your ledger"}), 401


@txn_blueprint.route("/payNow", methods=["POST"])
@auth.authorize_user
def payNow(user):
    #razorpay payment gateway
    data = request.get_json()
    try:
        res = requests.post('https://api.razorpay.com/v1/payment_links',
                auth=(current_app.config["KEY_ID"], current_app.config["KEY_SECRET"]),
                json={
                    "amount": int(data["amount"])*100,
                    "currency": "INR",
                    "customer": {
                        "contact": user.phone,
                        "email": user.email,
                        "name": user.name
                    },
                }
                )
        return jsonify(res.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 401
