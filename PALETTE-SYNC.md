# Palette Sync — syn-themes → syna-theme-kit → host apps

**Status:** Active
**Last Updated:** 2026-04-27

---

## What this repo is

`syn-themes` (`jenninexus/syn-themes`) is the **VS Code extension** repo. It publishes 6 cyberpunk dark themes to the VS Code Marketplace (`jenninexus.synagraphic-themes`). It is also the **authoring source** for the 6 Synagraphic accent palette color values that flow downstream into every Syna web app.

This repo is **not** a runtime dependency of any web app. Nothing imports from it at build time. Its palette values are manually copied to the distribution layer when colors change.

---

## Pipeline

```
syn-themes/palettes/all-palettes.json    ← EDIT HERE for palette color changes
syn-themes/themes/synagraphic-*.json     ← EDIT HERE for VS Code editor token colors
        ↓  copy-on-release (manual)
syna-theme-kit/palettes/syn-themes.json  ← distribution SSOT (21 palettes, app format)
syna-theme-kit/tokens/design-tokens.ts   ← 49 shared CSS token names
syna-theme-kit/docs/                     ← contracts and protocol
        ↓  submodule or vendored copy
Host apps: Synabrain · Synagen · Syqo · Sylva
```

---

## Roles

| Layer | Location | Role |
|-------|----------|------|
| **Palette authoring** | `syn-themes/palettes/all-palettes.json` | Where Synagraphic palette colors are first defined |
| **VS Code themes** | `syn-themes/themes/synagraphic-*.json` | VS Code editor color schemes (separate format) |
| **Distribution SSOT** | `syna-theme-kit/palettes/syn-themes.json` | What host apps read (21 palettes, app-ready JSON) |
| **Token definitions** | `syna-theme-kit/tokens/design-tokens.ts` | 49 shared CSS custom property names + metadata |
| **Per-host inline defaults** | `accentPalettes.ts` in each app | Fallback when submodule/vendor copy is absent |

---

## VS Code themes vs app palettes — two separate formats

Both share brand color values but serve different consumers and have different schemas.

| Format | Files | Consumer |
|--------|-------|----------|
| VS Code theme | `themes/synagraphic-*.json` | VS Code `tokenColors` + `colors` — editor syntax highlighting |
| App palette | `palettes/all-palettes.json` → `syna-theme-kit/palettes/syn-themes.json` | `AccentPaletteEntry` (primary, secondary, glow, etc.) — ThemeCustomizerPanel |

When brand colors change, update **both** formats manually.

---

## Sync workflow (palette colors changed)

1. Edit `syn-themes/palettes/all-palettes.json` with the new palette values
2. Copy the changed palette block(s) to `syna-theme-kit/palettes/syn-themes.json`
3. If the app palette format has also changed, copy updated `syn-themes.json` from syna-theme-kit
   to each host app that vendors it (copy-on-update, no submodule):
   - `Syqo/src/themes/syn-themes.json` (vendored copy)
   - `Sylva/src/theme/syn-themes.json` (vendored copy)
   - Update inline defaults: `Synabrain/clients/react/src/stores/accentPalettes.ts`,
     `Synagen/apps/Synagen.Engine/src/editor/store/themeCustomizerStore.ts`,
     `Syqo/src/themes/accentPalettes.ts`
4. Commit `syn-themes` separately

Full step-by-step including commit commands: [`syna-theme-kit/docs/PROTOCOL.md § Scenario B`](../syna-theme-kit/docs/PROTOCOL.md)

---

## VS Code extension workflow (extension colors or new theme)

```bash
# edit themes/synagraphic-*.json for VS Code token colors
# edit palettes/all-palettes.json for app palette colors (if brand colors changed)
vsce package
vsce publish
git tag v2.x.x
git push origin main --tags
```

Then sync palette values to `syna-theme-kit/palettes/syn-themes.json`.

---

## Palette registry

### 6 Synagraphic palettes (`synagraphic: true` — have matching VS Code themes)

| ID | Label | Notes |
|----|-------|-------|
| `void-circuit` | Void Circuit | Muted hacker void |
| `neon-decay` | Neon Decay | Industrial cyberpunk |
| `ghost-protocol` | Ghost Protocol | Default recommended |
| `plasma-drift` | Plasma Drift | Synthwave heat |
| `acid-rain` | Acid Rain | Toxic green monochrome |
| `sg-martian` | SG Martian | MartianGames brand |

### 15 core palettes (app-only — no VS Code theme counterpart)

Live in `syna-theme-kit/palettes/syn-themes.json` only. Not authored here.

---

## Related

- [`syna-theme-kit/docs/PROTOCOL.md`](../syna-theme-kit/docs/PROTOCOL.md) — full update protocol for tokens, skins, and palettes
- `syna-theme-kit/palettes/syn-themes.json` — distribution SSOT (21 palettes)
- `syna-theme-kit/docs/DESIGN-TOKENS.md` — CSS token contract
- `jenninexus.synagraphic-themes` on VS Code Marketplace — published extension
