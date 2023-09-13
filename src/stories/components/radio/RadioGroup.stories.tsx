import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioGroup, RadioPropsType } from '@components/radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'radio props를 참조하여 Object 배열로 전달',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const onChange = (e: any) => {
  console.log('target', e);
};
const onClick = (e: any) => {
  console.log('target + values', e);
};

export const RadioGroupDefault: Story = {
  args: {
    id: 'radio-all',
    name: 'radio',
    size: 'l',
    disabled: false,
    label: 'radio group',
  },
  render: (args) => (
    <RadioGroup
      {...args}
      id={args.id}
      label={args.label}
      size={args.size}
      state={args.state}
      disabled={args.disabled}
      onChange={(e) => onChange(e)}
      onClick={(e) => onClick(e)}
      options={radioItemList}
      direction={args.direction}
    />
  ),
};

// data
const radioItemList: RadioPropsType[] = [
  {
    id: 'radio_01',
    name: 'radio',
    label: 'label 01',
    size: 'l',
  },
  {
    id: 'radio_02',
    name: 'radio',
    label: 'label 02',
    size: 'l',
  },
  {
    id: 'radio_03',
    name: 'radio',
    label: 'label 03',
    size: 'l',
  },
  {
    id: 'radio_04',
    name: 'radio',
    label: 'label 04',
    size: 'l',
  },
];
