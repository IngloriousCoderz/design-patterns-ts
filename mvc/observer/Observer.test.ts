import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { ObserverImpl } from "./ObserverImpl";

describe("Observer", () => {
  it("should wake up when notified", () => {
    // given
    const observable: Observable = new Observable();
    const observer: Observer = new ObserverImpl();
    observable.addObserver(observer);

    // when
    observable.notifyObservers("hello world");

    // then
    expect((observer as ObserverImpl).getMessage()).toBe("hello world");
  });
});
