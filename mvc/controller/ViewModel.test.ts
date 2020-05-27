import { Model } from "../model/Model";
import { BaseModel } from "../model/BaseModel";
import { View } from "../view/View";
import { ViewModel } from "./ViewModel";

describe("ViewModel", () => {
  it("should explicitly update model and view", () => {
    // given
    const model: Model = new BaseModel();

    const view: View = new View();

    const vm: ViewModel = new ViewModel();
    vm.setModel(model);
    vm.setView(view);

    // when
    vm.handleInput("world");

    // then
    expect(model.getAttribute()).toBe("world");
    expect(view.getOutput()).toBe("<h1>Hello world!</h1>");
  });
});
