import WebSocket, { createWebSocketStream } from 'ws';

export const startServer = (ws: WebSocket) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (chunk: Buffer) => {
    console.log(`Received: ${chunk.toString()}`);
  });
};
