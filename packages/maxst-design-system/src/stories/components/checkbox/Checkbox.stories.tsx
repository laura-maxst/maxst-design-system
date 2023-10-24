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
    mode: {
      description:
        'color mode를 선택할 수 있습니다. 기본적으로 primary로 적용됩니다.',
    },
    type: {
      description:
        '단독으로 쓰일때는 selected로 사용됩니다. indeterminate는 CheckboxGroup에서 사용됩니다.',
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

export const CheckboxDefaultPrimary: Story = {
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

export const CheckboxSecondary: Story = {
  args: {
    id: 'checkbox-1',
    type: 'selected',
    mode: 'secondary',
    size: 'l',
    checked: true,
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
  },
};

export const CheckboxError: Story = {
  args: {
    id: 'checkbox-1',
    type: 'selected',
    mode: 'secondary',
    size: 'l',
    state: 'error',
    checked: true,
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
  },
};

export const CheckboxDisabled: Story = {
  args: {
    id: 'checkbox-1',
    type: 'selected',
    mode: 'secondary',
    size: 'l',
    state: 'disabled',
    checked: true,
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
  },
};
