import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { TypedMario } from "./TypedMario";

export abstract class Type {
  abstract onKeyPressed(keyCode: KeyCode): string;

  newMario(): Mario {
    return new TypedMario(this);
  }
}
