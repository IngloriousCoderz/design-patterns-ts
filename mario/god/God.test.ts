import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { GodMario } from "./GodMario";
import { Type } from "./Type";

describe("God", () => {
  it("should behave as Base Mario", () => {
    const mario: Mario = new GodMario(Type.BASE);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Super Mario", () => {
    const mario: Mario = new GodMario(Type.SUPER);
    /* state transitions */
    // const mario: Mario = new GodMario(Type.BASE);
    // (mario as GodMario).setType(Type.SUPER);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Fire Mario", () => {
    const mario: Mario = new GodMario(Type.FIRE);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });

  it("should behave as Cape Mario", () => {
    const mario: Mario = new GodMario(Type.CAPE);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Power Mario", () => {
    const mario: Mario = new GodMario(Type.POWER);

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });
});
