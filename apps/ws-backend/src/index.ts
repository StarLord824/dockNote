import {WebSocketServer, WebSocket} from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken';
// import JWT_SECRET from '@repo/backend-common/config'; // Ensure you have a jwtSecret file that exports your secret

const wss = new WebSocketServer({port: 8080});

wss.on('connection', (ws: WebSocket, request: Request) => {
  const url = request.url;
  console.log('New client connected', url);

  const queryParams = new URLSearchParams(url?.split('?')[1] || '');
  const token = queryParams.get('token') || "";

  console.log('Token:', token);
  const decoded= jwt.verify(token , 'JWT_SECRET');
  
  if (!decoded || !(decoded as JwtPayload).userId) {
    ws.close(1008, 'Unauthorized');
    return;
  }
  ws.on('message', (message: string) => {
    console.log('received: ', message);
  });

  ws.send('something');
});