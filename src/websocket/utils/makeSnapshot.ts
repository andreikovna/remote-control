import { MousePosition } from './circleCoordinates';
import { screen, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export const makeSnapshot = async (mousePosition: MousePosition) => {
  const image = await screen.grabRegion(new Region(mousePosition.x, mousePosition.y, 200, 200));
  const imageRGB = await image.toRGB();

  const imageJimp = new Jimp({ data: imageRGB.data, width: image.width, height: image.height }, (err, image) => {
    if (err) throw err;
    return image;
  });
  
  return (await imageJimp.getBufferAsync(Jimp.MIME_PNG)).toString('base64');
};
