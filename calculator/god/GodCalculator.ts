import { Calculator } from "../Calculator";

export class GodCalculator implements Calculator {
  sum(a: number, b: number): number {
    if (!this.isValid(a, b)) {
      throw new Error("One of the two parameters is null");
    }

    return a + b;
  }

  private isValid(a: number, b: number): boolean {
    return a != null && b != null;
  }
}
