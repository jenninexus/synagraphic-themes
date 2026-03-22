#!/usr/bin/env node
/**
 * Generate SVG palette swatch strips from all-palettes.json.
 * Output: assets/swatches/<palette-id>.svg (one per palette)
 *       + assets/swatches/all-swatches.svg (combined overview)
 *
 * Usage: node tools/generate-swatches.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PALETTES_PATH = join(ROOT, 'palettes', 'all-palettes.json');
const OUT_DIR = join(ROOT, 'assets', 'swatches');

mkdirSync(OUT_DIR, { recursive: true });

const data = JSON.parse(readFileSync(PALETTES_PATH, 'utf8'));
const palettes = data.palettes;

const SWATCH_W = 40;
const SWATCH_H = 28;
const GAP = 4;
const RADIUS = 6;
const COLORS = ['cyan', 'purple', 'pink', 'indigo', 'blue', 'teal'];

function makeSingleSvg(id, palette) {
  const totalW = COLORS.length * (SWATCH_W + GAP) - GAP;
  const rects = COLORS.map((c, i) => {
    const x = i * (SWATCH_W + GAP);
    return `  <rect x="${x}" y="0" width="${SWATCH_W}" height="${SWATCH_H}" rx="${RADIUS}" fill="${palette.colors[c]}" />`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${SWATCH_H}" viewBox="0 0 ${totalW} ${SWATCH_H}">
${rects}
</svg>`;
}

function makeOverviewSvg(palettes) {
  const ids = Object.keys(palettes);
  const ROW_H = SWATCH_H + 8;
  const LABEL_W = 160;
  const swatchAreaW = COLORS.length * (SWATCH_W + GAP) - GAP;
  const totalW = LABEL_W + swatchAreaW;
  const totalH = ids.length * ROW_H + 8;

  const rows = ids.map((id, row) => {
    const y = row * ROW_H + 4;
    const p = palettes[id];
    const label = `  <text x="0" y="${y + 19}" font-family="system-ui, sans-serif" font-size="12" fill="#c8ccd4">${p.name}</text>`;
    const rects = COLORS.map((c, i) => {
      const x = LABEL_W + i * (SWATCH_W + GAP);
      return `  <rect x="${x}" y="${y}" width="${SWATCH_W}" height="${SWATCH_H}" rx="${RADIUS}" fill="${p.colors[c]}" />`;
    }).join('\n');
    return `${label}\n${rects}`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}" style="background:#0a0e14;padding:8px">
${rows}
</svg>`;
}

// Generate individual swatches
let count = 0;
for (const [id, palette] of Object.entries(palettes)) {
  const svg = makeSingleSvg(id, palette);
  writeFileSync(join(OUT_DIR, `${id}.svg`), svg);
  count++;
}

// Generate combined overview
const overviewSvg = makeOverviewSvg(palettes);
writeFileSync(join(OUT_DIR, 'all-swatches.svg'), overviewSvg);

console.log(`Generated ${count} individual swatches + 1 overview in ${OUT_DIR}`);
