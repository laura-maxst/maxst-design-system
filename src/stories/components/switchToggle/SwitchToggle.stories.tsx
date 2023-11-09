import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@components/switchToggle';

const meta: Meta<typeof Switch> = {
  title: 'components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      description: 'value를 boolean type으로 반환',
      control: {
        type: null,
      },
    },
    checked: {
      description: '초기 check 설정 시 사용',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const onClickSwitch = (value: boolean) => {
  console.log(value);
};

export const SwitchDefault: Story = {
  args: {
    id: 'switch',
    onClick: onClickSwitch,
    iconMode: false,
    checked: true,
  },
};
