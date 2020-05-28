import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { BaseMario } from "./BaseMario";
import { SuperMario } from "./SuperMario";
import { FireMario } from "./FireMario";
import { CapeMario } from "./CapeMario";
import { PowerMario } from "./PowerMario";

describe("Inheritance", () => {
  it("should behave as Base Mario", () => {
    const mario: Mario = new BaseMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Super Mario", () => {
    const mario: Mario = new SuperMario();
    /* state transitions */
    // let mario: Mario = new BaseMario();
    // mario = new SuperMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Fire Mario", () => {
    const mario: Mario = new FireMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });

  it("should behave as Cape Mario", () => {
    const mario: Mario = new CapeMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Power Mario", () => {
    const mario: Mario = new PowerMario();

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });
});
