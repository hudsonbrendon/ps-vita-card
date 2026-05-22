export const CARD_NAME = "ps-vita-card";
export const CARD_VERSION = "0.1.0";

// All the data points the card knows how to render. These are *logical*
// keys — the entity id is `<domain>.<prefix>_<key>` once the prefix is
// the slugified client_id from ps-vita-mqtt-plugin's config.json. Keys
// match the topic suffix the plugin publishes under
// `psvita/<client_id>/...`.
export const ENTITY_KEYS = [
  // Battery (4)
  "battery_level",
  "battery_charging",
  "battery_temp",
  "battery_minutes",
  // System (3)
  "firmware",
  "model",
  "uptime",
  // Plugin lifecycle (1)
  "plugin_uptime",
  // App / game (3)
  "in_game",
  "title_id",
  "game_name",
  // Network (4)
  "link",
  "ip",
  "ssid",
  "rssi",
] as const;

export type EntityKey = (typeof ENTITY_KEYS)[number];

// Keys whose HA domain is `binary_sensor` instead of `sensor`.
export const BINARY_KEYS = new Set<EntityKey>([
  "battery_charging",
  "in_game",
  "link",
]);
