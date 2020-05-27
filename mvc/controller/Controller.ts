import { Model } from "../model/Model";

export class Controller {
  private model: Model;

  setModel(model: Model): void {
    this.model = model;
  }

  handleInput(input: string): void {
    this.model.setAttribute(input);
  }
}
