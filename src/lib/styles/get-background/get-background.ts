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
  const styles = [];
  styles.push(
    `background-color: ${backgroundColor ? get(theme?.palette, backgroundColor, backgroundColor) : 'transparent'};`
  );
  if (backgroundImage)
    styles.push(
      `background-image: ${get(theme?.gradients, backgroundImage, backgroundImage)};`
    );

  return styles;
};
