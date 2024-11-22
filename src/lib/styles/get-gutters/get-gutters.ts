// === Import : LOCAL
import { convertGutterSize } from '../_utils';
import { Theme } from '../../../theming';

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

  const getStyle = (style: string, value?: number) =>
    value
      ? `${style}: ${convertGutterSize({ value, gutter: theme?.gutter })};`
      : undefined;

  const paddingStyles = [
    getStyle('padding', p),
    getStyle('padding-top', py ?? pt),
    getStyle('padding-right', px ?? pr),
    getStyle('padding-bottom', py ?? pb),
    getStyle('padding-left', px ?? pl),
  ];

  const marginStyles = [
    getStyle('margin', m),
    getStyle('margin-top', my ?? mt),
    getStyle('margin-right', mx ?? mr),
    getStyle('margin-bottom', my ?? mb),
    getStyle('margin-left', mx ?? ml),
  ];

  return [...paddingStyles, ...marginStyles].filter(Boolean);
};
