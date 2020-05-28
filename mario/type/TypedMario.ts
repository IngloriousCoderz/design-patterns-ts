import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { Type } from "./Type";

export class TypedMario implements Mario {
  constructor(private type: Type) {}

  onKeyPressed(keyCode: KeyCode): string {
    return this.type.onKeyPressed(keyCode);
  }

  setType(type: Type): void {
    this.type = type;
  }
}
