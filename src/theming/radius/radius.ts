import { DeepPartial } from '../_utils/types';

export type RadiusThemeKeys = DeepPartial<any>;
export const defaultRadius = {
  square: 0,
  rounded: '50%',
  xSmall: '2px',
  small: '4px',
  medium: '6px',
  large: '8px',
  xLarge: '10px',
};
