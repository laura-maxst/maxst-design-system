/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@components/badge';
import { Button } from '@components/button';
import {
  NotificationFillIcon,
  SettingFillIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof Badge> = {
  title: 'components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Ghost Button으로 지정하길 권장합니다.',
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
      description: 'icon type일때만 사용합니다. ex. 프로필 변경 등',
    },
    type: {
      description:
        '숫자가 들어가는 number tpye, icon이 들어가는 icon type, 점으로만 표시되는 dot type. 3가지를 지원합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const BadgeNumberType: Story = {
  render: (args) => <Badge {...args}>{args.children}</Badge>,
  args: {
    type: 'number',
    number: 12345,
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
  args: {
    type: 'dot',
    number: 12345,
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
