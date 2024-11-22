import { DeepPartial } from '../_utils/types';
import { darkGradient } from './darkGradient/darkGradient';
import { instaGradient } from './instaGradient/instaGradient';

export type GradientThemeKeys = DeepPartial<any>;
export const defaultGradients: GradientThemeKeys = {
  instaGradient,
  darkGradient,
};
