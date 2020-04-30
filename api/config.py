import os, json
from flask import jsonify
from flask_jwt_extended import get_jwt_identity
from flask_restful import Resource, reqparse

from onyx.extensions import db
from onyx.decorators import login_required
from neurons.cloud.models.ConfigModel import ConfigModel
from onyx.models import to_dict

from onyx.utils.log import getLogger

log = getLogger('Cloud Config')

class ConfigApi(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)
    parser.add_argument('name')
    parser.add_argument('path')
    parser.add_argument('id')

    @login_required
    def get(self):
        try:
            user = get_jwt_identity()

            query = ConfigModel.query.filter_by(user=user['id']).first()

            if query is None:
                config = {
                    "name": "",
                    "path": ""
                }

                return jsonify(status="success", config=config)
            else:
                return jsonify(status="success", config=to_dict(query))
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500

    @login_required
    def post(self):
        try:
            user = get_jwt_identity()

            args = self.parser.parse_args()

            name = args['name']
            path = args['path']

            query = ConfigModel.query.filter_by(user=user['id']).first()

            if query is None:

                new = ConfigModel(user=user['id'], name=name, path=path)

                db.session.add(new)
            else:
                query.name = name
                query.path = path

                db.session.add(query)

            db.session.commit()

            return jsonify(status="success")
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500

    @login_required
    def put(self):
        try:
            args = self.parser.parse_args()

            id = args['id']

            query = ConfigModel.query.filter_by(user=user['id'], id=id).first()

            db.session.delete(query)
            db.session.commit()

            return jsonify(status="success")
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500
