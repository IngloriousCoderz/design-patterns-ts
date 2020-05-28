import { SuperType } from "./SuperType";
import { KeyCode } from "../KeyCode";

export class CapeType extends SuperType {
  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.JUMP:
        return this.glide();

      default:
        return super.onKeyPressed(keyCode);
    }
  }

  private glide(): string {
    return "Gliding";
  }
}
