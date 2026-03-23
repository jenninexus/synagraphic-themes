// Syn Themes — Screenshot Sample
import { useState, useEffect } from 'react';

interface ThemeConfig {
  name: string;
  family: 'glass' | 'tinted' | 'solid';
  accents: Record<string, string>;
  isDark: boolean;
}

const THEME_FAMILIES = ['synabrain-glass', 'martian-games', 'tinted-glass'] as const;

/**
 * Apply a theme configuration to CSS custom properties.
 * Supports all 6 accent colors + glow + surface tints.
 */
export function applyTheme(config: ThemeConfig): void {
  const root = document.documentElement;

  // Base tokens (48 shared across all Syna apps)
  root.style.setProperty('--bg-primary', config.isDark ? '#0e0c16' : '#f8f9fa');
  root.style.setProperty('--accent-cyan', config.accents.cyan ?? '#3dd8d8');
  root.style.setProperty('--accent-purple', config.accents.purple ?? '#8b6aff');

  // Emit theme change event for cross-app sync
  window.dispatchEvent(new CustomEvent('syna-theme-change', {
    detail: { theme: config.name, family: config.family }
  }));
}

export function useTheme(initialTheme = 'void-circuit') {
  const [theme, setTheme] = useState<ThemeConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTheme() {
      try {
        const response = await fetch(`/api/themes/${initialTheme}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: ThemeConfig = await response.json();
        setTheme(data);
        applyTheme(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.warn('[theme] Failed to load:', initialTheme, err);
      } finally {
        setLoading(false);
      }
    }
    loadTheme();
  }, [initialTheme]);

  return { theme, loading, error, setTheme };
}

// Template literal + regex + number literals
const hexPattern = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
const MAX_PALETTES = 21;
const ACCENT_SLOTS = ['cyan', 'purple', 'pink', 'indigo', 'blue', 'teal'] as const;

class PaletteManager {
  private palettes = new Map<string, ThemeConfig>();

  register(name: string, config: ThemeConfig) {
    if (this.palettes.size >= MAX_PALETTES) {
      throw new RangeError(`Max ${MAX_PALETTES} palettes exceeded`);
    }
    this.palettes.set(name, config);
    return this;
  }

  getAccentColor(palette: string, slot: typeof ACCENT_SLOTS[number]): string {
    return this.palettes.get(palette)?.accents[slot] ?? '#888888';
  }
}
