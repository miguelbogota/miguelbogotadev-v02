import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';

import { BaseCss } from './base-css';
import { breakpoints } from './breakpoints';
import { palette } from './palette';
import { spacing } from './spacing';
import { zIndex } from './z-index';

/** Type of the theme. */
export type Theme = typeof theme;

/** Theme object with all the values to use in the project styling. */
export const theme = {
  breakpoints,
  palette,
  spacing: spacing.get,
  zIndex,
};

/** Provider for the theme. */
export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <>
    <BaseCss />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
);
