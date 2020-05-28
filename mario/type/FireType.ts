import { Type } from "./Type";
import { SuperType } from "./SuperType";
import { KeyCode } from "../KeyCode";

export class FireType extends Type {
  constructor() {
    super();
    this.parent = new SuperType();
  }
  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.ACTION:
        return this.shoot();

      default:
        return this.parent.onKeyPressed(keyCode);
    }
  }

  private shoot(): string {
    return "Shooting";
  }
}
