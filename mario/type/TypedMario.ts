import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { Type } from "./Type";

export class TypedMario implements Mario {
  private type: Type;

  constructor(type: Type) {
    this.type = type;
  }

  onKeyPressed(keyCode: KeyCode): string {
    return this.type.onKeyPressed(keyCode);
  }

  setState(type: Type): void {
    this.type = type;
  }
}
