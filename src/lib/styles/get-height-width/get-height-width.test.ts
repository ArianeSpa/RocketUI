import { getHeightWidth } from './get-height-width';

describe('Styles for components: get-height-width', () => {
  test('return undefined when no height and width props', () => {
    const noProps = getHeightWidth({});
    expect(noProps).toBeUndefined();
  });

  test('return height and width', () => {
    const onlyHeight = getHeightWidth({ height: '100px' });
    expect(onlyHeight).toStrictEqual(['height: 100px;']);

    const onlyWidth = getHeightWidth({ width: '100px' });
    expect(onlyWidth).toStrictEqual(['width: 100px;']);

    const onlyFullHeight = getHeightWidth({ fullHeight: true });
    expect(onlyFullHeight).toStrictEqual(['height: 100%;']);

    const onlyFullWidth = getHeightWidth({ fullWidth: true });
    expect(onlyFullWidth).toStrictEqual(['width: 100%;']);

    const heightAndFullHeight = getHeightWidth({
      fullHeight: true,
      height: '100px',
    });
    expect(heightAndFullHeight).toStrictEqual(['height: 100%;']);

    const widthAndFullWidth = getHeightWidth({
      fullWidth: true,
      width: '100px',
    });
    expect(widthAndFullWidth).toStrictEqual(['width: 100%;']);

    const heightAndWidth = getHeightWidth({
      height: '50px',
      width: '100px',
    });
    expect(heightAndWidth).toStrictEqual(['height: 50px;', 'width: 100px;']);
  });
});
