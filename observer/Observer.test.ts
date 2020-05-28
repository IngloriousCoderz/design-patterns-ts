import { Subject } from "./Subject";
import { Observer } from "./Observer";
import { ObserverImpl } from "./ObserverImpl";

describe("Observer", () => {
  it("should wake up when notified", () => {
    // given
    const subject: Subject = new Subject();
    const observer: Observer = new ObserverImpl();
    subject.addObserver(observer);

    // when
    subject.notifyObservers("hello world");

    // then
    expect((observer as ObserverImpl).getMessage()).toBe("hello world");
  });
});
