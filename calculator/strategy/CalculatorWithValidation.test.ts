import { Calculator } from "../Calculator";
import { CalculatorWith } from "./CalculatorWith";
import { Validator } from "./Validator";

describe("Validating Calculator", () => {
  it("should perform the sum if inputs are valid", () => {
    const calculator: Calculator = new CalculatorWith(new Validator());
    expect(calculator.sum(2, 3)).toBe(5);
  });

  it("should throw an error if inputs are invalid", () => {
    const calculator: Calculator = new CalculatorWith(new Validator());
    expect(() => calculator.sum(null, 3)).toThrow();
  });
});
