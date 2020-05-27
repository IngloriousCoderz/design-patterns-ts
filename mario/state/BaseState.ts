import { State } from "./State";
import { KeyCode } from "../KeyCode";

export class BaseState implements State {
  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.LEFT:
        return this.moveLeft();

      case KeyCode.RIGHT:
        return this.moveRight();

      case KeyCode.JUMP:
        return this.jump();

      case KeyCode.ACTION:
        return this.run();

      default:
        return this.noop();
    }
  }

  private moveLeft(): string {
    return "Moving left";
  }

  private moveRight(): string {
    return "Moving right";
  }

  private jump(): string {
    return "Jumping";
  }

  private run(): string {
    return "Running";
  }

  private noop(): string {
    return "";
  }
}
