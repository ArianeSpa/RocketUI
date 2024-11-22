import { getGutters } from './get-gutters';

describe('get-gutters', () => {
  test('return default', () => {
    const gutter = getGutters({});
    expect(gutter).toStrictEqual([]);
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
    expect(surchargePT).toStrictEqual([
      'padding: 3em;',
      'padding-top: 0.5em;',
      'padding-right: 0.25em;',
      'padding-bottom: 0.5em;',
      'padding-left: 0.25em;',
      'margin: 3em;',
      'margin-top: 0.5em;',
      'margin-right: 0.25em;',
      'margin-bottom: 0.5em;',
      'margin-left: 0.25em;',
    ]);
  });
});
