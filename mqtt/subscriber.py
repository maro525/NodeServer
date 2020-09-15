# -*- coding: utf-8 -*-

import paho.mqtt.client as mqtt
import json
import pprint

# SERVER_ADDRESS = 'broker.shiftr.io'
SERVER_ADDRESS = '192.168.0.100'

def on_connect(client, userdata, flag, rc):
    print("Connected with result code " + str(rc))
    client.subscribe("topic0")

def on_disconenct(client, userdata, flag, rc):
    if rc != 0:
        print("Unexpected disconnection.")

def on_message(client, userdata, msg):
    print("Received message on topic " + msg.topic + "' with QoS " + str(msg.qos))
    received_data = msg.payload
    dict_data = json.loads(received_data)
    pprint.pprint(dict_data)

client = mqtt.Client("py-sub")
# client.username_pw_set(CLIENT_ID, CLIEND_PASS)
client.on_connect = on_connect
client.on_disconnect = on_disconenct
client.on_message = on_message

client.connect(SERVER_ADDRESS)

client.loop_forever()
