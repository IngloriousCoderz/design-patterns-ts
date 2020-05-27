import { Mario } from "../Mario";
import { KeyCode } from "../KeyCode";
import { StatefulMario } from "./StatefulMario";
import { BaseState } from "./BaseState";
import { SuperState } from "./SuperState";
import { FireState } from "./FireState";
import { CapeState } from "./CapeState";
import { PowerState } from "./PowerState";

describe("State", () => {
  it("should behave as Base Mario", () => {
    const mario: Mario = new StatefulMario(new BaseState());

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Super Mario", () => {
    const mario: Mario = new StatefulMario(new SuperState());

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Fire Mario", () => {
    const mario: Mario = new StatefulMario(new FireState());

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Jumping");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });

  it("should behave as Cape Mario", () => {
    const mario: Mario = new StatefulMario(new CapeState());

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Running");
  });

  it("should behave as Power Mario", () => {
    const mario: Mario = new StatefulMario(new PowerState());

    expect(mario.onKeyPressed(KeyCode.DOWN)).toBe("Crashing");
    expect(mario.onKeyPressed(KeyCode.JUMP)).toBe("Gliding");
    expect(mario.onKeyPressed(KeyCode.ACTION)).toBe("Shooting");
  });
});
