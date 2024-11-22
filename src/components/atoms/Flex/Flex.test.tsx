// === Import : NPM
import React from 'react';
import { screen } from '@testing-library/react';

// === Import : Local
import { Flex, FlexProps } from './Flex';
import { getStyleFromElement, render } from '../../../test';

const renderComponent = (props?: FlexProps) =>
  render(<Flex {...props}>Content</Flex>);

describe('<Flex />', () => {
  test('renders with default styles', () => {
    renderComponent();
    const flex = screen.getByText('Content');

    const { display, gap, overflow, ...styles } = getStyleFromElement(flex, [
      'display',
      'gap',
      'overflow',
      'align-items',
      'box-sizing',
      'background-color',
      'background-image',
      'flex-direction',
      'justify-content',
    ]);
    expect(display).toBe('flex');
    expect(gap).toBe('0em');
    expect(overflow).toBe('hidden');
    expect(styles['align-items']).toBe('center');
    expect(styles['box-sizing']).toBe('border-box');
    expect(styles['background-color']).toBe('transparent');
    expect(styles['background-image']).toBeUndefined();
    expect(styles['flex-direction']).toBe('column');
    expect(styles['justify-content']).toBe('center');
  });
});
