import { DeepNestedKeyOf, DeepPartial } from '../../lib';
import {
  error,
  info,
  neutral,
  primary,
  report,
  secondary,
  success,
  warning,
  type Palette,
} from '../palettes';

export type ThemeProps = {
  colors?: any;
  gradients?: any;
  palette: Palette;
  gutter?: {
    type?: 'px' | 'em';
    size?: number;
  };
  roundness?: number;
};

export const defaultTheme: ThemeProps = {
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

export type PaletteThemeKeys = DeepNestedKeyOf<ThemeProps['palette']>;
export type ColorThemeKeys = DeepPartial<ThemeProps['colors']>;
export type GradienthemeKeys = DeepNestedKeyOf<ThemeProps['gradients']>;
