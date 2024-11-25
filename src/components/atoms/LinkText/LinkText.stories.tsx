// === Import : NPM
import type { Meta, StoryObj } from '@storybook/react';

// === Import : Local
import { LinkText } from './LinkText';

const meta = {
  title: 'LinkText',
  component: LinkText,
  tags: ['autodocs'],
  parameters: { controls: { exclude: ['children', 'target', 'href'] } },
} satisfies Meta<typeof LinkText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link of RocketUI repo ;-)',
    href: 'https://github.com/ArianeSpa/RocketUI',
    target: '_blank',
    color: '#9C184F',
    fontSize: '16px',
    fontWeight: '800',
  },
};
