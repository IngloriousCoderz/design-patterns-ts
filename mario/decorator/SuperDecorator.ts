import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";

export class SuperDecorator implements Mario {
  private mario: Mario;

  constructor(mario: Mario) {
    this.mario = mario;
  }

  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.DOWN:
        return this.crash();

      default:
        return this.mario.onKeyPressed(keyCode);
    }
  }

  private crash(): string {
    return "Crashing";
  }
}
