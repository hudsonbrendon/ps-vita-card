import { LitElement, html, css, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CARD_NAME } from "./const";
import type { PSVitaCardConfig, HassObject } from "./types";

@customElement(`${CARD_NAME}-editor`)
export class PSVitaCardEditor extends LitElement {
  static styles = css`
    :host { display: block; padding: 8px; }
    label { display: block; margin: 8px 0 4px; font-size: 12px; opacity: 0.8; }
    input { width: 100%; padding: 6px 8px; box-sizing: border-box; }
  `;

  @property({ attribute: false }) hass?: HassObject;
  @state() private _config?: PSVitaCardConfig;

  setConfig(config: PSVitaCardConfig): void {
    this._config = { ...config };
  }

  private _update<K extends keyof PSVitaCardConfig>(key: K, value: PSVitaCardConfig[K]) {
    if (!this._config) return;
    const next: PSVitaCardConfig = { ...this._config, [key]: value };
    this._config = next;
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: next },
      bubbles: true,
      composed: true,
    }));
  }

  render(): TemplateResult {
    if (!this._config) return html``;
    return html`
      <label>Entity prefix (client_id slugified — e.g. psvita_sala)</label>
      <input .value=${this._config.entity ?? ""}
        @input=${(e: Event) => this._update("entity", (e.target as HTMLInputElement).value)} />

      <label>Card name (optional)</label>
      <input .value=${this._config.name ?? ""}
        @input=${(e: Event) => this._update("name", (e.target as HTMLInputElement).value)} />

      <label>Language (en / pt-BR)</label>
      <input .value=${this._config.language ?? ""}
        @input=${(e: Event) => this._update("language", (e.target as HTMLInputElement).value)} />
    `;
  }
}
