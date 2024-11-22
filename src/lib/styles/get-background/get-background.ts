// === Import : NPM
import { get } from 'lodash';
import { CSSProperties } from 'styled-components';

// === Import : LOCAL
import { GradientThemeKeys, PaletteThemeKeys, Theme } from '../../../theming';

export type GetBackgroundProps = {
  theme?: Theme;
  backgroundColor?: PaletteThemeKeys | CSSProperties['backgroundColor'];
  backgroundImage?: GradientThemeKeys | CSSProperties['backgroundImage'];
};

export const getBackground = ({
  backgroundColor,
  backgroundImage,
  theme,
}: GetBackgroundProps) => {
  const bgColorStyle = `background-color: ${get(theme?.palette, backgroundColor, 'transparent')};`;
  const bgImageStyle = `background-image: ${get(theme?.gradients, backgroundImage, 'unset')};`;

  return [bgColorStyle, bgImageStyle];
};
