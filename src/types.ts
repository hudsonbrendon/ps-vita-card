import type { EntityKey } from "./const";

export interface StatConfig {
  /** Either one of EntityKey or a full entity id like `sensor.foo`. */
  entity: string;
  unit?: string;
  multiply?: number;
  precision?: number;
  suffix?: string;
  subtitle: string;
}

export interface PSVitaCardConfig {
  type: string;
  /** Entity-id prefix — e.g. "psvita_sala". When set the card auto-
   *  resolves `<domain>.<prefix>_<key>` for every EntityKey. */
  entity?: string;
  /** Per-key overrides. Wins over the auto-resolved prefix. */
  entities?: Partial<Record<EntityKey, string>>;
  name?: string;
  language?: string;
  compact?: boolean;
  stats?: StatConfig[];   // up to 4
}

/** All entity ids after resolution. Missing keys remain "". */
export type ResolvedEntities = Record<EntityKey, string>;

/** Minimal subset of the HASS object the card actually touches. */
export interface HassState {
  state: string;
  attributes: Record<string, unknown>;
}
export interface HassObject {
  states: Record<string, HassState>;
  language?: string;
}
