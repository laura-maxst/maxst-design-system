import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@components/switchToggle';

const meta: Meta<typeof Switch> = {
  title: 'DataInputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Switch Button은 선택지에서 단 하나만 선택해야할 때, 사용합니다.',
      },
    },
  },
  argTypes: {
    onClick: {
      description: 'check 여부(`value`)를 `boolean` type으로 return 받습니다.',
      control: {
        type: null,
      },
    },
    checked: {
      description: '초기 선택값을 설정할 수 있습니다.',
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
