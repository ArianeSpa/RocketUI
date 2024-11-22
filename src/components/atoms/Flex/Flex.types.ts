// === Import : NPM
import { HTMLAttributes } from 'react';

// === Import : LOCAL
import { Theme } from '../../../theming';
import {
  GetGuttersProps,
  GetHeightWidthProps,
  GetFlexProps,
  GetBackgroundProps,
} from '../../../lib';

export interface StyledFlexProps
  extends Omit<HTMLAttributes<HTMLBaseElement>, 'color'>,
    GetBackgroundProps,
    GetGuttersProps,
    GetHeightWidthProps,
    GetFlexProps {
  theme?: Theme;
}

export interface FlexProps extends Omit<StyledFlexProps, 'theme'> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}
