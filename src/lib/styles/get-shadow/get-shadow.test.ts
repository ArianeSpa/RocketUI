import { getShadow } from './get-shadow';

const mockTheme = {
  shadows: { 1: '0px 32px 64px 0px rgba(0, 0, 0, 0.24)' },
};

describe('get-shadow', () => {
  test('return default shadow', () => {
    const defaultShadow = getShadow({});
    expect(defaultShadow).toBeUndefined();
  });

  test('return shadow from theme with elevation props', () => {
    const shadow = getShadow({ theme: mockTheme, elevation: 1 });
    expect(shadow).toBe('box-shadow: 0px 32px 64px 0px rgba(0, 0, 0, 0.24);');
  });

  test('return shadow with bowShadow property', () => {
    const shadow = getShadow({
      theme: mockTheme,
      boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.2)',
    });
    expect(shadow).toBe('box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);');
  });
});
