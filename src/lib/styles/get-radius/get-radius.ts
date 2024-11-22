// === Import : NPM
import { get } from 'lodash';
import { CSSProperties } from 'styled-components';

// === Import : LOCAL
import { RadiusThemeKeys, Theme } from '../../../theming';

export type GetRadiusProps = {
  theme?: Theme;
  radius?: RadiusThemeKeys | CSSProperties['borderRadius'];
};

export const getRadius = ({ radius, theme }: GetRadiusProps) => {
  if (!radius) return;
  return `border-radius: ${get(theme?.radius, radius, radius)};`;
};
