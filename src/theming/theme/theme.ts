import { defaultFonts, FontThemeProps } from '../fonts/fonts';
import { defaultGutters, GutterThemeProps } from '../gutters/gutters';
import { defaultPalette, PaletteThemeKeys } from '../palette/palette';

export type ThemeProps = {
  palette: PaletteThemeKeys;
  gutter?: GutterThemeProps;
  fonts?: FontThemeProps;
  roundness?: number | string;
};

export const defaultTheme: ThemeProps = {
  palette: defaultPalette,
  gutter: defaultGutters,
  fonts: defaultFonts,
  roundness: 4,
};

export type Theme = typeof defaultTheme;
