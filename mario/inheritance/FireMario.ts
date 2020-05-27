import { SuperMario } from "./SuperMario";
import { KeyCode } from "../KeyCode";

export class FireMario extends SuperMario {
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
