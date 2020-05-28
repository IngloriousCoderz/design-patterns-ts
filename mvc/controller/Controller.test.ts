import { Model } from "../model/Model";
import { GodModel } from "../model/god/GodModel";
import { View } from "../view/View";
import { Controller } from "./Controller";
import { ObservableModel } from "../model/inheritance/ObservableModel";
import { ModelWithSubject } from "../model/strategy/ModelWithSubject";
import { ObservableDecorator } from "../model/decorator/ObservableDecorator";
import { BaseModel } from "../model/BaseModel";
import { Subject } from "../../observer/Subject";

describe("Controller", () => {
  it("should let the model notify the view (God)", () => {
    // given
    const model: Model = new GodModel();

    const view: View = new View();
    (model as GodModel).addObserver(view);

    const controller: Controller = new Controller();
    controller.setModel(model);

    // when
    controller.handleInput("world");

    // then
    expect(model.getAttribute()).toBe("world");
    expect(view.getOutput()).toBe("<h1>Hello world!</h1>");
  });

  it("should let the model notify the view (Inheritance)", () => {
    // given
    const model: Model = new ObservableModel();

    const view: View = new View();
    // @ts-ignore
    (model as Subject).addObserver(view);

    const controller: Controller = new Controller();
    controller.setModel(model);

    // when
    controller.handleInput("world");

    // then
    expect(model.getAttribute()).toBe("world");
    expect(view.getOutput()).toBe("<h1>Hello world!</h1>");
  });

  it("should let the model notify the view (Strategy)", () => {
    // given
    const model: Model = new ModelWithSubject();

    const view: View = new View();
    (model as ModelWithSubject).addObserver(view);

    const controller: Controller = new Controller();
    controller.setModel(model);

    // when
    controller.handleInput("world");

    // then
    expect(model.getAttribute()).toBe("world");
    expect(view.getOutput()).toBe("<h1>Hello world!</h1>");
  });

  it("should let the model notify the view (Decorator)", () => {
    // given
    let model: Model = new BaseModel();
    model = new ObservableDecorator(model);

    const view: View = new View();
    // @ts-ignore
    (model as Subject).addObserver(view);

    const controller: Controller = new Controller();
    controller.setModel(model);

    // when
    controller.handleInput("world");

    // then
    expect(model.getAttribute()).toBe("world");
    expect(view.getOutput()).toBe("<h1>Hello world!</h1>");
  });
});
