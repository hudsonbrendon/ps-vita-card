import { ENTITY_KEYS, BINARY_KEYS, type EntityKey } from "../const";
import type { HassObject, PSVitaCardConfig, ResolvedEntities } from "../types";

/**
 * HA MQTT-Discovery builds entity ids as `<domain>.<unique_id_slug>`.
 * ps-vita-mqtt-plugin sets `unique_id = <client_id>_<key>` directly,
 * so once the user-visible `entity` prefix is the slugified client_id
 * (e.g. "psvita_sala"), the resolved id is `<domain>.<prefix>_<key>`.
 *
 * No `_miyoo_` infix here (that's specific to miyoo-mqtt-reporter).
 */
// `entity:` prefix for the device's MQTT battery sensor, or undefined when the
// entity is not one (wrong platform/suffix, or no sibling charging sensor).
export function suggestPrefix(hass: HassObject, entityId: string): string | undefined {
  const entry = hass.entities?.[entityId];
  if (entry && entry.platform !== "mqtt") return undefined;
  const m = /^sensor\.(.+)_battery_level$/.exec(entityId);
  if (!m) return undefined;
  const prefix = m[1];
  return hass.states[`binary_sensor.${prefix}_battery_charging`] ? prefix : undefined;
}

export function resolveEntities(config: PSVitaCardConfig): ResolvedEntities {
  const map = {} as ResolvedEntities;
  const overrides = config.entities ?? {};
  const prefix = config.entity?.trim() ?? "";

  for (const key of ENTITY_KEYS) {
    if (overrides[key]) {
      map[key] = overrides[key]!;
    } else if (prefix) {
      const domain = BINARY_KEYS.has(key as EntityKey) ? "binary_sensor" : "sensor";
      map[key] = `${domain}.${prefix}_${key}`;
    } else {
      map[key] = "";
    }
  }
  return map;
}
