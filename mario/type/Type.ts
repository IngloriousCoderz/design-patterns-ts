import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { TypedMario } from "./TypedMario";

/* Subclass Sandbox */
export abstract class Type {
  protected parent: Type;

  abstract onKeyPressed(keyCode: KeyCode): string;

  /* Factory Method */
  newMario(): Mario {
    return new TypedMario(this);
  }
}
