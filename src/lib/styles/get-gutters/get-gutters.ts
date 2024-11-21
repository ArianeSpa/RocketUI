// === Import : LOCAL
import { GutterUnitEnum, Theme } from '../../../theming';

export type GetGuttersProps = {
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  theme?: Theme;
};
export const getGutters = ({ theme, ...gutters }: GetGuttersProps) => {
  const { p, px, py, pt, pr, pb, pl } = gutters;
  const { m, mx, my, mt, mr, mb, ml } = gutters;

  const { gutter } = theme || {};

  const getGutterSize = (value: number) => {
    if (!gutter) return `${value * 0.25}em`;
    const { unit, size } = gutter;
    switch (unit) {
      case GutterUnitEnum.PX:
        return `${value * (size ?? 4)}px`;
      case GutterUnitEnum.EM:
      default:
        return `${value * (size ?? 0.25)}em`;
    }
  };

  const pTop = py ?? pt;
  const pRight = px ?? pr;
  const pBottom = py ?? pb;
  const pLeft = px ?? pl;
  const paddingStyles = [
    p ? `padding: ${getGutterSize(p)};` : undefined,
    pTop ? `padding-top: ${getGutterSize(pTop)};` : undefined,
    pRight ? `padding-right: ${getGutterSize(pRight)};` : undefined,
    pBottom ? `padding-bottom: ${getGutterSize(pBottom)};` : undefined,
    pLeft ? `padding-left: ${getGutterSize(pLeft)};` : undefined,
  ];

  const mTop = my ?? mt;
  const mRight = mx ?? mr;
  const mBottom = my ?? mb;
  const mLeft = mx ?? ml;
  const marginStyles = [
    m ? `margin: ${getGutterSize(m)};` : undefined,
    mTop ? `margin-top: ${getGutterSize(mTop)};` : undefined,
    mRight ? `margin-right: ${getGutterSize(mRight)};` : undefined,
    mBottom ? `margin-bottom: ${getGutterSize(mBottom)};` : undefined,
    mLeft ? `margin-left: ${getGutterSize(mLeft)};` : undefined,
  ];

  return [...paddingStyles, ...marginStyles].filter(Boolean).join(' ');
};
