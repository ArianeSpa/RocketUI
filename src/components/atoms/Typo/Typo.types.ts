// === Import : NPM
import { HTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';

// === Import : LOCAL
import { Theme } from '../../../theming';
import {
  GetFontProps,
  GetGuttersProps,
  GetColorProps,
  GetHeightWidthProps,
  GetEllipsisProps,
} from '../../../lib';

export interface StyledTypoProps
  extends Omit<HTMLAttributes<HTMLBaseElement>, 'color'>,
    GetColorProps,
    GetEllipsisProps,
    GetFontProps,
    GetGuttersProps,
    GetHeightWidthProps {
  theme?: Theme;

  /**
   * Set the text-align of the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';

  /**
   * The display of the component.
   *
   * By default, Typo is a <span> tag, it means display is inline.
   * You can set the 'display' prop or a 'as' prop (example p) to change the display.
   * @default inline
   */

  display?: CSSProperties['display'];
}

export interface TypoProps extends Omit<StyledTypoProps, 'theme'> {
  /**
   * The content of the component.
   * By default, Typo is a <span> tag, it means children should be phrasing content.
   * You can use the prop `component` to change the default tag (exemple 'div').
   */
  children?: React.ReactNode;
}
