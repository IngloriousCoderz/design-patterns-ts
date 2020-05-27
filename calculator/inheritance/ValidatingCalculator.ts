import { BaseCalculator } from "./BaseCalculator";

export class ValidatingCalculator extends BaseCalculator {
  sum(a: number, b: number): number {
    if (a == null || b == null) {
      throw new Error("One of the two parameters is null");
    }

    return super.sum(a, b);
  }
}
