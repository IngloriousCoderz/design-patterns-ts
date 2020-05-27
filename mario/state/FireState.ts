import { SuperState } from "./SuperState";
import { KeyCode } from "../KeyCode";

export class FireState extends SuperState {
  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.ACTION:
        return this.shoot();

      default:
        return super.onKeyPressed(keyCode);
    }
  }

  private shoot(): string {
    return "Shooting";
  }
}
