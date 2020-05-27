import { Calculator } from "./Calculator";
import { CalculatorImpl } from "./CalculatorImpl";

describe("Default Calculator Implementation", () => {
  it("should sum two numbers", () => {
    const calc: Calculator = new CalculatorImpl();
    expect(calc.sum(2, 3)).toBe(5);
  });
});
