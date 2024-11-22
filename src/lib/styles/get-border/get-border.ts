// === Import : NPM
import { get } from 'lodash';
import { CSSProperties } from 'styled-components';

// === Import : LOCAL
import { PaletteThemeKeys, Theme } from '../../../theming';

export type GetBorderProps = {
  theme?: Theme;
  borderColor?: PaletteThemeKeys | CSSProperties['borderColor'];
  borderStyle?: CSSProperties['borderStyle'];
  borderWidth?: CSSProperties['borderWidth'];
};

export const getBorder = ({
  borderColor,
  borderStyle,
  borderWidth,
  theme,
}: GetBorderProps) => {
  if (!borderColor && !borderStyle && !borderWidth) return;

  const color = get(theme?.palette, borderColor, borderColor || '#000000');
  const style = borderStyle ?? 'solid';
  const width = borderWidth ?? '1px';
  return `border: ${width} ${style} ${color};`;
};
