import { Calculator } from "./Calculator";

export class CalculatorImpl implements Calculator {
  sum(a: number, b: number): number {
    return a + b;
  }
}
