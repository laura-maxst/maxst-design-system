import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@components/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>;

export const CheckboxDefault: Story = {
  args: {
    id: 'checkbox-1',
    type: 'selected',
    size: 'l',
    checked: true,
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
  },
};
