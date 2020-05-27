import { Calculator } from "../Calculator";

export class BaseCalculator implements Calculator {
  sum(a: number, b: number): number {
    return a + b;
  }
}
