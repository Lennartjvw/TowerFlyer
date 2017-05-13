// dependencies
import ISpeedType from '../interfaces/ISpeedType';
import Speed2D from '../Speed2D';

class SpeedX implements ISpeedType {
  public speed: Speed2D;

  constructor(x: number) {
    this.speed = new Speed2D(x, 0);
  }

  public update = (x: number): void => {
    console.log('Updating speed X');
    console.log(`Current speed: ${this.speed.getX()}, ${this.speed.getY()}`);

    this.speed.set(x, 0);

    console.log(`Updated speed: ${this.speed.getX()}, ${this.speed.getY()}`);
  }
}

export default SpeedX;
