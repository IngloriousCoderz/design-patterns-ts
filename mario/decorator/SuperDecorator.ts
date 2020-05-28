import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";

export class SuperDecorator implements Mario {
  constructor(private mario: Mario) {}

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
