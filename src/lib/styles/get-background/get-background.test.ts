import { getBackground } from './get-background';

describe('get-background', () => {
  test('return default background', () => {
    const defaultBackground = getBackground({});
    expect(defaultBackground).toStrictEqual(['background-color: transparent;']);
  });

  test('return background color', () => {
    const defaultBackground = getBackground({ backgroundColor: '#000000' });
    expect(defaultBackground).toStrictEqual(['background-color: #000000;']);
  });

  test('return background image', () => {
    const defaultBackground = getBackground({
      backgroundImage:
        'radial-gradient(circle, rgba(43, 43, 61, 0.2),  rgba(43, 43, 61, 0.6))',
    });
    expect(defaultBackground).toStrictEqual([
      'background-color: transparent;',
      'background-image: radial-gradient(circle, rgba(43, 43, 61, 0.2),  rgba(43, 43, 61, 0.6));',
    ]);
  });
});
