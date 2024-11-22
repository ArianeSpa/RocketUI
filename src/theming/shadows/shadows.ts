import { CSSProperties } from 'styled-components';

export type ShadowThemeKeys = { [key: number]: CSSProperties['boxShadow'] };
export const defaultShadows = {
  0: 'none',
  1: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  2: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 4px 5px 0px',
  3: 'rgba(0, 0, 0, 0.2) 0px 4px 2px -2px, rgba(0, 0, 0, 0.14) 0px 3px 3px 0px, rgba(0, 0, 0, 0.12) 0px 6px 7px 0px',
};
