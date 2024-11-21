import { getConfig, GetConfigOptionsProps } from './styled-component.config';

describe('styled-component.config: getConfig', () => {
  test('return with empty param object', () => {
    const { shouldForwardProp } = getConfig({});
    const padding = shouldForwardProp('padding');
    expect(padding).toBe(true);
  });

  test('return with one key', () => {
    const { shouldForwardProp } = getConfig({ keys: ['padding'] });
    const padding = shouldForwardProp('padding');
    expect(padding).toBe(false);
  });

  test('return with getGutters option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getGutters'] });
    const padding = shouldForwardProp('p');
    expect(padding).toBe(false);
  });

  test('return with getColor option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getColor'] });
    const color = shouldForwardProp('color');
    expect(color).toBe(false);
  });

  test('return with getEllipsis option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getEllipsis'] });
    const noWrap = shouldForwardProp('noWrap');
    expect(noWrap).toBe(false);
  });

  test('return with getHeightWidth option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getHeightWidth'] });
    const fullWidth = shouldForwardProp('fullWidth');
    expect(fullWidth).toBe(false);
  });

  test('return with getFont option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getFont'] });
    const fontSize = shouldForwardProp('fontSize');
    expect(fontSize).toBe(false);
  });

  test('return with getFont option', () => {
    const { shouldForwardProp } = getConfig({
      options: ['any' as GetConfigOptionsProps], // Force type for test
    });
    const any = shouldForwardProp('any');
    expect(any).toBe(true);
  });
});
