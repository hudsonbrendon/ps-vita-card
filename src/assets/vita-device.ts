import { svg, type TemplateResult } from "lit";

/**
 * Simplified illustration of a PS Vita PCH-1000 (OLED) — black bezel,
 * a screen rectangle that is the slot where the running-game name is
 * rendered as an overlay, two analog sticks, the four PS face buttons
 * and the D-pad. Hand-rolled so it ships in the JS bundle with no
 * external assets.
 *
 * Viewport: 600 x 240. The screen rectangle is 360 x 160 centred.
 */
export function vitaDevice(screenContent: TemplateResult): TemplateResult {
  return svg`
    <svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PS Vita">
      <defs>
        <linearGradient id="psv-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#1f2937"/>
          <stop offset="1" stop-color="#0b1220"/>
        </linearGradient>
        <linearGradient id="psv-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#0b132b"/>
          <stop offset="1" stop-color="#1b2640"/>
        </linearGradient>
      </defs>

      <!-- Body -->
      <rect x="2" y="20" width="596" height="200" rx="40" ry="40"
            fill="url(#psv-body)" stroke="#000" stroke-width="2"/>

      <!-- Screen -->
      <rect x="120" y="40" width="360" height="160" rx="6"
            fill="url(#psv-screen)" stroke="#0a0f1d" stroke-width="2"/>
      <foreignObject x="120" y="40" width="360" height="160">
        ${screenContent}
      </foreignObject>

      <!-- Left stick -->
      <circle cx="60" cy="120" r="18" fill="#111827" stroke="#4b5563" stroke-width="1.5"/>
      <circle cx="60" cy="120" r="10" fill="#374151"/>

      <!-- Right stick -->
      <circle cx="540" cy="120" r="18" fill="#111827" stroke="#4b5563" stroke-width="1.5"/>
      <circle cx="540" cy="120" r="10" fill="#374151"/>

      <!-- D-pad -->
      <g fill="#1f2937" stroke="#4b5563" stroke-width="1">
        <rect x="50" y="60" width="20" height="40" rx="3"/>
        <rect x="40" y="70" width="40" height="20" rx="3"/>
      </g>

      <!-- Face buttons -->
      <circle cx="560" cy="60" r="6" fill="#16a34a"/>
      <circle cx="540" cy="80" r="6" fill="#3b82f6"/>
      <circle cx="580" cy="80" r="6" fill="#dc2626"/>
      <circle cx="560" cy="100" r="6" fill="#ec4899"/>

      <!-- PS button -->
      <circle cx="300" cy="220" r="6" fill="#374151"/>
    </svg>
  `;
}
