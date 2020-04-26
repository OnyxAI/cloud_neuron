import os
from flask import jsonify, send_file
from flask_jwt_extended import get_jwt_identity
from flask_restful import Resource, reqparse

from onyx.extensions import db
from onyx.decorators import login_required
from neurons.cloud.models.FileModel import File as FileModel
from neurons.cloud.models.FolderModel import Folder as FolderModel
from onyx.models import to_dict

import werkzeug
from onyx.utils.log import getLogger

log = getLogger('Cloud File')

class GetFile(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)
    parser.add_argument('uid')

    @login_required
    def post(self):
        try:
            args = self.parser.parse_args()

            uid = args['uid']

            file = FileModel.query.filter_by(uid=uid).first()

            if os.path.exists(file.path):
                return send_file(file.path)
            else:
                return jsonify(status="error", message="onyx.cloud.file_dont_exist")
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500

class DeleteFile(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)
    parser.add_argument('uid')

    @login_required
    def post(self):
        try:
            args = self.parser.parse_args()

            uid = args['uid']

            file = FileModel.query.filter_by(uid=uid).first()

            if os.path.exists(file.path):
                os.remove(file.path)
                return jsonify(status="success")
            else:
                return jsonify(status="error", message="onyx.cloud.file_dont_exist")
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500

class UploadFile(Resource):
    @login_required
    def post(self, neuron_folder):
        try:
            parser = reqparse.RequestParser(bundle_errors=True)
            parser.add_argument('file', type=werkzeug.datastructures.FileStorage, location='files')
            args = parser.parse_args()

            file = args['file']

            folder = FolderModel.query.filter_by(uid=neuron_folder).first()

            upload_folder = "{}/{}".format(folder.path, os.path.dirname(file.filename))



            if os.path.exists(os.path.join(upload_folder, file.filename.split('/')[-1])):
                return jsonify(status="error", message="onyx.cloud.file_exist")
            else:
                if len(file.filename.split('/')) > 1:
                    if not os.path.exists(upload_folder) and not os.path.isdir(upload_folder):
                        os.makedirs(upload_folder)

                file.save(os.path.join(upload_folder, file.filename.split('/')[-1]))

            return jsonify(status="success")
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500
