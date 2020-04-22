from onyx.brain.core import OnyxNeuron
from onyx.utils.log import getLogger

__author__ = 'Cassim Khouani'

LOGGER = getLogger("Cloud")

class CloudNeuron(OnyxNeuron):
    def __init__(self):
        super(CloudNeuron, self).__init__(name="CloudNeuron", raw_name="cloud")

    def initialize(self):
        #Initialize the Neuron
        LOGGER.info("Cloud init")

    def stop(self):
        pass

def create_neuron():
    return CloudNeuron()
