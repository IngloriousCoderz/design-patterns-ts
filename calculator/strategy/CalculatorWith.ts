import { Calculator } from "../Calculator";
import { Validator } from "./Validator";

export class CalculatorWith implements Calculator {
  private validator: Validator;

  constructor(validator: Validator) {
    this.validator = validator;
  }

  sum(a: number, b: number): number {
    if (!this.validator.isValid(a, b)) {
      throw new Error("One of the two parameters is null");
    }
    return a + b;
  }
}
