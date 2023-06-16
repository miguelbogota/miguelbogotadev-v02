import { css } from '@emotion/react';

/** Values for the spacing function. */
export type ThemeSpacingOption = keyof typeof values;

/** Values for the spacing function. */
const values = {
  0: '0rem',
  1: '0.45rem',
  2: '0.9rem',
  3: '1.25rem',
  4: '2rem',
  5: '3.5rem',
  6: '5rem',
};

/** Contains the values of the spacing to use across the project. */
export const spacing = {
  /** Global variables using css. */
  css: css`
    :root {
      ${Object.entries(values)
        .map(([space, value]) => `--space-${space}: ${value};`)
        .join('')}
    }
  `,
  /** Return the value of a spacing using css variables. */
  get: (space: ThemeSpacingOption) => `var(--space-${space})`,
  values,
};
