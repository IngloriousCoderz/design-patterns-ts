import { Type } from "./Type";
import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";

export class GodMario implements Mario {
  constructor(private type: Type) {}

  setType(type: Type): void {
    this.type = type;
  }

  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.LEFT:
        return this.moveLeft();

      case KeyCode.RIGHT:
        return this.moveRight();

      case KeyCode.DOWN:
        switch (this.type) {
          case Type.SUPER:
          case Type.FIRE:
          case Type.CAPE:
          case Type.POWER:
            return this.crash();

          default:
            return this.noop();
        }

      case KeyCode.JUMP:
        switch (this.type) {
          case Type.CAPE:
          case Type.POWER:
            return this.glide();

          default:
            return this.jump();
        }

      case KeyCode.ACTION:
        switch (this.type) {
          case Type.FIRE:
          case Type.POWER:
            return this.shoot();

          default:
            return this.run();
        }

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

  private crash(): string {
    return "Crashing";
  }

  private jump(): string {
    return "Jumping";
  }

  private glide(): string {
    return "Gliding";
  }

  private run(): string {
    return "Running";
  }

  private shoot(): string {
    return "Shooting";
  }

  private noop(): string {
    return "";
  }
}
