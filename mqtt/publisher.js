var mqtt = require('mqtt');
var mqtturl = 'mqtt://192.168.0.180'

console.log('connecting to: ' + mqtturl);
var client = mqtt.connect(mqtturl, {clientId: 'nodejs-pub'});

client.on('connect', () => {
  console.log('publisher connected.');

  var i = 0;
  setInterval(() => {
    var msg = i.toString();
    client.publish('topic0', msg);
    i += 1;
    console.log('publisher published:', i);
  }, 10);

});

