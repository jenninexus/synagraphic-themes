# Palette Sync — syn-themes → optional-features

**Status:** Active
**Last Updated:** 2026-04-21

## Roles

| Layer | Location | Role |
|-------|----------|------|
| **Authoring SSOT** | `syn-themes/palettes/all-palettes.json` | Where palette colors are first defined and edited |
| **VS Code themes** | `syn-themes/themes/*.json` | VS Code editor color schemes (separate format from app palettes) |
| **Distribution SSOT** | `optional-features/registry/syn-themes.json` | What host apps actually import at runtime (21 palettes) |
| **Per-host inline defaults** | `accentPalettes.ts` in each app | Fallback when submodule absent; should mirror distribution SSOT |

---

## Sync Workflow (when palette colors change)

1. Edit `syn-themes/palettes/all-palettes.json` with new palette values
2. Update `optional-features/registry/syn-themes.json` — copy the changed palette block(s) into the 21-palette distribution array
3. Update per-app inline defaults in all 3 apps to match:
   - `Synabrain/clients/react/src/stores/accentPalettes.ts`
   - `Synagen/apps/Synagen.Engine/src/editor/store/themeCustomizerStore.ts`
   - `Syqo/src/themes/accentPalettes.ts`
4. Bump the `optional-features` submodule pointer in all host repos:
   - `Synabrain/Integrations/optional-features` → commit new SHA
   - `Synagen/Integrations/optional-features` → commit new SHA
   - `Syqo/integrations/optional-features` → commit new SHA
5. Commit `syn-themes` separately (own repo/remote: `jenninexus/syn-themes`)
6. Publish VS Code extension if VS Code theme JSON values also changed (`vsce package && vsce publish`)

---

## VS Code Extension vs App Palettes

These are separate JSON formats that share brand colors but serve different consumers:

| Format | Files | Consumer |
|--------|-------|----------|
| VS Code theme | `themes/synagraphic-*.json` | VS Code `tokenColors` + `colors` schema |
| App palette | `palettes/all-palettes.json` → `registry/syn-themes.json` | `AccentPaletteEntry` (primary, secondary, glow, etc.) |

When Martian Games brand colors change, update **both** formats manually. Brand values:
- Primary (orange): `#FF6B00`
- Secondary (purple): `#8B5CF6`
- Highlight (teal/cyan): `#42f4c8`

---

## Palette Registry Versions

The `optional-features/registry/syn-themes.json` file does not currently have a `_version` field. When palette drift becomes a pain point, add `"_version": N` (increment on each release) and a matching `PALETTE_MIN_VERSION` constant in each app's `accentPalettes.ts`. The `getMergedPalettes()` function can then surface a "palette update available" chip in the ThemeCustomizerPanel.

---

## Palettes in This Repo

6 Synagraphic palettes (`synagraphic: true` in the distribution registry):

| ID | Label | Notes |
|----|-------|-------|
| `void-circuit` | Void Circuit | Muted hacker void |
| `neon-decay` | Neon Decay | Industrial cyberpunk |
| `ghost-protocol` | Ghost Protocol | Default recommended |
| `plasma-drift` | Plasma Drift | Synthwave heat |
| `acid-rain` | Acid Rain | Toxic green monochrome |
| `sg-martian` | SG Martian | MartianGames brand (teal/purple/orange) |

15 bonus palettes live in `optional-features/registry/syn-themes.json` only (not in this repo — app-layer additions).

---

## Related

- [`optional-features/docs/THEME-CUSTOMIZER.md`](../optional-features/docs/THEME-CUSTOMIZER.md) — full source chain and update-check protocol
- [`optional-features/registry/syn-themes.json`](../optional-features/registry/syn-themes.json) — distribution SSOT (21 palettes)
- `jenninexus.synagraphic-themes` on VS Code Marketplace — published extension (v2.2.8+)
