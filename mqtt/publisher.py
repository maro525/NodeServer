# -*- coding: utf-8 -*-

import paho.mqtt.client as mqtt
from time import sleep

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
        mqttClient.publish("topic0", "hello")
        sleep(3)

if __name__ == '__main__':
    main()
