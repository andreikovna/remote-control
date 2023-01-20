import { mouse, Point, straightTo } from '@nut-tree/nut-js';

type MousePosition = {
  x: number;
  y: number;
};

export const circleCoordinates = async (mousePosition: MousePosition, radius: number) => {
  for (let i = 0; i < radius; i += 1) {
    const x = mousePosition.x + i;
    const y = -1 * Math.sqrt(radius ** 2 - (x - mousePosition.x) ** 2) + mousePosition.y + radius;
    const point = new Point(x, y);
    await mouse.move(straightTo(point));
  }

  for (let i = 0; i < radius; i += 1) {
    const x = mousePosition.x + radius - i;
    const y = Math.sqrt(radius ** 2 - (x - mousePosition.x) ** 2) + mousePosition.y + radius;
    const point = new Point(x, y);
    await mouse.move(straightTo(point));
  }

  for (let i = 0; i < radius; i += 1) {
    const x = mousePosition.x - i;
    const y = Math.sqrt(radius ** 2 - (x - mousePosition.x) ** 2) + mousePosition.y + radius;
    const point = new Point(x, y);
    await mouse.move(straightTo(point));
  }

  for (let i = 0; i < radius; i += 1) {
    const x = mousePosition.x - radius + i;
    const y = -1 * Math.sqrt(radius ** 2 - (x - mousePosition.x) ** 2) + mousePosition.y + radius;
    const point = new Point(x, y);
    await mouse.move(straightTo(point));
  }
};
