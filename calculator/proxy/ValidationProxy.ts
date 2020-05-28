import { Calculator } from "../Calculator";

export class ValidationProxy implements Calculator {
  constructor(private calculator: Calculator) {}

  sum(a: number, b: number): number {
    if (a == null || b == null) {
      throw new Error("One of the two parameters is null");
    }

    return this.calculator.sum(a, b);
  }
}
