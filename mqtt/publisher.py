# -*- coding: utf-8 -*-

import paho.mqtt.client as mqtt
from time import sleep
import random
import json
import pprint

CLIENT_ID = 'd12d677a'
CLIEND_PASS = '4f1245329c3363c8'
SERVER_ADDRESS = 'broker.shiftr.io'

def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))


def on_disconnect(client, userdata, flag, rc):
    if rc != 0:
        print("Unexpected disconnection.")

def on_publish(client, userdata, mid):
    print("publish: {0}".format(mid))

def main():
    mqttClient = mqtt.Client("py-pub")
    mqttClient.username_pw_set(CLIENT_ID, CLIEND_PASS)
    mqttClient.on_connect = on_connect
    mqttClient.on_disconnect = on_disconnect
    mqttClient.on_publish = on_publish

    mqttClient.connect(SERVER_ADDRESS)

    mqttClient.loop_start()

    while True:
        json_person_data = { "person": [
            {
                "pos" : {
                    "x": random.randint(0, 100),
                    "y": random.randint(0, 100)
                },
                "age": random.randint(0, 40),
                "emotion": "happy"
            },
            {
                "pos" : {
                    "x": random.randint(0, 100),
                    "y": random.randint(0, 100)
                },
                "age": random.randint(0, 40),
                "emotion": "angry"
            },
            {
                "pos" : {
                    "x": random.randint(0, 100),
                    "y": random.randint(0, 100)
                },
                "age": random.randint(0, 40),
                "emotion": "tired"
            },

        ]}
        msg = json.dumps(json_person_data)
        pprint.pprint(msg)
        mqttClient.publish("topic0", msg)
        sleep(1)

if __name__ == '__main__':
    main()
