// === Import : NPM
import { HTMLAttributes } from 'react';

// === Import : LOCAL
import { Theme } from '../../../theming';
import {
  GetGuttersProps,
  GetHeightWidthProps,
  GetBackgroundProps,
  GetColorProps,
  GetRadiusProps,
  GetShadowProps,
} from '../../../lib';
import { GetBorderProps } from '../../../lib/styles/get-border/get-border';

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
