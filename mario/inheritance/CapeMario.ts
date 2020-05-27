import { SuperMario } from "./SuperMario";
import { KeyCode } from "../KeyCode";

export class CapeMario extends SuperMario {
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
