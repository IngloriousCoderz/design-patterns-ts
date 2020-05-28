import { Type } from "./Type";
import { SuperType } from "./SuperType";
import { KeyCode } from "../KeyCode";

export class PowerType extends Type {
  constructor() {
    super();
    this.parent = new SuperType();
  }
  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.JUMP:
        return this.glide();

      case KeyCode.ACTION:
        return this.shoot();

      default:
        return this.parent.onKeyPressed(keyCode);
    }
  }

  private shoot(): string {
    return "Shooting";
  }

  private glide(): string {
    return "Gliding";
  }
}
