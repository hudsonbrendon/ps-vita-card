import type { StatConfig, HassState } from "../types";

const MISSING = "—";
const EMPTY_STATES = new Set(["", "-", "unknown", "unavailable"]);

export function formatStat(state: HassState | undefined, cfg: StatConfig): string {
  if (!state || EMPTY_STATES.has(state.state)) {
    return MISSING;
  }
  const raw = state.state;
  const asNum = Number(raw);
  if (Number.isFinite(asNum)) {
    const multiplied = asNum * (cfg.multiply ?? 1);
    const text =
      cfg.precision != null ? multiplied.toFixed(cfg.precision) : String(multiplied);
    return `${text}${cfg.unit ?? ""}${cfg.suffix ?? ""}`;
  }
  return `${raw}${cfg.suffix ?? ""}`;
}
