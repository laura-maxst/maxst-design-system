import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CheckboxGroup, CheckboxPropsType } from '@components/checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: null,
      },
    },
    type: {
      control: {
        type: null,
      },
    },
    options: {
      description: 'checkbox props를 참조하여 Object 배열로 전달',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const onChangeAll = (e: any) => {
  // console.log('target', e);
};
const onClickAll = (e: any) => {
  // console.log('target + values', e);
};

export const CheckboxGroupDefault: Story = {
  args: {
    id: 'checkbox-all',
    type: 'selected',
    size: 'l',
    disabled: false,
    label: '전체선택',
    controlMode: true,
  },
  render: (args) => (
    <CheckboxGroup
      {...args}
      id={args.id}
      type={args.type}
      label={args.label}
      size={args.size}
      state={args.state}
      disabled={args.disabled}
      checked={args.checked}
      controlMode={args.controlMode}
      onChange={(e) => onChangeAll(e)}
      onClick={(e) => onClickAll(e)}
      options={checkboxItemList}
      direction={args.direction}
    />
  ),
};

// data
const checkboxItemList: CheckboxPropsType[] = [
  {
    id: 'checkbox_01',
    label: 'label 01',
    checked: true,
    size: 'l',
  },
  {
    id: 'checkbox_02',
    label: 'label 02',
    checked: false,
    size: 'l',
  },
  {
    id: 'checkbox_03',
    label: 'label 03',
    checked: true,
    size: 'l',
  },
  {
    id: 'checkbox_04',
    label: 'label 04',
    checked: false,
    size: 'l',
  },
];
