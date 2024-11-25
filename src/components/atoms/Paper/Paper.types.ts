// === Import : NPM
import { HTMLAttributes } from 'react';

// === Import : LOCAL
import { Theme } from '../../../theming';
import {
  GetBorderProps,
  GetGuttersProps,
  GetHeightWidthProps,
  GetBackgroundProps,
  GetColorProps,
  GetRadiusProps,
  GetShadowProps,
} from '../../../lib';

export interface StyledPaperProps
  extends Omit<HTMLAttributes<HTMLBaseElement>, 'color'>,
    GetBackgroundProps,
    GetBorderProps,
    GetColorProps,
    GetGuttersProps,
    GetHeightWidthProps,
    GetRadiusProps,
    GetShadowProps {
  theme?: Theme;
}
