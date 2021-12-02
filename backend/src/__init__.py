from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

db = SQLAlchemy();

def create_app():
    app = Flask(__name__);
    app.config.from_object(Config)
    db.init_app(app);


    from src.auth import auth_blueprint
    app.register_blueprint(auth_blueprint)

    from src.txn import txn_blueprint
    app.register_blueprint(txn_blueprint, url_prefix="/transaction")

    return app
