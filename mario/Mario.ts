import { KeyCode } from "./KeyCode";

export interface Mario {
  onKeyPressed(keyCode: KeyCode): string;
}
