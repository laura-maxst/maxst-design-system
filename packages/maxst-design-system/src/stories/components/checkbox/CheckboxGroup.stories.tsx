import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CheckboxGroup, CheckboxPropsType } from '@components/checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '상하위 관계가 필요할 때, 중첩으로 사용할 수 있으며. 사용자는 전체 선택으로 하위 그룹을 선택하거나, 하위 그룹만 별도로 선택할 수 있습니다. \nIndeterminate(불확정 상태)는 상하위 그룹으로 사용될 경우 일부는 선택되고 일부는 선택되지 않은 하위 목록이 포함된 경우를 나타냅니다.',
      },
    },
  },
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
