import { css } from '@emotion/react';

/** Values for the spacing function. */
export type ThemeZIndexOption = keyof typeof values;

/** Values for the zIndex to use in the project. */
const values = {
  appbar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

/** Contains the values of the spacing to use across the project. */
export const zIndex = {
  /** Global variables using css. */
  css: css`
    :root {
      ${Object.entries(values)
        .map(([z, value]) => `--z-index-${z}: ${value};`)
        .join('')}
    }
  `,
  /** Return the value of a spacing using css variables. */
  get: (z: ThemeZIndexOption) => `var(--z-index-${z})`,
  values,
};
