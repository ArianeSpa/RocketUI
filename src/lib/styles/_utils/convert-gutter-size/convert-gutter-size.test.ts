import { GutterUnitEnum } from '../../../../theming';
import { convertGutterSize } from './convert-gutter-size';

describe('convert-gutter-size', () => {
  test('return without gutter param', () => {
    const gutter = convertGutterSize({ value: 2 });
    expect(gutter).toBe('0.5em');
  });

  test('return with empty gutter param', () => {
    const gutter = convertGutterSize({ value: 2, gutter: {} });
    expect(gutter).toBe('0.5em');
  });

  test('return with gutter size param but no unit', () => {
    const gutter = convertGutterSize({ value: 2, gutter: { size: 0.5 } });
    expect(gutter).toBe('1em');
  });

  test('return with unit param but no size', () => {
    const gutter = convertGutterSize({
      value: 2,
      gutter: { unit: GutterUnitEnum.PX },
    });
    expect(gutter).toBe('8px');
  });

  test('return with unit PX and size param', () => {
    const gutter = convertGutterSize({
      value: 2,
      gutter: { unit: GutterUnitEnum.PX, size: 8 },
    });
    expect(gutter).toBe('16px');
  });

  test('return with unit EM and size param', () => {
    const gutter = convertGutterSize({
      value: 2,
      gutter: { unit: GutterUnitEnum.EM, size: 0.5 },
    });
    expect(gutter).toBe('1em');
  });
});
