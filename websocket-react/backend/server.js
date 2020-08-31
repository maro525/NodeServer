const WebSocket = require('ws');

const WebSocketServer = new WebSocket.Server({ port: 3000 });

WebSocketServer.on('connection', (ws) => {
  ws.on('message', (data) => {
    WebSocketServer.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  })
})