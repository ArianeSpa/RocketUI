import { DeepPartial } from '../../lib/common.types';
import { error } from './error/error';
import { info } from './info/info';
import { neutral } from './neutral/neutral';
import { primary } from './primary/primary';
import { report } from './report/report';
import { secondary } from './secondary/secondary';
import { success } from './success/success';
import { warning } from './warning/warning';

export type PaletteThemeKeys = DeepPartial<any>;
export const defaultPalette: PaletteThemeKeys = {
  primary,
  secondary,
  neutral,
  info,
  success,
  warning,
  error,
  report,
};
