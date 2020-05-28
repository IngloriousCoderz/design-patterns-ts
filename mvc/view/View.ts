import { Observer } from "../../observer/Observer";

export class View implements Observer {
  private static TEMPLATE: string = "<h1>Hello ${variable}!</h1>";

  private output: string;

  constructor() {
    this.update("nobody");
  }

  update(variable: string): void {
    this.output = View.TEMPLATE.replace("${variable}", variable);
  }

  getOutput(): string {
    return this.output;
  }

  wakeUp(variable: string): void {
    this.update(variable);
  }
}
