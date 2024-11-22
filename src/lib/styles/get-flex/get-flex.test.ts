import { getFlex } from './get-flex';

describe('get-flex', () => {
  test('return styles without param (default styles)', () => {
    const flexStyle = getFlex({});
    expect(flexStyle).toStrictEqual([
      'align-items: center;',
      'justify-content: center;',
      'flex-direction: column;',
      'gap: 0em;',
    ]);
  });

  test('return styles with wrap, grow and shrink', () => {
    const flexStyle = getFlex({
      flexWrap: 'wrap',
      flexGrow: 2,
      flexShrink: 4,
    });
    expect(flexStyle).toStrictEqual([
      'align-items: center;',
      'justify-content: center;',
      'flex-direction: column;',
      'gap: 0em;',
      'flex-wrap: wrap;',
      'flex-grow: 2;',
      'flex-shrink: 4;',
    ]);
  });
});
