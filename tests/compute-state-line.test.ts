import { describe, it, expect } from "vitest";
import { computeStateLine } from "../src/helpers/compute-state-line";
import { resolveEntities } from "../src/helpers/resolve-entities";
import type { HassObject } from "../src/types";

const E = resolveEntities({ type: "x", entity: "psvita_sala" });

function hass(states: Record<string, string>): HassObject {
  const out: HassObject = { states: {} };
  for (const [k, v] of Object.entries(states)) {
    out.states[k] = { state: v, attributes: {} };
  }
  return out;
}

describe("computeStateLine", () => {
  it("'In LiveArea' when in_game is OFF", () => {
    const h = hass({ [E.in_game]: "off" });
    expect(computeStateLine(h, E, "en")).toBe("In LiveArea");
  });

  it("'Playing <game>' when in_game is ON and game_name has a value", () => {
    const h = hass({ [E.in_game]: "on", [E.game_name]: "Tearaway" });
    expect(computeStateLine(h, E, "en")).toBe("Playing Tearaway");
  });

  it("'Playing <TitleID>' when in_game is ON but game_name is empty/placeholder", () => {
    const h = hass({ [E.in_game]: "on", [E.title_id]: "PCSE12345", [E.game_name]: "-" });
    expect(computeStateLine(h, E, "en")).toBe("Playing PCSE12345");
  });

  it("'Playing' alone when in_game ON and both name + id are placeholders", () => {
    const h = hass({ [E.in_game]: "on", [E.title_id]: "-", [E.game_name]: "-" });
    expect(computeStateLine(h, E, "en")).toBe("Playing");
  });

  it("pt-BR variant", () => {
    const h = hass({ [E.in_game]: "off" });
    expect(computeStateLine(h, E, "pt-BR")).toBe("Na LiveArea");
  });

  it("treats 'unavailable' / 'unknown' / '' the same as missing", () => {
    const h = hass({ [E.in_game]: "unavailable" });
    expect(computeStateLine(h, E, "en")).toBe("In LiveArea");
  });
});
