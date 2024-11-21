import { getHeightWidth } from './get-height-width';

describe('Styles for components: get-height-width', () => {
  test('return undefined when no height and width props', () => {
    const noProps = getHeightWidth({});
    expect(noProps).toBeUndefined();
  });

  test('return height and width', () => {
    const onlyHeight = getHeightWidth({ height: '100px' });
    expect(onlyHeight).toBe('height: 100px;');

    const onlyWidth = getHeightWidth({ width: '100px' });
    expect(onlyWidth).toBe('width: 100px;');

    const onlyFullHeight = getHeightWidth({ fullHeight: true });
    expect(onlyFullHeight).toBe('height: 100%;');

    const onlyFullWidth = getHeightWidth({ fullWidth: true });
    expect(onlyFullWidth).toBe('width: 100%;');

    const heightAndFullHeight = getHeightWidth({
      fullHeight: true,
      height: '100px',
    });
    expect(heightAndFullHeight).toBe('height: 100%;');

    const widthAndFullWidth = getHeightWidth({
      fullWidth: true,
      width: '100px',
    });
    expect(widthAndFullWidth).toBe('width: 100%;');

    const heightAndWidth = getHeightWidth({
      height: '50px',
      width: '100px',
    });
    expect(heightAndWidth).toBe('height: 50px; width: 100px;');
  });
});
