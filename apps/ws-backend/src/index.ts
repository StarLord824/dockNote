import {WebSocketServer, WebSocket} from 'ws';

const wss = new WebSocketServer({port: 8080});

wss.on('connection', (ws: WebSocket) => {
  
  ws.on('message', (message: string) => {
    console.log('received: ', message);
  });

  ws.send('something');
});