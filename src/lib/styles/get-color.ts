// === Import : NPM
import { get } from 'lodash';
import { CSSProperties } from 'styled-components';

// === Import : LOCAL
import { PaletteThemeKeys, Theme } from '../../theming';

export type GetColorProps = {
  theme?: Theme;
  /**
   * The color of the component.
   *
   * It supports default theme colors, custom theme colors or any other color.
   * See docummentation to learn how to add new theme styles or override the default theme.
   * [theme customization guide](@todo set link).
   * @default currentColor
   */
  color: PaletteThemeKeys | CSSProperties['color'];
};

export const getColor = ({ color, theme }: GetColorProps) => {
  if (color) return `color: ${get(theme?.palette, color, color)};`;
  return `color: currentColor;`;
};
