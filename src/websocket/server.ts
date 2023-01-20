import { down, left, mouse, right, up, straightTo, Point, Button } from '@nut-tree/nut-js';
import WebSocket, { createWebSocketStream } from 'ws';
import { circleCoordinates } from './utils/circleCoordinates';
import { DRAW, MOUSE } from './utils/constants';
import { parser } from './utils/parser';

export const startServer = (ws: WebSocket) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (chunk: Buffer) => {
    console.log(`Received: ${chunk.toString()}`);
    const { command, option, option2 } = parser(chunk.toString());

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
      case DRAW.CIRCLE:
        const curPos = await mouse.getPosition();
        await mouse.pressButton(Button.LEFT);
        await circleCoordinates(curPos, +option);
        await mouse.releaseButton(Button.LEFT);
        duplex.write(`${command}_${option}\n`);
        break;
      case DRAW.SQUARE:
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(+option));
        await mouse.move(down(+option));
        await mouse.move(left(+option));
        await mouse.move(up(+option));
        await mouse.releaseButton(Button.LEFT);
        duplex.write(`${command}_${option}\n`);
        break;
      case DRAW.RECTANGLE:
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(+option2));
        await mouse.move(down(+option));
        await mouse.move(left(+option2));
        await mouse.move(up(+option));
        await mouse.releaseButton(Button.LEFT);
        duplex.write(`${command}_${option}_${option2}\n`);
        break;
      default:
        duplex.write('Bad_request: \n');
        break;
    }
  });
};
