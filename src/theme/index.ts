// Exports all public apis.
export type { ThemeBreakpointOption } from './breakpoints';
export type { ThemeColorOption } from './colors';
export type { ThemePaletteOption } from './palette';
export type { ThemeSpacingOption } from './spacing';
export * from './theme';

// Extend the theme interface.
import '@emotion/react';
import { Theme as AppTheme } from './theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
