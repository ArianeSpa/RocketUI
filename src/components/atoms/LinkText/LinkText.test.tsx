// === Import : NPM
import React from 'react';
import { screen } from '@testing-library/react';

// === Import : Local
import { LinkText, LinkTextProps } from './LinkText';
import { render } from '../../../test';

const renderComponent = (props?: LinkTextProps) =>
  render(
    <LinkText href="https://github.com/ArianeSpa/RocketUI" {...props}>
      Link
    </LinkText>
  );

describe('<LinkText />', () => {
  test('renders with default styles', () => {
    renderComponent();
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toBeInTheDocument();
  });
});
