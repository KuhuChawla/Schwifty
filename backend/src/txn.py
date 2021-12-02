from . import db
from . import auth
from . import models
from flask import Blueprint, jsonify, request, current_app
import uuid

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
        result = models.Ledger.query.filter_by(user_one=user.id, user_two=customer).first()
        if result:
            if result.amount == 0:
                #making sure the guy has no debt (or else trouble verifying)
                result.amount = amount
                result.confirm = False
                db.session.commit()
                return jsonify({"status": "success"})
            else:
                return jsonify({"status": "error, let the customer clear debt first"}), 401
        else:
            db.session.add(models.Ledger(
                    id=str(uuid.uuid4()),
                    user_one=user.id,
                    user_two=customer,
                    amount=amount
                ))
            db.session.commit()
            return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 401

@txn_blueprint.route("/borrow", methods=["POST"])
@auth.authorize_user
def new_borrow(user):
    # customer chooses whether to accept the lending or not
    data = request.get_json()
    try:
        merchant = data["merchant"]
        confirm = data["confirm"]
        result = models.Ledger.query.filter_by(user_one=merchant, user_two=user.id).first()
        result.confirm = True
        db.session.commit()
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 401
