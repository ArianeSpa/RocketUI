import { defaultFonts, FontThemeProps } from '../fonts/fonts';
import { defaultGradients, GradientThemeKeys } from '../gradients/gradients';
import { defaultGutters, GutterThemeProps } from '../gutters/gutters';
import { defaultPalette, PaletteThemeKeys } from '../palette/palette';
import { defaultRadius, RadiusThemeKeys } from '../radius/radius';
import { defaultShadows, ShadowThemeKeys } from '../shadows/shadows';

export type ThemeProps = {
  fonts?: FontThemeProps;
  gradients?: GradientThemeKeys;
  gutter?: GutterThemeProps;
  palette?: PaletteThemeKeys;
  radius?: RadiusThemeKeys;
  shadows?: ShadowThemeKeys;
};

export const defaultTheme: ThemeProps = {
  fonts: defaultFonts,
  gradients: defaultGradients,
  gutter: defaultGutters,
  palette: defaultPalette,
  radius: defaultRadius,
  shadows: defaultShadows,
};

export type Theme = typeof defaultTheme;
