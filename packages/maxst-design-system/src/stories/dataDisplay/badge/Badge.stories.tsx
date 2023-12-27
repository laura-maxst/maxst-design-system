/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@components/badge';
import { Button } from '@components/button';
import {
  NotificationFillIcon,
  SettingFillIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof Badge> = {
  title: 'DataDisplay/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Badge는 새로운 업데이트 및 알림에 대한 정보를 제공하는 데 사용됩니다.\nBadge는 구조 및 쓰임새에 따라 3가지로 분류하며, 색상/상태별로 사용합니다.\n프로필 변경 등 icon type일시 click-mode로 onClick 이벤트를 부여할 수 있습니다.',
      },
    },
  },
  argTypes: {
    children: {
      description: `Ghost Button으로 지정하길 권장합니다.\n
    "string"
        `,
      control: {
        type: null,
      },
    },
    color: {
      description:
        'color와 status를 같이 지정할 수 없습니다. 같이 지정시 color가 우선순위가 되어 적용됩니다.',
    },
    status: {
      description:
        'color와 status를 같이 지정할 수 없습니다. 같이 지정시 color가 우선순위가 되어 적용됩니다.',
    },
    icon: {
      description: '',
      control: {
        type: null,
      },
    },
    onClick: {
      description:
        'icon type일때만 사용합니다. ex. 프로필 변경 등\nonClick을 지정 시 자동으로 click mode가 됩니다.',
    },
    number: {
      description:
        '기본적으로 `number` type으로 사용하고 `+`가 붙는 경우에 `string` type을 사용합니다.',
    },
    type: {
      description:
        '숫자가 들어가는 `number` tpye, icon이 들어가는 `icon` type, 점으로만 표시되는 `dot` type. 3가지를 지원합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const BadgeNumberType: Story = {
  render: (args) => <Badge {...args}>{args.children}</Badge>,
  parameters: {
    docs: {
      description: {
        story:
          'Ghost Button과 함께 사용하며 기본적으로 숫자가 커질수록 뱃지 너비는 늘어납니다. \n숫자 3자리 이상은 999+로 표시하길 권장합니다.',
      },
    },
  },
  args: {
    type: 'number',
    number: '999+',
    size: 'm',
    children: (
      <Button
        size="xl"
        type="ghost"
        iconOnly={<NotificationFillIcon />}
        isIconMode={true}
      />
    ),
  },
};

export const BadgeDotType: Story = {
  render: (args) => <Badge {...args}>{args.children}</Badge>,
  parameters: {
    docs: {
      description: {
        story:
          'Ghost Button과 함께 사용하며 보통 현재 상태에 대한 정보를 표시하기 위해 합니다.',
      },
    },
  },
  args: {
    type: 'dot',
    size: 'l',
    status: 'warning',
    children: (
      <Button
        size="xl"
        type="ghost"
        iconOnly={<NotificationFillIcon />}
        isIconMode={true}
      />
    ),
  },
};

export const BadgeIconType: Story = {
  render: (args) => <Badge {...args}>{args.children}</Badge>,
  parameters: {
    docs: {
      description: {
        story:
          '프로필 변경 등에서 사용하며 icon mode일시 click mode 사용가능하여 onClick 이벤트를 줄 수 있습니다. \nicon mode에서 onClick을 지정 시 자동으로 click mode가 됩니다.',
      },
    },
  },
  args: {
    type: 'icon',
    size: 'l',
    icon: <SettingFillIcon />,
    color: 'gray',
    align: 'bottom-right',
    onClick: () => console.log('click-mode'),
    children: (
      <img
        src="./images/img_badge_icon_type_sample.png"
        alt="badge icon type sample"
      />
    ),
  },
};
