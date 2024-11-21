import { getColor } from './get-color';

const mockTheme = {
  palette: {
    primary: { '100': '#FFFFFF' },
  },
};

describe('get-color', () => {
  test('return default color', () => {
    const defaultColor = getColor({});
    expect(defaultColor).toBe('color: currentColor;');
  });

  test('return color from theme', () => {
    const themeColor = getColor({ theme: mockTheme, color: 'primary.100' });
    expect(themeColor).toBe('color: #FFFFFF;');
  });

  test('return color not from theme', () => {
    const themeColor = getColor({ theme: mockTheme, color: '#330518' });
    expect(themeColor).toBe('color: #330518;');
  });
});
