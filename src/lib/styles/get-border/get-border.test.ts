import { getBorder } from './get-border';

const mockTheme = {
  palette: {
    primary: { '100': '#FFFFFF' },
  },
};

describe('get-color', () => {
  test('return default color', () => {
    const defaultBorder = getBorder({});
    expect(defaultBorder).toBeUndefined();
  });

  test('return border with color from theme', () => {
    const border = getBorder({
      theme: mockTheme,
      borderColor: 'primary.100',
    });
    expect(border).toBe('border: 1px solid #FFFFFF;');
  });

  test('return border with color not from theme', () => {
    const border = getBorder({ theme: mockTheme, borderColor: '#330518' });
    expect(border).toBe('border: 1px solid #330518;');
  });

  test('return border without color but style', () => {
    const border = getBorder({ borderStyle: 'dashed' });
    expect(border).toBe('border: 1px dashed #000000;');
  });
});
