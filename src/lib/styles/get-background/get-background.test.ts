import { getBackground } from './get-background';

describe('get-background', () => {
  test('return default background', () => {
    const defaultBackground = getBackground({});
    expect(defaultBackground).toStrictEqual([
      'background-color: transparent;',
      'background-image: unset;',
    ]);
  });
});
