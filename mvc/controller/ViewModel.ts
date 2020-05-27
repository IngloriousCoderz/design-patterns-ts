import { Model } from "../model/Model";
import { View } from "../view/View";

export class ViewModel {
  private model: Model;
  private view: View;

  setModel(model: Model): void {
    this.model = model;
  }

  setView(view: View): void {
    this.view = view;
  }

  handleInput(input: string): void {
    this.model.setAttribute(input);
    this.view.update(this.model.getAttribute());
  }
}
