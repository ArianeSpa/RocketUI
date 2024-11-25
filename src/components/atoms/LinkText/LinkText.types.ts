// === Import : NPM
import { HTMLAttributes } from 'react';

// === Import : LOCAL
import { Theme } from '../../../theming';
import { GetColorProps, GetFontProps, GetGuttersProps } from '../../../lib';

export interface StyledLinkTextProps
  extends Omit<HTMLAttributes<HTMLLinkElement>, 'color'>,
    GetColorProps,
    GetFontProps,
    GetGuttersProps {
  theme?: Theme;
}
