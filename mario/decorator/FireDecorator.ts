import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";

export class FireDecorator implements Mario {
  private mario: Mario;

  constructor(mario: Mario) {
    this.mario = mario;
  }

  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.ACTION:
        return this.shoot();

      default:
        return this.mario.onKeyPressed(keyCode);
    }
  }

  private shoot(): string {
    return "Shooting";
  }
}
