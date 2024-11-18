import { Theme } from '../theming';

type GetGutterDefProps = {
  value: number;
  theme?: Theme;
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
  value?: number;
  theme?: Theme;
};
export const getGutterStyle = ({
  position,
  type,
  value,
  theme,
}: GetGutterStyleProps) => {
  if (!value) return;
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
export const getMarginStyle = (margins: GetMarginStyleProps) => {
  const { m, mx, my, mt, mr, mb, ml } = margins;

  const topMargin = m ?? my ?? mt;
  const rightMargin = m ?? mx ?? mr;
  const bottomMargin = m ?? my ?? mb;
  const leftMargin = m ?? mx ?? ml;
  return {
    top: getGutterStyle({ position: 'top', type: 'margin', value: topMargin }),
    right: getGutterStyle({
      position: 'right',
      type: 'margin',
      value: rightMargin,
    }),
    bottom: getGutterStyle({
      position: 'bottom',
      type: 'margin',
      value: bottomMargin,
    }),
    left: getGutterStyle({
      position: 'left',
      type: 'margin',
      value: leftMargin,
    }),
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
export const getPaddingStyle = (paddings: GetPaddingStyleProps) => {
  const { p, px, py, pt, pr, pb, pl } = paddings;

  const topPadding = p ?? py ?? pt;
  const rightPadding = p ?? px ?? pr;
  const bottomPadding = p ?? py ?? pb;
  const leftPadding = p ?? px ?? pl;
  return {
    top: getGutterStyle({
      position: 'top',
      type: 'padding',
      value: topPadding,
    }),
    right: getGutterStyle({
      position: 'right',
      type: 'padding',
      value: rightPadding,
    }),
    bottom: getGutterStyle({
      position: 'bottom',
      type: 'padding',
      value: bottomPadding,
    }),
    left: getGutterStyle({
      position: 'left',
      type: 'padding',
      value: leftPadding,
    }),
  };
};

export type GetGuttersProps = GetMarginStyleProps & GetPaddingStyleProps;
export const getGutters = (gutters: GetGuttersProps) => {
  const { p, px, py, pt, pr, pb, pl } = gutters;
  const { m, mx, my, mt, mr, mb, ml } = gutters;

  const paddingStyle = getPaddingStyle({ p, px, py, pt, pr, pb, pl });
  const marginStyle = getMarginStyle({ m, mx, my, mt, mr, mb, ml });

  const paddingDef = Object.values(paddingStyle).filter(Boolean).join('');
  const marginDef = Object.values(marginStyle).filter(Boolean).join('');

  return `${paddingDef} ${marginDef}`;
};
