import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { State } from "./State";

export class StatefulMario implements Mario {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  onKeyPressed(keyCode: KeyCode): string {
    return this.state.onKeyPressed(keyCode);
  }

  setState(state: State): void {
    this.state = state;
  }
}
