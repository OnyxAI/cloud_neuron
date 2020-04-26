import os, json, uuid
from flask import jsonify
from flask_jwt_extended import get_jwt_identity
from flask_restful import Resource, reqparse

from onyx.extensions import db
from onyx.decorators import login_required
from neurons.cloud.models.FolderModel import Folder as FolderModel
from neurons.cloud.models.FileModel import File as FileModel
from onyx.models import to_dict

from onyx.utils.log import getLogger

ROOT_FOLDER = "/home/aituglo/cloud"
log = getLogger('Cloud Sync')


class Sync():

    def sync_folder(self, user, path=ROOT_FOLDER):
        current = {'name': os.path.basename(path)}
        if os.path.isdir(path):
            current['type'] = "folder"
            current['path'] = path

            # Checking if it exists in database
            try:
                folder = FolderModel.query.filter_by(name=os.path.basename(path), path=path).first()

                parent_folder = os.path.basename(os.path.dirname(path))

                parent = FolderModel.query.filter_by(name=parent_folder, path=os.path.dirname(path)).first()

                if folder is None:
                    if parent is None:
                        query = FolderModel(uid=str(uuid.uuid4()), name=os.path.basename(path), user=user, path=path, shared=False, creation_date=os.path.getmtime(path), updated_date=os.path.getmtime(path))
                    else:
                        query = FolderModel(uid=str(uuid.uuid4()), name=os.path.basename(path), folder=parent.uid, user=user, path=path, shared=False, creation_date=os.path.getmtime(path), updated_date=os.path.getmtime(path))
                    db.session.add(query)
                else:
                    folder.updated_date = os.path.getmtime(path)

                    db.session.add(folder)

                db.session.commit()
            except Exception as e:
                log.error(e)
                pass

            current['children'] = [self.sync_folder(user=user, path=os.path.join(path,x)) for x in os.listdir(path)]
        else:
            current['path'] = path
            current['type'] = "file"

            # Checking if it exists in database
            try:
                size = str(os.path.getsize(path))
                ext = os.path.splitext(path)[1].replace(".", "")

                file = FileModel.query.filter_by(name=os.path.basename(path), path=path, size=size, type=ext, user=user).first()

                if file is None:
                    folder_name = os.path.basename(os.path.dirname(path))

                    folder = FolderModel.query.filter_by(name=folder_name, path=os.path.dirname(path)).first()

                    if folder is None:
                        query = FileModel(uid=str(uuid.uuid4()), name=os.path.basename(path), type=ext, size=size, user=user, path=path, shared=False, creation_date=os.path.getmtime(path), updated_date=os.path.getmtime(path))
                    else:
                        query = FileModel(uid=str(uuid.uuid4()), name=os.path.basename(path), type=ext, size=size, folder=folder.uid, user=user, path=path, shared=False, creation_date=os.path.getmtime(path), updated_date=os.path.getmtime(path))

                    db.session.add(query)
                else:
                    file.updated_date = os.path.getmtime(path)

                    db.session.add(file)

                db.session.commit()
            except Exception as e:
                log.error(e)
                pass
        return current

class SyncApi(Resource):
    def __init__(self):
        self.sync = Sync()

    @login_required
    def get(self):
        try:
            user = get_jwt_identity()

            # Checking for changing file in the database
            all_folders = [folder for folder in FolderModel.query.all()]
            all_files = [file for file in FileModel.query.all()]

            for folder in all_folders:
                if not os.path.exists(folder.path):
                    db.session.delete(folder)

            for file in all_files:
                if not os.path.exists(file.path):
                    db.session.delete(file)

            db.session.commit()

            self.sync.sync_folder(user['id'])

            return jsonify(status="success")
        except Exception as e:
            log.error(e)
            return jsonify(status="error", message="{}".format(e)), 500
