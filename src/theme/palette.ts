import { css } from '@emotion/react';
import { kebabCase } from 'lodash';

import { colors, ThemeColorOption } from './colors';

/** Type for the tuple with the colors. */
type ColorTuple = [string, string];

/** Helper function which infers keys and restricts values to a tuple. */
const asPalette = <T>(obj: { [K in keyof T]: ColorTuple }) => obj;

/** Helper function to return the light and dark color in the asVariable function. */
const getColors = (light: ThemeColorOption, dark: ThemeColorOption) =>
  [colors.get(light), colors.get(dark)] as ColorTuple;

/** Keys of the palette values. */
export type ThemePaletteOption = keyof typeof values;

/** Variables for the colors to use in the project. */
const values = asPalette({
  primary: getColors('teal', 'teal'),
  secondary: getColors('pink', 'pink'),
  info: getColors('blue', 'blue'),
  success: getColors('green', 'green'),
  warning: getColors('amber', 'amber'),
  error: getColors('red', 'red'),
  divider: getColors('teal', 'teal'),

  'text.primary': getColors('scale-5', 'scale-3'),
  'text.secondary': getColors('scale-4', 'scale-4'),
  'text.disabled': getColors('scale-3', 'scale-5'),
  'text.inverted': getColors('scale-3', 'scale-5'),
  'background.main': getColors('white', 'black'),
  'background.sheet': getColors('scale-1', 'scale-7'),
});

/**
 * Palette values to use in the project.
 */
export const palette = {
  /** Global variables using css. */
  css: css`
    :root {
      ${Object.entries(values)
        .map(([key, value]) => `--${kebabCase(key)}: ${value[0]};`)
        .join('')}
    }

    @media (prefers-color-scheme: dark) {
      :root {
        ${Object.entries(values)
          .map(([key, value]) => `--${kebabCase(key)}: ${value[1]};`)
          .join('')}
      }
    }
  `,
  /** Return the value of a palette or color using css variables. */
  get: (colorName: ThemePaletteOption | ThemeColorOption) => `var(--${kebabCase(colorName)})`,
  /**
   * Values for the palette to use in the project.
   * - Index "0": Color in the light theme.
   * - Index "1": Color in the dark theme.
   */
  values,
};
