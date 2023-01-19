import { down, left, mouse, right, up, straightTo, Point } from '@nut-tree/nut-js';
import WebSocket, { createWebSocketStream } from 'ws';
import { MOUSE } from './utils/constants';
import { parser } from './utils/parser';

export const startServer = (ws: WebSocket) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (chunk: Buffer) => {
    console.log(`Received: ${chunk.toString()}`);
    const { command, option } = parser(chunk.toString());

    switch (command) {
      case MOUSE.UP:
        await mouse.move(up(+option));
        duplex.write(`${command}_${option}\n`);
        break;
      case MOUSE.DOWN:
        await mouse.move(down(+option));
        duplex.write(`${command}_${option}\n`);
        break;
      case MOUSE.LEFT:
        await mouse.move(left(+option));
        duplex.write(`${command}_${option}\n`);
        break;
      case MOUSE.RIGHT:
        await mouse.move(right(+option));
        duplex.write(`${command}_${option}\n`);
        break;
      case MOUSE.POSITION:
        const { x, y } = await mouse.getPosition();
        duplex.write(`${command} ${x},${y}`);
        break;
      default:
        duplex.write('Bad_request: \n');
        break;
    }
  });
};
