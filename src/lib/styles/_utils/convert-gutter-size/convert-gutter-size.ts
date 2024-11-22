import { GutterThemeProps, GutterUnitEnum } from '../../../../theming';

type ConvertGutterSize = {
  value: number;
  gutter?: GutterThemeProps;
};
export const convertGutterSize = ({ value, gutter }: ConvertGutterSize) => {
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
