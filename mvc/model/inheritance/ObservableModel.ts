import { Subject } from "../../../observer/Subject";
import { Model } from "../Model";

export class ObservableModel extends Subject implements Model {
  private attribute: string;

  getAttribute(): string {
    return this.attribute;
  }

  setAttribute(attribute: string): void {
    this.attribute = attribute;
    this.notifyObservers(attribute);
  }
}
