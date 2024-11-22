import { getEllipsis } from './get-ellipsis';

describe('get-ellipsis', () => {
  test('return default', () => {
    const defaultStyle = getEllipsis({});
    expect(defaultStyle).toBeUndefined();
  });

  test('return no wrap styles', () => {
    const noWrapStyle = getEllipsis({ noWrap: true });
    expect(noWrapStyle).toStrictEqual([
      'text-overflow: ellipsis;',
      'white-space: nowrap;',
      'overflow: hidden;',
    ]);
  });
});
