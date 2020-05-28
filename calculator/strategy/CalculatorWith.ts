import { Calculator } from "../Calculator";
import { Validator } from "./Validator";

export class CalculatorWith implements Calculator {
  constructor(private validator: Validator) {}

  sum(a: number, b: number): number {
    if (!this.validator.isValid(a, b)) {
      throw new Error("One of the two parameters is null");
    }
    return a + b;
  }
}
