from onyx.extensions import db

class Folder(db.Model):
    __tablename__ = 'folders'

    id = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.String(), nullable=False)
    user = db.Column(db.String(), nullable=False)
    folder = db.Column(db.String())
    desc = db.Column(db.String())
    name = db.Column(db.String())
    path = db.Column(db.String())
    shared = db.Column(db.Boolean())
    creation_date = db.Column(db.String())
    updated_date = db.Column(db.String())
