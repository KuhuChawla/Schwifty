import os
from dotenv import load_dotenv
basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or "BRUHBRUHBRUHBRUHBRUH"
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI") or \
    'sqlite:///' + os.path.join(basedir, "data.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
