export enum GutterUnitEnum {
  EM = 'em',
  PX = 'px',
}

export type GutterThemeProps = {
  unit?: GutterUnitEnum;
  size?: number;
};

export const defaultGutters: GutterThemeProps = {
  unit: GutterUnitEnum.EM,
  size: 0.25,
};
