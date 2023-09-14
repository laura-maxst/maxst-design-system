/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@components/textField';
import { UserFillIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: null,
      },
    },
    resetButton: {
      description: 'textarea에서는 icon이 적용되지 않는다.',
    },
    iconLeft: {
      description: 'textarea에서는 icon이 적용되지 않는다.',
    },
    iconRight: {
      description: 'textarea에서는 icon이 적용되지 않는다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const InputDefault: Story = {
  args: {
    id: 'default-textfield',
    placeholder: 'placeholder',
    value: 'text는 blabla',
    label: 'label text',
    required: true,
    helperText: '2~10자리 입력가능합니다.',
    minLength: 2,
    maxLength: 10,
  },
};

export const InputWithIcon: Story = {
  args: {
    id: 'default-textfield',
    placeholder: 'placeholder',
    value: 'text는 blabla',
    label: 'label text',
    required: true,
    helperText: '2~10자리 입력가능합니다.',
    minLength: 2,
    maxLength: 10,
    iconLeft: <UserFillIcon />,
  },
};

export const Textarea: Story = {
  args: {
    id: 'default-textarea',
    placeholder: 'placeholder',
    value: 'text는 blabla',
    label: 'label text',
    required: true,
    helperText: '2~300자리 입력가능합니다.',
    minLength: 2,
    maxLength: 300,
    multiLine: true,
  },
};
