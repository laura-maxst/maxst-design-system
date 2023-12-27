import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioGroup, RadioPropsType } from '@components/radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'DataInputs/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'radio props를 참조하여 Object 배열로 지정합니다.',
      control: {
        type: null,
      },
    },
    onChange: {
      description: '`event.target`값을 return 받습니다.',
      control: {
        type: null,
      },
    },
    onClick: {
      description: '`event.target`값을 return 받습니다.',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const onChange = (e: any) => {
  console.log('target change', e);
};
const onClick = (e: any) => {
  console.log('target chick', e);
};

export const RadioGroupDefault: Story = {
  args: {
    id: 'radio-all',
    name: 'radio',
    size: 'l',
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

export const RadioGroupVertical: Story = {
  args: {
    id: 'radio-all',
    name: 'radio',
    size: 'l',
    label: 'radio group',
    direction: 'vertical',
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
      options={radioVerticalItemList}
      direction={args.direction}
    />
  ),
};

const radioVerticalItemList: RadioPropsType[] = [
  {
    id: 'radio_vertical_01',
    name: 'radio',
    label: 'label 01',
    size: 'l',
  },
  {
    id: 'radio_vertical_02',
    name: 'radio',
    label: 'label 02',
    size: 'l',
  },
  {
    id: 'radio_vertical_03',
    name: 'radio',
    label: 'label 03',
    size: 'l',
  },
  {
    id: 'radio_vertical_04',
    name: 'radio',
    label: 'label 04',
    size: 'l',
  },
];
