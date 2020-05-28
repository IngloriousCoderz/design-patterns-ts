import { Type } from "./Type";
import { SuperType } from "./SuperType";
import { KeyCode } from "../KeyCode";

export class CapeType extends Type {
  constructor() {
    super();
    this.parent = new SuperType();
  }

  onKeyPressed(keyCode: KeyCode): string {
    switch (keyCode) {
      case KeyCode.JUMP:
        return this.glide();

      default:
        return this.parent.onKeyPressed(keyCode);
    }
  }

  private glide(): string {
    return "Gliding";
  }
}
