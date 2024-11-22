import { getFont } from './get-font';

describe('get-font / getFontDefinition', () => {
  test('return default font styles', () => {
    const defaultFont = getFont({});
    expect(defaultFont).toBe('');
  });

  test('return font styles with FontDefinitionProps', () => {
    const defaultFont = getFont({
      fontFamily: 'fontFamily',
      fontSize: 'fontSize',
      fontStretch: 'fontStretch',
      fontStyle: 'fontStyle',
      fontVariant: 'fontVariant',
      fontWeight: 'fontWeight',
      lineHeight: 'lineHeight',
    });
    expect(defaultFont).toStrictEqual([
      'font-family: fontFamily;',
      'font-size: fontSize;',
      'font-stretch: fontStretch;',
      'font-style: fontStyle;',
      'font-variant: fontVariant;',
      'font-weight: fontWeight;',
      'line-height: lineHeight;',
    ]);
  });
});

const mockTheme = {
  fonts: {
    h1: { fontWeight: 800 },
    body: { fontFamily: 'bodyFontFamily' },
  },
};

describe('get-font / getFont', () => {
  test('return default font', () => {
    const font = getFont({});
    expect(font).toBe('');
  });

  test('return font with theme and default variant', () => {
    const font = getFont({ theme: mockTheme });
    expect(font).toStrictEqual(['font-family: bodyFontFamily;']);
  });

  test('return font with theme and variant', () => {
    const font = getFont({ theme: mockTheme, variant: 'h1' });
    expect(font).toStrictEqual(['font-weight: 800;']);
  });

  test('return font with theme and not existing variant', () => {
    const font = getFont({ theme: mockTheme, variant: 'h2' });
    expect(font).toBe('');
  });

  test('return font with variant but no theme provided', () => {
    const font = getFont({ variant: 'h2' });
    expect(font).toBe('');
  });

  test('return font variant, theme and fontWeight surcharge', () => {
    const font = getFont({
      theme: mockTheme,
      variant: 'h1',
      fontSize: '16px',
    });
    expect(font).toStrictEqual(['font-size: 16px;', 'font-weight: 800;']);
  });
});
