// === Import : NPM
import React from 'react';
import { screen } from '@testing-library/react';

// === Import : Local
import { Typo, TypoProps } from './Typo';
import { getStyleFromElement, render } from '../../../test';

const renderComponent = (props?: TypoProps) =>
  render(<Typo {...props}>Typography</Typo>);

describe('<Typo />', () => {
  test('renders with default styles', () => {
    renderComponent();
    const typo = screen.getByText('Typography');

    const { display, margin, overflow, ...styles } = getStyleFromElement(typo, [
      'display',
      'margin',
      'overflow',
      'text-align',
      'text-overflow',
      'white-space',
    ]);
    expect(margin).toBe('0px');
    expect(display).toBeUndefined();
    expect(overflow).toBeUndefined();
    expect(styles['text-align']).toBe('inherit');
    expect(styles['text-overflow']).toBeUndefined();
    expect(styles['white-space']).toBeUndefined();
  });

  test('renders with align', () => {
    renderComponent({ align: 'left' });
    const typo = screen.getByText('Typography');

    const style = getStyleFromElement(typo, ['text-align']);
    expect(style['text-align']).toBe('left');
  });

  test('renders with noWrap', () => {
    renderComponent({ noWrap: true });
    const typo = screen.getByText('Typography');

    const { display, overflow, ...styles } = getStyleFromElement(typo, [
      'display',
      'overflow',
      'text-overflow',
      'white-space',
    ]);
    expect(display).toBe('block');
    expect(overflow).toBe('hidden');
    expect(styles['text-overflow']).toBe('ellipsis');
    expect(styles['white-space']).toBe('nowrap');
  });

  test('renders with width', () => {
    renderComponent({ width: '100px' });
    const typo = screen.getByText('Typography');

    const { display, width } = getStyleFromElement(typo, ['display', 'width']);
    expect(display).toBe('inline-block');
    expect(width).toBe('100px');
  });

  test('renders with display', () => {
    renderComponent({ display: 'none' });
    const typo = screen.getByText('Typography');

    const { display } = getStyleFromElement(typo, ['display']);
    expect(display).toBe('none');
  });
});
