import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@components/radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: null,
      },
    },
    onChange: {
      description: 'event.target값 return',
      control: {
        type: null,
      },
    },
    onClick: {
      description: 'event.target값 return',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioDefault: Story = {
  args: {
    id: 'radio-1',
    name: 'radio',
    size: 'l',
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
  },
};
