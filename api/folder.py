import os, shutil
from flask import jsonify
from flask_jwt_extended import get_jwt_identity
from flask_restful import Resource, reqparse

from onyx.extensions import db
from onyx.decorators import login_required
from neurons.cloud.models.FolderModel import Folder as FolderModel
from neurons.cloud.models.FileModel import File as FileModel
from onyx.models import to_dict

from onyx.utils.log import getLogger

log = getLogger('Cloud Folder')

def getTree(folder):
    root = folder[0]
    if root['parent'] is None:
        return folder
    else:
        parent = FolderModel.query.filter_by(uid=root['parent']).first()
        folder.insert(0, {
            "name": parent.name,
            "parent": parent.folder,
            "uid": parent.uid
        })
        return getTree(folder)

class DeleteFolder(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)
    parser.add_argument('uid')

    @login_required
    def post(self):
        try:
            args = self.parser.parse_args()

            uid = args['uid']

            folder = FolderModel.query.filter_by(uid=uid).first()

            if os.path.exists(folder.path):
                shutil.rmtree(folder.path, ignore_errors=True)
                return jsonify(status="success")
            else:
                return jsonify(status="error", message="onyx.cloud.folder_dont_exist")
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500

class AddFolder(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)
    parser.add_argument('name')
    parser.add_argument('folder')

    @login_required
    def post(self):
        try:
            args = self.parser.parse_args()

            name = args['name']
            folder = args['folder']

            path = "{}/{}".format(folder, name)

            if not os.path.exists(path):
                os.mkdir(path)
                return jsonify(status="success")
            else:
                return jsonify(status="error", message="onyx.cloud.folder_exist")
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500

class GetFolder(Resource):
    parser = reqparse.RequestParser(bundle_errors=True)
    parser.add_argument('uid')

    @login_required
    def post(self):
        try:
            args = self.parser.parse_args()

            uid = args['uid']

            root = FolderModel.query.filter_by(folder=None).first()

            current_folder = FolderModel.query.filter_by(uid=uid).first()

            if current_folder is not None:
                tree = getTree([{
                    "name": current_folder.name,
                    "parent": current_folder.folder,
                    "uid": current_folder.uid
                }])
            else:
                tree = [{
                    "name": root.name,
                    "parent": None,
                    "uid": root.uid
                }]


            folders = [to_dict(folder) for folder in FolderModel.query.filter(FolderModel.folder.is_(uid))]

            files = [to_dict(file) for file in FileModel.query.filter(FileModel.folder.is_(uid))]

            return jsonify(status="success", tree=tree, root=to_dict(root), current_folder=to_dict(current_folder), folders=folders, files=files)
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500
