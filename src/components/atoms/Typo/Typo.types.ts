// === Import : NPM
import { HTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';

// === Import : LOCAL
import {
  GetGuttersProps,
  PaletteThemeKeys,
  ThemeProps,
} from '../../../theming';

export interface StyledTypoProps
  extends HTMLAttributes<HTMLBaseElement>,
    GetGuttersProps {
  /**
   * Set the text-align of the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';

  /**
   * The color of the component.
   * It supports default thme colors, custom theme colors or any other color.
   * See docummentation to learn how to add new theme styles or override the default theme
   * [theme customization guide](@todo set link).
   * @default currentColor
   */
  color?: PaletteThemeKeys | CSSProperties['color'];

  /**
   * The display of the component.
   * By default, Typo is a <span> tag, it means display is inline.
   * @default inline
   */

  display?: CSSProperties['display'];

  /**
   * The font-weight of the text
   * Pass native html values of the attribute (500, bold...)
   */
  fontWeight?: CSSProperties['fontWeight'];

  /**
   * The height of the component.
   */
  height?: CSSProperties['height'];

  /**
   * When set to `true`, the text will truncat instead of wrap.
   * The text overflow will display ellipsis.
   * By default, Typo is a <span> tag, it means display is inline.
   * If 'noWrap' is set to true, we force display to 'block' to allow overflow.
   * A width also need to be set
   * @default false
   */
  noWrap?: boolean;

  /**
   * The width of the component.
   */
  width?: CSSProperties['width'];

  /**
   * The custom theme provided via RocketThemeProvider.
   * Or default theme if the app is wrapped in RocketThemeProvider
   * @default undefined
   */
  theme?: ThemeProps;

  /**
   * @todo ajouter variant
   * @todo ajouter info gutters
   */
}

export interface TypoProps extends Omit<StyledTypoProps, 'theme'> {
  /**
   * The content of the component.
   * By default, Typo is a <span> tag, it means children should be phrasing content.
   * You can use the prop `component` to change the default tag (exemple 'div').
   */
  children?: React.ReactNode;

  /**
   * @todo ajouter component + "as" dans compo
   */
}
