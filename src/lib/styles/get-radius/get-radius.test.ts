import { getRadius } from './get-radius';

const mockTheme = {
  radius: { custom: '2px' },
};

describe('get-radius', () => {
  test('return default radius', () => {
    const defaultRadius = getRadius({});
    expect(defaultRadius).toBeUndefined();
  });

  test('return radius from theme', () => {
    const radius = getRadius({ theme: mockTheme, radius: 'custom' });
    expect(radius).toBe('border-radius: 2px;');
  });

  test('return color not from theme', () => {
    const radius = getRadius({ theme: mockTheme, radius: '6px' });
    expect(radius).toBe('border-radius: 6px;');
  });
});
