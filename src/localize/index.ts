import { en } from "./en";
import { ptBR } from "./pt-BR";

const TABLES: Record<string, Record<string, string>> = {
  en,
  "pt-BR": ptBR,
  pt: ptBR,
};

export function localize(key: string, lang?: string): string {
  const table = TABLES[lang ?? ""] ?? en;
  return table[key] ?? en[key] ?? key;
}
