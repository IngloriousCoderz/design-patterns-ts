import { BaseState } from "./BaseState";
import { KeyCode } from "../KeyCode";

export class SuperState extends BaseState {
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
