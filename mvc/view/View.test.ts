import { View } from "./View";

describe("View", () => {
  it("should initialize", () => {
    // given
    const view: View = new View();

    // when

    // then
    expect(view.getOutput()).toBe("<h1>Hello nobody!</h1>");
  });

  it("should update", () => {
    // given
    const view: View = new View();

    // when
    view.update("world");

    // then
    expect(view.getOutput()).toBe("<h1>Hello world!</h1>");
  });
});
