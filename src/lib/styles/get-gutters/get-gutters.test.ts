import { GutterUnitEnum } from '../../../theming';
import { getGutters } from './get-gutters';

describe('get-gutters / getGutterValue', () => {
  test('return default', () => {
    const gutter = getGutters({});
    expect(gutter).toBe('');
  });

  test('return with gutter unit theme provided', () => {
    const gutterPX = getGutters({
      theme: { gutter: { unit: GutterUnitEnum.PX } },
      m: 12,
    });
    expect(gutterPX).toBe('margin: 48px;');

    const gutterEM = getGutters({
      theme: { gutter: { unit: GutterUnitEnum.EM } },
      m: 12,
    });
    expect(gutterEM).toBe('margin: 3em;');
  });

  test('return with gutter size theme provided', () => {
    const gutter = getGutters({ theme: { gutter: { size: 6 } }, m: 12 });
    expect(gutter).toBe('margin: 72em;');
  });

  test('return with gutter unit and size theme provided', () => {
    const gutterPX = getGutters({
      theme: { gutter: { unit: GutterUnitEnum.PX, size: 4 } },
      m: 12,
    });
    expect(gutterPX).toBe('margin: 48px;');

    const gutterEM = getGutters({
      theme: { gutter: { unit: GutterUnitEnum.EM, size: 4 } },
      m: 12,
    });
    expect(gutterEM).toBe('margin: 48em;');
  });

  test('return margin & padding with surcharges', () => {
    const surchargePT = getGutters({
      p: 12,
      py: 2,
      px: 1,
      m: 12,
      mt: 2,
      mr: 1,
      mb: 2,
      ml: 1,
    });
    expect(surchargePT).toBe(
      'padding: 3em; padding-top: 0.5em; padding-right: 0.25em; padding-bottom: 0.5em; padding-left: 0.25em; margin: 3em; margin-top: 0.5em; margin-right: 0.25em; margin-bottom: 0.5em; margin-left: 0.25em;'
    );
  });
});
