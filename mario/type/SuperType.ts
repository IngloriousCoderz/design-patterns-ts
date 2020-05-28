import { BaseType } from "./BaseType";
import { KeyCode } from "../KeyCode";

export class SuperType extends BaseType {
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
