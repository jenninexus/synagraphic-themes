# Syn Themes — Cyberpunk Glass Theme Pack

6 cyberpunk dark themes for VS Code. Near-black voids with neon accents, full semantic highlighting, and optional glow effects.

Part of the Syna design system — shared across VS Code, Synabrain, Synagen, and Syqo.

<!-- Screenshots: replace these placeholders with actual VS Code captures -->
<!-- ![Void Circuit](assets/screenshots/void-circuit.png) -->

## Themes

| Theme | Primary | Accent | Aesthetic |
|-------|---------|--------|-----------|
| **Void Circuit** | #8b6aff (violet) | #3dd8d8 (cyan) | Muted hacker void |
| **Neon Decay** | #42f4c8 (cyan) | #ff2d6f (magenta) | Industrial cyberpunk |
| **Ghost Protocol** | #5a9ce8 (cold blue) | #88c8ff (ice) | Operative stealth |
| **Plasma Drift** | #e050a0 (hot pink) | #f070a8 (magenta) | Synthwave heat |
| **Acid Rain** | #68c030 (toxic green) | #90e848 (lime) | Matrix terminal |
| **Martian** | #FF6B00 (orange) | #8B5CF6 (purple) | MartianGames cyberpunk |

## Install

Search **"Syn Themes"** in the VS Code Extensions marketplace, or:

```
ext install monofinitystudio.syn-themes
```

## Features

- **6 cyberpunk dark themes** with 100+ color tokens each
- **Full semantic highlighting** — TypeScript, React, Python, Go, Rust, and more
- **Terminal ANSI colors** — themed terminal palette per theme
- **Optional glow effects** via `glow.css` (requires [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css))
- **WCAG-refined palettes** (v2.2) — 0 contrast failures

## Skin Families (6)

Glass-morphism surface layers with semi-transparent blur, accent-tinted borders, and depth stacking. Used across the Syna web apps.

| Family | Modes | Character |
|--------|-------|-----------|
| **Synabrain Glass** | dark, light | Cyan-tinted translucent glass |
| **Martian Games** | dark, light | Neutral darks, molten orange borders |
| **Tinted Glass** | dark, light | Neutral glass — accent palettes dominate |
| **Holographic Glass** | dark, light | Prismatic rainbow shimmer, animated borders |
| **Synagen Dark** | dark | Deep-space translucent panels |
| **Midnight Chrome** | dark | Blue-charcoal glass, cool steel edges |

## Accent Palettes (21)

All palettes are unified in one collection. The 6 VS Code themes have full editor token definitions; all 21 work as web accent presets in the Theme Customizer.

**15 core:** synabrain, martian, ocean, sunset, forest, neon, minimal, studio-pro-light, cyberpunk, aurora-borealis, synthwave, midnight-depths, cherry-blossom, arctic-frost, velvet-noir

**6 Synagraphic:** void-circuit, neon-decay, ghost-protocol, plasma-drift, acid-rain, sg-martian

**Machine-readable:** [`palettes/all-palettes.json`](palettes/all-palettes.json) — canonical SSOT for all palettes + skin families.

## Glow Effects

`glow.css` adds text-shadow neon glow to VS Code syntax tokens. Requires [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css). Respects `prefers-reduced-motion`.

## Files

```
themes/                  VS Code theme JSON files (100+ tokens each)
palettes/                Machine-readable palette + skin JSON
  all-palettes.json      Canonical SSOT — all 21 palettes + 6 skin families
icons/                   Extension icon SVGs + per-theme SVGs
glow.css                 Optional neon glow effects
```

## Web App Integration

These themes are available as accent palettes in Synabrain, Synagen, and Syqo via the Theme Customizer panel. Web palette colors map to the 6-color accent system.

Follows the [Syna Skin Contract](https://github.com/jenninexus/optional-features/blob/main/docs/SKIN-CONTRACT.md) — `data-skin-family`, `data-theme`, `data-accent-palette` attributes + CSS variable bridge.

## Related

| Resource | Purpose |
|----------|---------|
| [optional-features](https://github.com/jenninexus/optional-features) | Shared feature registry + theme contracts |
| [SKIN-CONTRACT.md](https://github.com/jenninexus/optional-features/blob/main/docs/SKIN-CONTRACT.md) | Cross-app skin compliance |
| [DESIGN-TOKENS.md](https://github.com/jenninexus/optional-features/blob/main/docs/DESIGN-TOKENS.md) | Shared design tokens |

## License

Proprietary. See [LICENSE](LICENSE).

Published by [Monofinity Studio](https://github.com/monofinitystudio).
