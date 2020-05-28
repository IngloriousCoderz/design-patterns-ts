import { Model } from "../Model";
import { Subject } from "../../../observer/Subject";
import { Observer } from "../../../observer/Observer";

export class ModelWithSubject implements Model {
  private attribute: string;
  private subject: Subject;

  constructor() {
    this.subject = new Subject();
  }

  addObserver(observer: Observer): void {
    this.subject.addObserver(observer);
  }

  getAttribute(): string {
    return this.attribute;
  }

  setAttribute(attribute: string): void {
    this.attribute = attribute;
    this.subject.notifyObservers(attribute);
  }
}
