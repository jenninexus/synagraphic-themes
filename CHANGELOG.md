# Changelog

## 2.2.0 — 2026-03-22

- **WCAG contrast refinement:** 23 color changes across 13 palettes — 0 FAIL, 0 duplicate pairs
- Refined palettes: synabrain, ocean, forest, neon, cyberpunk, aurora-borealis, synthwave, midnight-depths, cherry-blossom, arctic-frost, velvet-noir, void-circuit, ghost-protocol
- Added `icon.png` (256x256) generated from circuit-trace SVG
- Updated submodule workflow documentation across all repos
- Palette version: 2.2.0

## 2.1.0 — 2026-03-20

- All skin families now use semi-transparent glass surfaces with blur (0.42–0.55 opacity) instead of opaque panels
- Replaced **Studio Pro** → **Midnight Chrome** — deep blue-charcoal with cool steel glass edges
- Replaced **Amber Forge** → **Velvet Noir** — deep plum velvet, wine and amethyst
- Improved **SG Martian** — brighter teal `#50ffdb`, richer purple `#9b6dff`, hotter orange `#FF8533`
- Slowed Holographic Glass animations (10s rainbow border, 12s prismatic glow) for subtlety
- Added blur metadata to all skins (14-20px), glass-breathe animation on all skin cards
- Footer: Published by Monofinity Studio, "Synagraphic Design Aesthetics" tagline
- Stats: 6 skin families, 10 skin themes, 21 palettes, 6 VS Code themes = 31 total presets

## 2.0.0 — 2026-03-20

- Unified palette collection: merged Core + Synagraphic into one 21-palette set with `synagraphic: true` flag
- Added **Holographic Glass** skin family (6th family) — prismatic rainbow shimmer, animated borders
- Updated **Martian Games** skin to match actual website CSS (`#0A0A0A`, `#181818`, `#232323`)
- Updated **Martian** + **SG Martian** palettes to use real brand tricolor (orange + purple + teal)
- Updated **Aurora Borealis** — now iridescent turquoise/purple/pink rainbow
- Updated **Synthwave** — proper tricolor: hot pink `#ff2d95`, electric cyan `#00e5ff`, deep purple `#b24bf3`
- Updated **Acid Rain** — toxic green paired with monochrome (silver/white/black) for Matrix contrast
- Rebuilt `synagrapic-themes.html` — unified palette grid, holographic skin card with animated effects
- Archived `preview.html` → `preview.archived.html`

## 1.1.0 — 2026-03-20

- Expanded to full 29-preset collection (5 skin families + 8 skins + 15 core palettes + 6 Synagraphic)
- Added `palettes/all-palettes.json` — complete 21-palette + 5-skin-family reference
- Updated `synagraphic-palettes.json` with vscode/web/terminal sections per theme
- New `synagrapic-themes.html` — comprehensive glass-morphism showcase with all 29 presets
- Added 15 core web palette definitions in `palettes/core/` directory
- Added `README.md` with Syna Skin Contract compliance
- Synced all Synagraphic palette colors with web SSOT (accentPalettes.ts)

## 1.0.0 — 2026-03-17

- Initial release with 5 cyberpunk dark themes
- **Void Circuit** — Muted violet hacker void
- **Neon Decay** — Industrial amber rust
- **Ghost Protocol** — Cold blue operative
- **Plasma Drift** — Hot pink synthwave
- **Acid Rain** — Toxic green matrix
- Full semantic highlighting support for TypeScript/React
- Custom SVG icons per theme
