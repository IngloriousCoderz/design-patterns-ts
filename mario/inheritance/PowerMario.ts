import { SuperMario } from "./SuperMario";
import { KeyCode } from "../KeyCode";

export class PowerMario extends SuperMario {
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
