import { LitElement, html, type PropertyValues, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CARD_NAME, CARD_VERSION } from "./const";
import { cardStyles } from "./styles";
import { vitaDevice } from "./assets/vita-device";
import { resolveEntities, suggestPrefix } from "./helpers/resolve-entities";
import { computeStateLine } from "./helpers/compute-state-line";
import { formatStat } from "./helpers/format-stat";
import { localize } from "./localize";
import type {
  HassObject,
  HassState,
  PSVitaCardConfig,
  ResolvedEntities,
  StatConfig,
} from "./types";

console.info(
  `%c PS-VITA-CARD %c v${CARD_VERSION} `,
  "color: white; background: #1f2937; font-weight: 700;",
  "color: white; background: #0070d1; font-weight: 700;"
);

interface CustomCardWindow extends Window {
  customCards?: Array<Record<string, unknown>>;
}
const w = window as CustomCardWindow;
w.customCards = w.customCards || [];
w.customCards.push({
  type: CARD_NAME,
  name: "PS Vita Card",
  description: "Card for jailbroken PS Vita via ps-vita-mqtt-plugin MQTT integration",
  preview: false,
  documentationURL: "https://github.com/hudsonbrendon/ps-vita-card",
  // Offer this card when the user picks the device's MQTT battery sensor.
  getEntitySuggestion: (hass: HassObject, entityId: string) => {
    const prefix = suggestPrefix(hass, entityId);
    return prefix ? { config: { type: `custom:${CARD_NAME}`, entity: prefix } } : null;
  },
});

const DEFAULT_STATS: StatConfig[] = [
  { entity: "battery_level",   unit: "%",     subtitle: "stat.battery" },
  { entity: "battery_temp",    unit: "°C",   multiply: 0.01, precision: 1, subtitle: "stat.battery_temp" },
  { entity: "rssi",            unit: " dBm", subtitle: "stat.rssi" },
  { entity: "plugin_uptime",   suffix: " s",  subtitle: "stat.plugin_uptime" },
];

@customElement(CARD_NAME)
export class PSVitaCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass?: HassObject;
  @state() private _config?: PSVitaCardConfig;
  @state() private _entities?: ResolvedEntities;

  setConfig(config: PSVitaCardConfig): void {
    if (!config) throw new Error("Invalid config");
    this._config = config;
    this._entities = resolveEntities(config);
  }

  static getConfigForm() {
    return {
      schema: [
        { name: "entity", required: true, selector: { text: {} } },
        { name: "name", selector: { text: {} } },
        { name: "language", selector: { select: { options: ["en", "pt-BR"], mode: "dropdown" } } },
      ],
      computeLabel: (schema: { name: string }) => localize(`editor.${schema.name}`),
    };
  }

  getGridOptions() {
    return { columns: 6, rows: 4, min_columns: 4, min_rows: 3 };
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass")) {
      this.toggleAttribute("dark-mode", Boolean(this.hass?.themes?.darkMode));
    }
  }

  // Plain stats (no unit/multiply/precision/suffix) use HA's locale-aware
  // formatting when available; everything else keeps the card's formatStat.
  private _displayStat(stateObj: HassState | undefined, s: StatConfig): string {
    const plain = !s.unit && !s.multiply && s.precision === undefined && !s.suffix;
    if (plain && stateObj && this.hass?.formatEntityState && !["unknown", "unavailable", ""].includes(stateObj.state)) {
      try {
        return this.hass.formatEntityState(stateObj);
      } catch {
        /* fall through */
      }
    }
    return formatStat(stateObj, s);
  }

  static getStubConfig(): PSVitaCardConfig {
    return {
      type: `custom:${CARD_NAME}`,
      entity: "psvita_sala",
    };
  }

  getCardSize(): number {
    return 4;
  }

  private resolveStatEntityId(s: StatConfig): string {
    if (!this._entities) return s.entity;
    const asKey = s.entity as keyof ResolvedEntities;
    return this._entities[asKey] ?? s.entity;
  }

  private renderScreen(lang: string): TemplateResult {
    const e = this._entities!;
    const hass = this.hass!;
    const game = hass.states[e.game_name]?.state ?? "";
    const placeholders = new Set(["", "-", "unknown", "unavailable"]);
    const shown = placeholders.has(game)
      ? localize("state.standby", lang)
      : game;
    return html`<div class="screen-content">${shown}</div>`;
  }

  private renderStats(lang: string): TemplateResult {
    const stats = (this._config?.stats ?? DEFAULT_STATS).slice(0, 4);
    return html`
      <div class="stats">
        ${stats.map(s => {
          const id = this.resolveStatEntityId(s);
          const value = this._displayStat(this.hass!.states[id], s);
          return html`
            <div class="stat">
              <div class="stat-value">${value}</div>
              <div class="stat-sub">${localize(s.subtitle, lang)}</div>
            </div>
          `;
        })}
      </div>
    `;
  }

  private renderIndicators(lang: string): TemplateResult {
    const e = this._entities!;
    const hass = this.hass!;
    const link = hass.states[e.link]?.state;
    const charging = hass.states[e.battery_charging]?.state;
    const linkOk = link === "on";
    const chargingOn = charging === "on";
    return html`
      <div class="bar">
        <span><span class="dot ${linkOk ? "on" : "bad"}"></span>${localize(linkOk ? "indicator.link_up" : "indicator.link_down", lang)}</span>
        ${chargingOn ? html`<span><span class="dot on"></span>${localize("indicator.charging", lang)}</span>` : null}
      </div>
    `;
  }

  render(): TemplateResult {
    if (!this._config || !this._entities || !this.hass) return html``;
    const lang = this._config.language ?? this.hass.language ?? "en";
    return html`
      <ha-card>
        ${this._config.name ? html`<div class="name">${this._config.name}</div>` : null}
        <div class="device">${vitaDevice(this.renderScreen(lang))}</div>
        <div class="state-line">${computeStateLine(this.hass, this._entities, lang)}</div>
        ${this.renderStats(lang)}
        ${this.renderIndicators(lang)}
      </ha-card>
    `;
  }
}
