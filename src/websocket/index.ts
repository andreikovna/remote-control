import { WebSocketServer } from 'ws';
import { startServer } from './server';
import 'dotenv/config';

export const startApp = () => {
  const PORT = Number(process.env.PORT) || 4000;
  const wsServer = new WebSocketServer({ port: PORT });

  wsServer.on('connection', startServer);

  wsServer.on('listening', () => {
    console.info(`Websocket server is running on port ${PORT}`);
  });

  wsServer.on('close', () => {
    console.log('WebSocket connection was closed');
  });
};