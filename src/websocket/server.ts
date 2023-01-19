import { down, left, mouse, right, up, straightTo, Point } from '@nut-tree/nut-js';
import WebSocket, { createWebSocketStream } from 'ws';
import { parser } from './utils/parser';

export const startServer = (ws: WebSocket) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (chunk: Buffer) => {
    console.log(`Received: ${chunk.toString()}`);
    const { command, option } = parser(chunk.toString());

    console.log(command);
    switch (command) {
      case 'mouse_up':
        await mouse.move(up(+option));
        break;
      case 'mouse_down':
        await mouse.move(down(+option));
        break;
      case 'mouse_left':
        await mouse.move(left(+option));
        break;
      case 'mouse_right':
        await mouse.move(right(+option));
        break;
      case 'mouse_position':
        const target = new Point(0, 0);
        await mouse.move(straightTo(target));
        break;
      default:
        duplex.write('Bad_request: \n');
        break;
    }
    duplex.write(`${command} \n`);
  });
};
