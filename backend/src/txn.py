from . import db
from . import auth
from . import models
from flask import Blueprint, jsonify, request, current_app
import uuid
import razorpay

txn_blueprint = Blueprint("transaction", __name__)

@txn_blueprint.route("/lend", methods=["POST"])
@auth.authorize_merchant
def new_lend(user):
    # merchant tells us that he wants to lend X rupees
    # merchant also tells us whom he wants to lend to
    data = request.get_json()
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
            result.confirm = confirm
            db.session.commit()
            return jsonify({"status": "success"})
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
