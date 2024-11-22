// === Import : NPM
import type { Meta, StoryObj } from '@storybook/react';

// === Import : Local
import { Paper } from './Paper';

const meta = {
  title: 'Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    backgroundImage: { control: 'text' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
    radius: {
      control: 'radio',
      options: ['4px', '8px', '16px', 'rounded', 'square'],
    },
    elevation: { control: 'number' },
  },
  parameters: { controls: { exclude: ['children', 'style'] } },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoElevationBorderSquareBackgroundImage: Story = {
  args: {
    children: 'Elevation 0, border, square, background image',
    backgroundImage: 'darkGradient',
    borderColor: '#9C184F',
    radius: 'square',
    style: { padding: '12px' },
  },
};

export const Elevation1RoundedBackgroundColor: Story = {
  args: {
    children: 'Rounded, elevation 1',
    radius: 'rounded',
    elevation: 1,
    style: {
      padding: '12px',
      width: 'min-content',
      textAlign: 'center',
      minWidth: '110px',
    },
  },
};

export const Elevation2RadiusSmallBackgroundColor: Story = {
  args: {
    children: 'Radius small, elevation 2, background color',
    color: '#330518',
    backgroundColor: '#FCE7F3',
    radius: 'small',
    elevation: 2,
    style: {
      padding: '12px',
      textAlign: 'center',
      width: '200px',
    },
  },
};

export const Elevation3RadiusLargeBackgroundColor: Story = {
  args: {
    children: 'Radius large, elevation 3, background color',
    color: '#0B3B3E',
    backgroundColor: '#C8FFF7',
    radius: 'large',
    elevation: 3,
    style: {
      padding: '12px',
      textAlign: 'center',
      width: '200px',
    },
  },
};
