// === Import : NPM
import type { Meta, StoryObj } from '@storybook/react';

// === Import : Local
import { Flex } from './Flex';

const meta = {
  title: 'Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    alignItems: {
      control: 'radio',
      options: ['start', 'center', 'end', 'stretch'],
    },
    flexDirection: {
      control: 'radio',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justifyContent: {
      control: 'radio',
      options: [
        'start',
        'center',
        'end',
        'space-between',
        'space-evenly',
        'space-around',
      ],
    },
    flexWrap: {
      control: 'radio',
      options: ['no-wrap', 'wrap', 'wrap-reverse'],
    },
  },
  parameters: { controls: { exclude: ['children', 'p', 'height'] } },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alignItems: 'start',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'no-wrap',
    gap: 6,
    height: '300px',
    p: 1,
    children: (
      <>
        <Flex>Content 1</Flex>
        <Flex>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Flex>
        <Flex>Content 3</Flex>
      </>
    ),
  },
};
