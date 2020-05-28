import { SuperType } from "./SuperType";
import { KeyCode } from "../KeyCode";

export class FireType extends SuperType {
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
