import { SuperState } from "./SuperState";
import { KeyCode } from "../KeyCode";

export class CapeState extends SuperState {
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
