import { KeyCode } from "../KeyCode";

export interface State {
  onKeyPressed(keyCode: KeyCode): string;
}
