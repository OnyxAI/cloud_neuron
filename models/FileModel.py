from onyx.extensions import db

class File(db.Model):
    __tablename__ = 'files'

    id = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.String(), nullable=False)
    user = db.Column(db.String(), nullable=False)
    folder = db.Column(db.String())
    desc = db.Column(db.String())
    name = db.Column(db.String())
    size = db.Column(db.String())
    type = db.Column(db.String())
    path = db.Column(db.String())
    shared = db.Column(db.Boolean())
    creation_date = db.Column(db.String())
    updated_date = db.Column(db.String())
