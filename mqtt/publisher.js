var mqtt = require('mqtt');
var mqtturl = 'mqtt://d12d677a:4f1245329c3363c8@broker.shiftr.io'

console.log('connecting to: ' + mqtturl);
var client = mqtt.connect(mqtturl, {clientId: 'nodejs-pub'});

client.on('connect', () => {
  console.log('publisher connected.');
});

var i = 0;
setInterval(() => {
  var msg = i.toString();
  client.publish('topic0', msg);
  i += 1;
  console.log('publisher published:', i);
}, 10);
