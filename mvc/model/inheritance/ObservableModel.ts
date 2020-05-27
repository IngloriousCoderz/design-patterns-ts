import { Observable } from "../../observer/Observable";
import { Model } from "../Model";

export class ObservableModel extends Observable implements Model {
  private attribute: string;

  getAttribute(): string {
    return this.attribute;
  }

  setAttribute(attribute: string): void {
    this.attribute = attribute;
    this.notifyObservers(attribute);
  }
}
