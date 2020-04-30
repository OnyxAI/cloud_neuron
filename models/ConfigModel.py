from onyx.extensions import db

class ConfigModel(db.Model):
    __tablename__ = 'cloud_config'

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(), nullable=False)
    name = db.Column(db.String())
    path = db.Column(db.String())
