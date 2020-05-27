import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { BaseMario } from "./BaseMario";
import { SuperDecorator } from "./SuperDecorator";
import { FireDecorator } from "./FireDecorator";
import { CapeDecorator } from "./CapeDecorator";

describe("Decorator", () => {
  it("should behave as Base Mario", () => {
    const mario: Mario = new BaseMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Super Mario", () => {
    let mario: Mario = new BaseMario();
    mario = new SuperDecorator(mario);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Fire Mario", () => {
    let mario: Mario = new BaseMario();
    mario = new SuperDecorator(mario);
    mario = new FireDecorator(mario);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });

  it("should behave as Cape Mario", () => {
    let mario: Mario = new BaseMario();
    mario = new SuperDecorator(mario);
    mario = new CapeDecorator(mario);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Power Mario", () => {
    let mario: Mario = new BaseMario();
    mario = new SuperDecorator(mario);
    mario = new FireDecorator(mario);
    mario = new CapeDecorator(mario);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });
});
