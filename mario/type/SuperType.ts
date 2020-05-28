import { Type } from "./Type";
import { BaseType } from "./BaseType";
import { KeyCode } from "../KeyCode";

export class SuperType extends Type {
  constructor() {
    super();
    this.parent = new BaseType();
  }

  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.DOWN:
        return this.crash();

      default:
        return this.parent.onKeyPressed(keyCode);
    }
  }

  private crash(): string {
    return "Crashing";
  }
}
