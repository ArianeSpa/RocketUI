// === Import : NPM
import type { Meta, StoryObj } from '@storybook/react';

// === Import : Local
import { Typo } from './Typo';

const meta = {
  title: 'Typo',
  component: Typo,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    display: { control: 'text' },
    align: { control: 'text' },
    noWrap: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: {
    children: 'Typography',
    color: '#0F8473',
    noWrap: false,
    fontWeight: 'bold',
  },
} satisfies Meta<typeof Typo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: {
    children: 'Typography',
    width: '100%',
    align: 'center',
  },
};

export const RightAligned: Story = {
  args: {
    children: 'Typography',
    width: '100%',
    align: 'right',
  },
};

export const LongTextAndWidth: Story = {
  args: {
    width: '300px',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const LongTextEllipisAndWidth: Story = {
  args: {
    width: '300px',
    noWrap: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const Styled: Story = {
  args: {
    style: { border: '1px solid blue' },
    display: 'block',
    pt: 10,
    pl: 8,
    pr: 6,
    pb: 4,
    m: 12,
    align: 'right',
    width: '300px',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};
