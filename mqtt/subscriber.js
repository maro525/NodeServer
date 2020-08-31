var mqtt = require('mqtt');
var mqtturl = 'mqtt://d12d677a:4f1245329c3363c8@broker.shiftr.io';

console.log('connecting to: ' + mqtturl);
var client = mqtt.connect(mqtturl, {clientId: 'nodejs-sub'})

client.on('connect', () => {
  console.log('subscriber connected.');
});

client.subscribe('topic0', (err, granted) => {
  if (err) {
    console.log('subscriber subscribe failed:', err);
  } else {
    console.log('subscriber subscribed.');
  }
});

client.on('message', (topic, message) => {
  console.log('subscriber on.message topic:', topic);
  const parsed_obj = JSON.parse(message);
  // デバッグ用
  console.log(JSON.stringify(parsed_obj));
});
