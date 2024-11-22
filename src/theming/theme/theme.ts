import { defaultFonts, FontThemeProps } from '../fonts/fonts';
import { defaultGradients, GradientThemeKeys } from '../gradients/gradients';
import { defaultGutters, GutterThemeProps } from '../gutters/gutters';
import { defaultPalette, PaletteThemeKeys } from '../palette/palette';

export type ThemeProps = {
  fonts?: FontThemeProps;
  gradients?: GradientThemeKeys;
  gutter?: GutterThemeProps;
  palette?: PaletteThemeKeys;
  roundness?: number | string;
};

export const defaultTheme: ThemeProps = {
  fonts: defaultFonts,
  gradients: defaultGradients,
  gutter: defaultGutters,
  palette: defaultPalette,
  roundness: 4,
};

export type Theme = typeof defaultTheme;
