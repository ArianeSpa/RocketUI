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

  test('return with getBackground option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getBackground'] });
    const backgroundColor = shouldForwardProp('backgroundColor');
    expect(backgroundColor).toBe(false);
  });

  test('return with getBorder option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getBorder'] });
    const borderColor = shouldForwardProp('borderColor');
    expect(borderColor).toBe(false);
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

  test('return with getFlex option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getFlex'] });
    const flexWrap = shouldForwardProp('flexWrap');
    expect(flexWrap).toBe(false);
  });

  test('return with getFont option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getFont'] });
    const fontSize = shouldForwardProp('fontSize');
    expect(fontSize).toBe(false);
  });

  test('return with getGutters option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getGutters'] });
    const padding = shouldForwardProp('p');
    expect(padding).toBe(false);
  });

  test('return with getRadius option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getRadius'] });
    const radius = shouldForwardProp('radius');
    expect(radius).toBe(false);
  });

  test('return with getShadow option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getShadow'] });
    const elevation = shouldForwardProp('elevation');
    expect(elevation).toBe(false);
  });

  test('return with getHeightWidth option', () => {
    const { shouldForwardProp } = getConfig({ options: ['getHeightWidth'] });
    const fullWidth = shouldForwardProp('fullWidth');
    expect(fullWidth).toBe(false);
  });

  test('return with no existing option', () => {
    const { shouldForwardProp } = getConfig({
      options: ['any' as GetConfigOptionsProps], // Force type for test
    });
    const any = shouldForwardProp('any');
    expect(any).toBe(true);
  });
});
