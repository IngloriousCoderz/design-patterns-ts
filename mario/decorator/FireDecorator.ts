import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";

export class FireDecorator implements Mario {
  constructor(private mario: Mario) {}

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
