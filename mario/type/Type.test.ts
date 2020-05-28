import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { BaseType } from "./BaseType";
import { SuperType } from "./SuperType";
import { FireType } from "./FireType";
import { CapeType } from "./CapeType";
import { PowerType } from "./PowerType";

describe("Type", () => {
  it("should behave as Base Mario", () => {
    const mario: Mario = new BaseType().newMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Super Mario", () => {
    const mario: Mario = new SuperType().newMario();
    /* state transitions */
    // const mario: Mario = new BaseType().newMario();
    // (mario as TypedMario).setType(new SuperType());

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Fire Mario", () => {
    const mario: Mario = new FireType().newMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });

  it("should behave as Cape Mario", () => {
    const mario: Mario = new CapeType().newMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Power Mario", () => {
    const mario: Mario = new PowerType().newMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });
});
