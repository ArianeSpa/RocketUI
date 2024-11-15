import { ThemeProps } from '../theme/theme';

type GetGutterDefProps = {
  value: number;
  theme?: ThemeProps;
};
const getGutterValue = ({ theme, value }: GetGutterDefProps) => {
  switch (theme?.gutter?.type) {
    case 'px':
      return `${value * (theme?.gutter?.size ?? 4)}px`;
    case 'em':
    default:
      return `${value * (theme?.gutter?.size ?? 0.25)}em`;
  }
};

type GetGutterStyleProps = {
  position: 'top' | 'right' | 'bottom' | 'left';
  type: 'margin' | 'padding';
} & GetGutterDefProps;
export const getGutterStyle = ({
  position,
  type,
  value,
  theme,
}: GetGutterStyleProps) => {
  return `${type}-${position}: ${getGutterValue({ value, theme })};`;
};

export type GetMarginStyleProps = {
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
};
export const getMarginStyle = ({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
}: GetMarginStyleProps) => {
  const topMargin = m ?? my ?? mt;
  const rightMargin = m ?? mx ?? mr;
  const bottomMargin = m ?? my ?? mb;
  const leftMargin = m ?? mx ?? ml;
  return {
    top: topMargin
      ? getGutterStyle({ position: 'top', type: 'margin', value: topMargin })
      : undefined,
    right: rightMargin
      ? getGutterStyle({
          position: 'right',
          type: 'margin',
          value: rightMargin,
        })
      : undefined,
    bottom: bottomMargin
      ? getGutterStyle({
          position: 'bottom',
          type: 'margin',
          value: bottomMargin,
        })
      : undefined,
    left: leftMargin
      ? getGutterStyle({
          position: 'left',
          type: 'margin',
          value: leftMargin,
        })
      : undefined,
  };
};

export type GetPaddingStyleProps = {
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
};
export const getPaddingStyle = ({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
}: GetPaddingStyleProps) => {
  const topPadding = p ?? py ?? pt;
  const rightPadding = p ?? px ?? pr;
  const bottomPadding = p ?? py ?? pb;
  const leftPadding = p ?? px ?? pl;
  return {
    top: topPadding
      ? getGutterStyle({ position: 'top', type: 'padding', value: topPadding })
      : undefined,
    right: rightPadding
      ? getGutterStyle({
          position: 'right',
          type: 'padding',
          value: rightPadding,
        })
      : undefined,
    bottom: bottomPadding
      ? getGutterStyle({
          position: 'bottom',
          type: 'padding',
          value: bottomPadding,
        })
      : undefined,
    left: leftPadding
      ? getGutterStyle({
          position: 'left',
          type: 'padding',
          value: leftPadding,
        })
      : undefined,
  };
};

export type GetGuttersProps = GetMarginStyleProps & GetPaddingStyleProps;
export const getGutters = ({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
}: GetGuttersProps) => {
  const paddingStyle = getPaddingStyle({ p, px, py, pt, pr, pb, pl });
  const marginStyle = getMarginStyle({ m, mx, my, mt, mr, mb, ml });

  const paddingDef = Object.values(paddingStyle).filter(Boolean).join('');
  const marginDef = Object.values(marginStyle).filter(Boolean).join('');

  return `${paddingDef} ${marginDef}`;
};
