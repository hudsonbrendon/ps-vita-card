<p align="center">
  <a href="https://www.home-assistant.io/integrations/mqtt/"><img alt="Home Assistant" src="https://img.shields.io/badge/Home%20Assistant-MQTT-41bdf5?style=for-the-badge"></a>
  <a href="https://henkaku.xyz/"><img alt="PS Vita" src="https://img.shields.io/badge/PS%20Vita-HENkaku-003791?style=for-the-badge"></a>
  <a href="https://hacs.xyz/"><img alt="HACS" src="https://img.shields.io/badge/HACS-Custom-41bdf5?style=for-the-badge"></a>
</p>

# ps-vita-card

Home Assistant Lovelace card for a jailbroken PS Vita running
[`ps-vita-mqtt-plugin`](https://github.com/hudsonbrendon/ps-vita-mqtt-plugin).

Shows a PS Vita illustration with the running game name overlaid on the
screen, a state line ("In LiveArea" / "Playing &lt;game&gt;"), a 4-cell
stat grid (battery / battery temp / WiFi RSSI / plugin uptime by default
— fully configurable) and a bottom indicator bar for network link +
charging state.

## Requirements

1. `ps-vita-mqtt-plugin` installed on the Vita and publishing — see its
   [README](https://github.com/hudsonbrendon/ps-vita-mqtt-plugin#readme).
2. Home Assistant **2024.1.0+** with the MQTT integration configured
   against the same broker the Vita publishes to.
3. After the plugin runs once, HA Discovery auto-creates 15 entities
   under the device **PS Vita**.

## Installation

### HACS (recommended)

1. HACS → Frontend → **⋮ Custom repositories**
2. Repository: `https://github.com/hudsonbrendon/ps-vita-card`,
   Category: **Lovelace**
3. Install → Reload your browser cache (Ctrl+F5)

### Manual

1. Download `ps-vita-card.js` from the
   [latest release](https://github.com/hudsonbrendon/ps-vita-card/releases/latest)
2. Copy it into `<config>/www/`
3. Settings → Dashboards → ⋮ → **Resources** → Add resource:
   `URL: /local/ps-vita-card.js`, Type: **JavaScript Module**

## Usage

Minimum config — provide the entity prefix HA derived from the
`client_id` field in the plugin's `config.json` (slugify hyphens to
underscores: `psvita-sala` → `psvita_sala`):

```yaml
type: custom:ps-vita-card
entity: psvita_sala
name: My Vita
```

### Full config

```yaml
type: custom:ps-vita-card
entity: psvita_sala
name: Sala
language: pt-BR          # en | pt-BR (default: HA language)
stats:                   # up to 4
  - entity: battery_level
    unit: "%"
    subtitle: stat.battery
  - entity: battery_temp
    unit: "°C"
    multiply: 0.01
    precision: 1
    subtitle: stat.battery_temp
  - entity: rssi
    unit: " dBm"
    subtitle: stat.rssi
  - entity: plugin_uptime
    suffix: " s"
    subtitle: stat.plugin_uptime
# Optional per-entity overrides — only set these if HA renamed something
# in your install. The auto-prefix above produces
# `sensor.psvita_sala_<key>` / `binary_sensor.psvita_sala_<key>`,
# matching the names MQTT Discovery creates.
# entities:
#   battery_level: sensor.custom_battery_id
```

### Stat entities supported

`battery_level, battery_charging, battery_temp, battery_minutes,
firmware, model, uptime, plugin_uptime, in_game, title_id, game_name,
link, ip, ssid, rssi`.

The `stats[].entity` field accepts either one of the keys above
(resolved via the prefix) or a full entity id like `sensor.foo`.

## Development

```bash
npm install
npm test         # vitest
npm run lint
npm run typecheck
npm run build    # dist/ps-vita-card.js
```

## License

MIT — see [LICENSE](LICENSE).
