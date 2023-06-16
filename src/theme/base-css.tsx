import { css, Global } from '@emotion/react';
import type { FC } from 'react';

import { colors } from './colors';
import { palette } from './palette';
import { reset } from './reset';
import { spacing } from './spacing';
import { zIndex } from './z-index';

/** Base styles for the project. */
export const BaseCss: FC = () => (
  <>
    <Global styles={reset} />
    <Global styles={zIndex.css} />
    <Global styles={spacing.css} />
    <Global styles={colors.css} />
    <Global styles={palette.css} />
    <Global
      styles={css`
        html,
        body,
        #__next {
          font-family: Barlow, Segoe UI, Roboto, -apple-system, Oxygen, Ubuntu, sans-serif;
          height: 100%;
          margin: 0px;
          padding: 0px;
          background-color: ${palette.get('background.main')};
          color: ${palette.get('text.primary')};
        }
      `}
    />
  </>
);
