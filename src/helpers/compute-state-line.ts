import type { HassObject, ResolvedEntities } from "../types";
import { localize } from "../localize";

const EMPTY_STATES = new Set(["", "unknown", "unavailable"]);
const PLACEHOLDERS = new Set(["", "unknown", "unavailable", "-"]);

function readState(hass: HassObject, entityId: string): string {
  if (!entityId) return "";
  return hass.states[entityId]?.state ?? "";
}

function isPlaceholder(s: string): boolean {
  return PLACEHOLDERS.has(s);
}

export function computeStateLine(
  hass: HassObject,
  entities: ResolvedEntities,
  lang: string
): string {
  const inGame = readState(hass, entities.in_game).toLowerCase();

  if (EMPTY_STATES.has(inGame) || inGame === "off") {
    return localize("state.standby", lang);
  }

  if (inGame === "on") {
    const game = readState(hass, entities.game_name);
    if (!isPlaceholder(game)) {
      return `${localize("state.playing", lang)} ${game}`;
    }
    const tid = readState(hass, entities.title_id);
    if (!isPlaceholder(tid)) {
      return `${localize("state.playing", lang)} ${tid}`;
    }
    return localize("state.playing", lang);
  }

  return localize("state.standby", lang);
}
