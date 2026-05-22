import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
  }
  ha-card {
    overflow: hidden;
    padding: 16px;
    background: var(--ha-card-background, #14161c);
    color: var(--primary-text-color, #e5e7eb);
    font-family: var(--paper-font-body1_-_font-family, sans-serif);
  }

  .name {
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
    margin-bottom: 8px;
  }

  .device {
    width: 100%;
    aspect-ratio: 600 / 240;
  }

  .screen-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #f8fafc;
    font-size: 14px;
    line-height: 1.25;
    padding: 8px;
    box-sizing: border-box;
  }

  .state-line {
    text-align: center;
    font-size: 13px;
    color: var(--secondary-text-color, #9ca3af);
    margin: 8px 0 12px;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
  .stat {
    background: var(--ha-card-background, #1f2937);
    border: 1px solid var(--divider-color, #374151);
    border-radius: 10px;
    padding: 8px 6px;
    text-align: center;
  }
  .stat-value {
    font-size: 16px;
    font-weight: 700;
  }
  .stat-sub {
    font-size: 11px;
    color: var(--secondary-text-color, #9ca3af);
    margin-top: 2px;
  }

  .bar {
    margin-top: 12px;
    display: flex;
    gap: 14px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: var(--secondary-text-color, #9ca3af);
  }
  .bar .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4b5563;
    margin-right: 4px;
  }
  .bar .dot.on { background: #22c55e; }
  .bar .dot.bad { background: #ef4444; }

  @media (max-width: 480px) {
    .stats { grid-template-columns: repeat(2, 1fr); }
  }
`;
