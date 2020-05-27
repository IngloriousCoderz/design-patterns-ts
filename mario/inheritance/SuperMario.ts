import { BaseMario } from "./BaseMario";
import { KeyCode } from "../KeyCode";

export class SuperMario extends BaseMario {
  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.DOWN:
        return this.crash();

      default:
        return super.onKeyPressed(keyCode);
    }
  }

  private crash(): string {
    return "Crashing";
  }
}
