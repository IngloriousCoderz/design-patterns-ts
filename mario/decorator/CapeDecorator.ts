import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";

export class CapeDecorator implements Mario {
  constructor(private mario: Mario) {}

  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.JUMP:
        return this.glide();

      default:
        return this.mario.onKeyPressed(keyCode);
    }
  }

  private glide(): string {
    return "Gliding";
  }
}
