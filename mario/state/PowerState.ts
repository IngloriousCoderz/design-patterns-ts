import { SuperState } from "./SuperState";
import { KeyCode } from "../KeyCode";

export class PowerState extends SuperState {
  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.JUMP:
        return this.glide();

      case KeyCode.ACTION:
        return this.shoot();

      default:
        return super.onKeyPressed(keyCode);
    }
  }

  private shoot(): string {
    return "Shooting";
  }

  private glide(): string {
    return "Gliding";
  }
}
