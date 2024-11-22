// === Import : NPM
import React from 'react';
import { screen } from '@testing-library/react';

// === Import : Local
import { Paper, PaperProps } from './Paper';
import { getStyleFromElement, render } from '../../../test';

const renderComponent = (props?: PaperProps) =>
  render(<Paper {...props}>Paper</Paper>);

describe('<Paper />', () => {
  test('renders with default styles', () => {
    renderComponent();
    const paper = screen.getByText('Paper');

    const { color, ...styles } = getStyleFromElement(paper, [
      'color',
      'background-color',
      'background-image',
      'border-color',
      'border-radius',
      'box-shadow',
    ]);
    expect(color).toBe('currentColor');
    expect(styles['background-color']).toBe('transparent');
    expect(styles['background-image']).toBeUndefined();
    expect(styles['border-color']).toBeUndefined();
    expect(styles['border-radius']).toBeUndefined();
    expect(styles['box-shadow']).toBeUndefined();
  });
});
