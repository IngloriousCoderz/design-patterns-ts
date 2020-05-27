import { Calculator } from "../Calculator";

export class ValidationProxy implements Calculator {
  private calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  sum(a: number, b: number): number {
    if (a == null || b == null) {
      throw new Error("One of the two parameters is null");
    }

    return this.calculator.sum(a, b);
  }
}
