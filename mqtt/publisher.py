# -*- coding: utf-8

import paho.mqtt.client as mqtt

CLIENT_ID = 'd12d677a'
CLIEND_PASS = '4f1245329c3363c'
serverAddress = 'broker.shiftr.io'
mqttClient = mqtt.client(serverAddress)

mqttClient.onConnectionLost = onConnectionLost
mqttClient.onMessageArrived = onMessageArrived

options = {
    userName: CLIENT_ID,
    password: CLIEND_PASS,
    useSSL: false,
    onSuccess: onConnect,
    onFailure: doFail
}

mqttCliet.connect(options)
mqttClient.loop_start()

def onConnect(mqttClient, obj, flags, rc):
    print("onconnect")
    message.destinationname = "topic0";
    mqttClient.send(message)

def doFail(e):
    print(e)

def onConnectionLost(res):
    if res.errorCode != 0:
        print("onConnectionLost:", res.errorMessage) 

def onMessageArrived(mes):
    print("onMessageArrived:", mes.payloadString)