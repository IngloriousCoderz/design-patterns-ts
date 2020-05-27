import { Calculator } from "../Calculator";
import { BaseCalculator } from "./BaseCalculator";
import { ValidationProxy } from "./ValidationProxy";
import { LoggingProxy } from "./LoggingProxy";

describe("Proxied Calculator", () => {
  it("should perform the sum if inputs are valid", () => {
    let calculator: Calculator = new BaseCalculator();
    calculator = new ValidationProxy(calculator);
    // calculator = new LoggingProxy(calculator);
    expect(calculator.sum(2, 3)).toBe(5);
  });

  it("should throw an error if inputs are invalid", () => {
    let calculator: Calculator = new BaseCalculator();
    calculator = new ValidationProxy(calculator);
    // calculator = new LoggingProxy(calculator);
    expect(() => calculator.sum(null, 3)).toThrow();
  });
});
