import { css } from '@emotion/react';
import { kebabCase } from 'lodash';

/** Union type with the allowed colors of the theme. */
export type ThemeColorOption = keyof typeof values;

/** Color values to use in the project. */
const values = {
  white: '#ffffff',
  light: '#c7c7c7',
  dark: '#4b4b4b',
  black: '#000000',
  'scale-1': '#f6f6f6',
  'scale-2': '#d8d8d8',
  'scale-3': '#bbbbbb',
  'scale-4': '#8f8f8f',
  'scale-5': '#5a5a5a',
  'scale-6': '#3b3b3b',
  'scale-7': '#212121',
  red: '#d32f2f',
  pink: '#c2185b',
  purple: '#7b1fa2',
  'deep-purple': '#512da8',
  indigo: '#303f9f',
  blue: '#1976d2',
  'light-blue': '#0288d1',
  cyan: '#0097a7',
  teal: '#00796b',
  green: '#388e3c',
  'light-green': '#689f38',
  lime: '#afb42b',
  yellow: '#fdd835',
  amber: '#ffb300',
  orange: '#f57c00',
  'deep-orange': '#e64a19',
  brown: '#5d4037',
  grey: '#616161',
  'blue-grey': '#455a64',
};

/**
 * Colors to use across all the project.
 */
export const colors = {
  /** Global variables using css. */
  css: css`
    :root {
      ${Object.entries(values)
        .map(([key, color]) => `--${kebabCase(key)}: ${color};`)
        .join('')}
    }
  `,
  /** Return the value of a color using css variables. */
  get: (colorName: ThemeColorOption) => `var(--${kebabCase(colorName)})`,
  values,
};
