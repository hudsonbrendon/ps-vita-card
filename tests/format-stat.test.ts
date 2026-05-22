import { describe, it, expect } from "vitest";
import { formatStat } from "../src/helpers/format-stat";

describe("formatStat", () => {
  it("returns the em-dash when state is missing", () => {
    expect(formatStat(undefined, { entity: "x", subtitle: "" })).toBe("—");
  });

  it("returns the em-dash for 'unknown' / 'unavailable' / ''", () => {
    for (const s of ["unknown", "unavailable", ""]) {
      expect(formatStat({ state: s, attributes: {} }, { entity: "x", subtitle: "" })).toBe("—");
    }
  });

  it("appends unit when numeric", () => {
    expect(formatStat({ state: "71", attributes: {} },
      { entity: "x", unit: "%", subtitle: "" })).toBe("71%");
  });

  it("applies multiply + precision", () => {
    expect(formatStat({ state: "3044", attributes: {} },
      { entity: "x", multiply: 0.01, precision: 1, unit: "°C", subtitle: "" })).toBe("30.4°C");
  });

  it("falls through to raw string + suffix for non-numeric state", () => {
    expect(formatStat({ state: "Tearaway", attributes: {} },
      { entity: "x", suffix: "!", subtitle: "" })).toBe("Tearaway!");
  });

  it("treats placeholder '-' (from ps-vita-mqtt-plugin empty fields) as missing", () => {
    expect(formatStat({ state: "-", attributes: {} },
      { entity: "x", subtitle: "" })).toBe("—");
  });
});
