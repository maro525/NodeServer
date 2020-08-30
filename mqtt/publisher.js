var mqtt = require('mqtt');
var mqtturl = 'mqtt://d12d677a:4f1245329c3363c8@broker.shiftr.io'

console.log('connecting to: ' + mqtturl);
var client = mqtt.connect(mqtturl, {clientId: 'nodejs-pub'});

client.on('connect', () => {
  console.log('publisher connected.');
});

setInterval(() => {
  var message = new Date().toString();
  client.publish('topic0', message);
  console.log('publisher published:', message);
}, 5000);