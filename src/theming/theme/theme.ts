import { useTheme as useStyledTheme } from 'styled-components';

import { DeepNestedKeyOf } from '../../lib';
import {
  error,
  info,
  neutral,
  primary,
  report,
  secondary,
  success,
  warning,
} from '../palettes';

export const defaultTheme = {
  palette: {
    primary,
    secondary,
    neutral,
    info,
    success,
    warning,
    error,
    report,
  },
  gutter: {
    type: 'em',
    size: 0.25,
  },
  roundness: 4,
};

export type DefaultTheme = typeof defaultTheme;
export const useTheme = useStyledTheme as () => DefaultTheme;

export type PaletteThemeKeys = DeepNestedKeyOf<DefaultTheme['palette']>;
// export type GradienthemeKeys = DeepNestedKeyOf<DefaultTheme['gradients']>;
