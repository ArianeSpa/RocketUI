// === Import : NPM
import { get } from 'lodash';
import { CSSProperties } from 'styled-components';

// === Import : LOCAL
import { Theme } from '../../../theming';

export type GetShadowProps = {
  theme?: Theme;
  boxShadow?: CSSProperties['boxShadow'];
  elevation?: number;
};

export const getShadow = ({ boxShadow, elevation, theme }: GetShadowProps) => {
  if (!elevation && !boxShadow) return;

  const shadow = elevation ? get(theme?.shadows, elevation) : boxShadow;
  return `box-shadow: ${shadow};`;
};
