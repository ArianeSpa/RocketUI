export type GutterThemeProps = {
  type?: 'em' | 'px';
  size?: number;
};

export const defaultGutters: GutterThemeProps = {
  type: 'em',
  size: 0.25,
};
