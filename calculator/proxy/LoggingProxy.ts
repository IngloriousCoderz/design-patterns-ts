import { Calculator } from "../Calculator";

export class LoggingProxy implements Calculator {
  private calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  sum(a: number, b: number): number {
    // before
    console.log("Input: " + a + ", " + b);
    // chain
    const sum: number = this.calculator.sum(a, b);
    // after
    console.log("Output: " + sum);
    return sum;
  }
}
