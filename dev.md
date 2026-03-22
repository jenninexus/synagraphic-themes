# Syn Themes — Dev Notes

> Private dev reminders. Not shipped in the .vsix package.

## Naming

- **Extension ID:** `syn-themes` (available on marketplace as of 2026-03-22)
- **Display name:** "Syn Themes — Cyberpunk Glass Theme Pack"
- **Publisher:** `monofinitystudio`
- **GitHub:** Rename `jenninexus/synagraphic-themes` -> `jenninexus/syn-themes` after first publish
- Alternatives checked: `syn` (too short/generic), `synagraphic-themes` (fallback)

## Must-Have (Before First Publish)

- [ ] `icon.png` — 256x256 extension icon (convert from `icons/icon-main.svg`)
- [ ] Azure DevOps PAT for `monofinitystudio` publisher (one-time setup)
- [ ] Install `vsce`: `npm install -g @vscode/vsce`
- [ ] README rewrite with marketplace images (hero, swatches, theme previews)
- [ ] `.vscodeignore` to keep package small
- [ ] CHANGELOG.md is up to date (already exists)
- [ ] Verify `package.json` has correct `repository.url` after rename

## Nice-to-Have (Makes It Stand Out)

- [ ] Hero screenshot/video via vid-scroll (`synagrapic-themes.html` desktop capture)
- [ ] SVG palette swatch strips (auto-generated from `all-palettes.json`)
- [ ] 6 VS Code screenshots showing real TypeScript code per theme
- [ ] Short `.webm` or `.gif` showing theme switching

## Publishing Commands

```bash
vsce package                # Creates syn-themes-2.1.0.vsix
vsce publish                # Publishes to marketplace (needs PAT)

# Future version bumps
vsce publish patch           # 2.1.0 -> 2.1.1
vsce publish minor           # 2.1.0 -> 2.2.0
```

## Screenshot Approaches

1. **vid-scroll** (for showcase HTML + scrolling captures):
   ```bash
   npx tsx C:\Github\vid-scroll\src\cli.ts \
     --url "file:///C:/Github/synagraphic-themes/synagrapic-themes.html" \
     --capture screenshot --no-mobile --no-tablet \
     --output ./assets
   ```

2. **vscode.dev** (for real VS Code theme screenshots):
   - Open `https://vscode.dev` in browser
   - Load a TypeScript file, apply your theme via settings JSON
   - Use vid-scroll or browser DevTools screenshot to capture
   - This gives authentic VS Code rendering without local extension install

3. **Extension Development Host** (local VS Code):
   - Press F5 in this repo to launch Extension Development Host
   - Switch themes, take screenshots manually or via vid-scroll

## Palette Update Workflow

When editing palettes:

1. Edit `palettes/all-palettes.json` (authoring SSOT)
2. If VS Code theme colors changed: also edit `themes/<name>.json`
3. Copy `all-palettes.json` -> `C:\Github\optional-features\registry\palettes.json` (normalize `recommendedFamilies` to short names)
4. Commit + push optional-features
5. In host repos: `git submodule update --remote` in `Integrations/optional-features`
6. Synabrain/Synagen auto-refresh via JSON import; Syqo needs manual inline update

## Connection to Host Apps

```
syn-themes (this repo — authoring)
  palettes/all-palettes.json
       |
       v  (manual copy, normalize families to short names)
optional-features/registry/palettes.json (distribution)
       |
       v  (git submodule in each host)
  Synabrain: import.meta.glob + inline fallback
  Synagen:   import.meta.glob + inline fallback
  Syqo:      hardcoded inline (TODO: wire up palettes.json)
```

## File Purposes

| File | Ships in .vsix? | Purpose |
|------|-----------------|---------|
| `themes/*.json` | Yes | VS Code theme definitions |
| `palettes/*.json` | Yes | Machine-readable palette data |
| `icons/*.svg` | Yes | Theme icons |
| `icon.png` | Yes | Marketplace icon |
| `glow.css` | Yes | Optional neon glow effects |
| `README.md` | Yes | Marketplace landing page |
| `CHANGELOG.md` | Yes | Version history |
| `LICENSE` | Yes | Proprietary license |
| `assets/` | No | README images (swatches, hero, screenshots) |
| `tools/` | No | Build scripts (swatch generator, capture) |
| `dev.md` | No | This file (dev reminders) |
| `*.html` | No | Showcase pages |
| `*.code-workspace` | No | VS Code workspace |
