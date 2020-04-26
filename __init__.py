from onyx.brain.core import OnyxNeuron
from neurons.cloud.api.sync import Sync, SyncApi
from neurons.cloud.api.folder import GetFolder, DeleteFolder, AddFolder
from neurons.cloud.api.file import GetFile, UploadFile, DeleteFile
from onyx.utils.log import getLogger

import json

__author__ = 'Cassim Khouani'

LOGGER = getLogger("Cloud")

class CloudNeuron(OnyxNeuron):
    def __init__(self):
        super(CloudNeuron, self).__init__(name="CloudNeuron", raw_name="cloud")

    def get_api(self):
        api = [
            {
                'route': '/neuron/cloud/sync',
                'class': SyncApi
            },
            {
                'route': '/neuron/cloud/folder/get',
                'class': GetFolder
            },
            {
                'route': '/neuron/cloud/file/get',
                'class': GetFile
            },
            {
                'route': '/neuron/cloud/file/upload/<neuron_folder>',
                'class': UploadFile
            },
            {
                'route': '/neuron/cloud/file/delete',
                'class': DeleteFile
            },
            {
                'route': '/neuron/cloud/folder/delete',
                'class': DeleteFolder
            },
            {
                'route': '/neuron/cloud/folder/add',
                'class': AddFolder
            }
        ]
        return api

    def initialize(self):
        #Initialize the Neuron
        LOGGER.info("Cloud init")

    def stop(self):
        pass

def create_neuron():
    return CloudNeuron()
