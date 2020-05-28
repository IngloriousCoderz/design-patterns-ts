import { Model } from "../Model";
import { Observer } from "../../../observer/Observer";

export class GodModel implements Model {
  private attribute: string;
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  getAttribute(): string {
    return this.attribute;
  }

  setAttribute(attribute: string): void {
    this.attribute = attribute;
    this.notifyObservers(attribute);
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  private notifyObservers(variable: string): void {
    this.observers.forEach((observer: Observer) => observer.wakeUp(variable));
  }
}
