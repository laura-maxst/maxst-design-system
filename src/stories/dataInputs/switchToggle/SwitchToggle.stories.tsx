import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@components/switchToggle';
import {
  NotificationOffLineIcon,
  NotificationFillIcon,
} from '@maxst-designsystem/icons';

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
      description:
        '`event 객체`와 check 여부(`value : boolean`)를 담은 배열을 return 받습니다.',
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
    checkOffIcon: {
      description: 'click 전의 icon을 설정할 수 있습니다.',
      control: {
        type: null,
      },
    },
    checkOnIcon: {
      description: 'click 후의 icon을 설정할 수 있습니다.',
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
    id: 'switch-default',
    onClick: onClickSwitch,
    iconMode: false,
    checked: true,
  },
};

export const SwitchIconCustom: Story = {
  args: {
    id: 'switch-icon-mode',
    onClick: onClickSwitch,
    iconMode: true,
    checked: false,
    checkOffIcon: <NotificationOffLineIcon />,
    checkOnIcon: <NotificationFillIcon />,
  },
};
