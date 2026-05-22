import { describe, it, expect } from "vitest";
import { resolveEntities } from "../src/helpers/resolve-entities";
import { ENTITY_KEYS } from "../src/const";

describe("resolveEntities", () => {
  it("auto-builds sensor.<prefix>_<key> for every non-binary key", () => {
    const m = resolveEntities({ type: "x", entity: "psvita_sala" });
    expect(m.battery_level).toBe("sensor.psvita_sala_battery_level");
    expect(m.firmware).toBe("sensor.psvita_sala_firmware");
    expect(m.title_id).toBe("sensor.psvita_sala_title_id");
  });

  it("auto-builds binary_sensor for binary keys", () => {
    const m = resolveEntities({ type: "x", entity: "psvita_sala" });
    expect(m.battery_charging).toBe("binary_sensor.psvita_sala_battery_charging");
    expect(m.in_game).toBe("binary_sensor.psvita_sala_in_game");
    expect(m.link).toBe("binary_sensor.psvita_sala_link");
  });

  it("explicit `entities` overrides win over the prefix", () => {
    const m = resolveEntities({
      type: "x",
      entity: "psvita_sala",
      entities: { battery_level: "sensor.custom_id" },
    });
    expect(m.battery_level).toBe("sensor.custom_id");
    expect(m.battery_temp).toBe("sensor.psvita_sala_battery_temp");
  });

  it("leaves every key as empty string when no prefix and no overrides", () => {
    const m = resolveEntities({ type: "x" });
    for (const k of ENTITY_KEYS) {
      expect(m[k]).toBe("");
    }
  });

  it("trims whitespace in the prefix", () => {
    const m = resolveEntities({ type: "x", entity: "  psvita_sala  " });
    expect(m.battery_level).toBe("sensor.psvita_sala_battery_level");
  });
});
