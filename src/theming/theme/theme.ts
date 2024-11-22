import { defaultFonts, FontThemeProps } from '../fonts/fonts';
import { defaultGradients, GradientThemeKeys } from '../gradients/gradients';
import { defaultGutters, GutterThemeProps } from '../gutters/gutters';
import { defaultPalette, PaletteThemeKeys } from '../palette/palette';
import { defaultRadius, RadiusThemeKeys } from '../radius/radius';

export type ThemeProps = {
  fonts?: FontThemeProps;
  gradients?: GradientThemeKeys;
  gutter?: GutterThemeProps;
  palette?: PaletteThemeKeys;
  radius?: RadiusThemeKeys;
};

export const defaultTheme: ThemeProps = {
  fonts: defaultFonts,
  gradients: defaultGradients,
  gutter: defaultGutters,
  palette: defaultPalette,
  radius: defaultRadius,
};

export type Theme = typeof defaultTheme;
