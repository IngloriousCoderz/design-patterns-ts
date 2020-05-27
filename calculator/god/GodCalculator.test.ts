import { Calculator } from "../Calculator";
import { GodCalculator } from "./GodCalculator";

describe("God Calculator", () => {
  it("should perform the sum if inputs are valid", () => {
    const calculator: Calculator = new GodCalculator();
    expect(calculator.sum(2, 3)).toBe(5);
  });

  it("should throw an error if inputs are invalid", () => {
    const calculator: Calculator = new GodCalculator();
    expect(() => calculator.sum(null, 3)).toThrow();
  });
});
