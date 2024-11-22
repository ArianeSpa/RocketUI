// === Import : NPM
import { HTMLAttributes } from 'react';

// === Import : LOCAL
import { Theme } from '../../../theming';
import {
  GetGuttersProps,
  GetHeightWidthProps,
  GetFlexProps,
} from '../../../lib';

export interface StyledFlexProps
  extends Omit<HTMLAttributes<HTMLBaseElement>, 'color'>,
    GetGuttersProps,
    GetHeightWidthProps,
    GetFlexProps {
  theme?: Theme;
}
