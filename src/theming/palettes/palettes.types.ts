import { ObjectOf } from '../../lib';

export type Palette = {
  primary?: ObjectOf<string>;
  secondary?: ObjectOf<string>;
  neutral?: ObjectOf<string>;
  info?: ObjectOf<string>;
  success?: ObjectOf<string>;
  warning?: ObjectOf<string>;
  error?: ObjectOf<string>;
  report?: ObjectOf<string>;
};
