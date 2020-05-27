import { Model } from "../Model";
import { Observable } from "../../observer/Observable";
import { Observer } from "../../observer/Observer";

export class ModelWithObservable implements Model {
  private attribute: string;
  private observable: Observable;

  constructor() {
    this.observable = new Observable();
  }

  addObserver(observer: Observer): void {
    this.observable.addObserver(observer);
  }

  getAttribute(): string {
    return this.attribute;
  }

  setAttribute(attribute: string): void {
    this.attribute = attribute;
    this.observable.notifyObservers(attribute);
  }
}
