import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@components/chip';
import { UserLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'string',
    },
    iconCheck: {
      description: 'check형태일때 check icon을 custom 할 수 있습니다. ',
      control: {
        type: null,
      },
    },
    iconLeft: {
      description: '왼쪽에 원하는 icon 혹은 image를 적용할 수 있습니다. ',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

const onChange = (checked: boolean) => {
  console.log('chip click', checked);
};
const onClick = (checked: boolean) => {
  console.log('chip click', checked);
};

export const ChipDefault: Story = {
  render: (args) => <Chip {...args}>{args.children}</Chip>,
  args: {
    type: 'default',
    size: 'l',
    children: 'Chip',
    onChange: onChange,
    onClick: onClick,
  },
};

export const ChipWidthIcon: Story = {
  render: (args) => <Chip {...args}>{args.children}</Chip>,
  args: {
    type: 'tertiary',
    size: 'l',
    children: 'Chip Icon',
    onChange: onChange,
    onClick: onClick,
    iconLeft: <UserLineIcon />,
  },
};

export const ChipWidthImage: Story = {
  render: (args) => <Chip {...args}>{args.children}</Chip>,
  args: {
    type: 'color-magenta',
    size: 'l',
    children: 'Chip Icon',
    onChange: onChange,
    onClick: onClick,
    // eslint-disable-next-line @next/next/no-img-element
    iconLeft: <img src="./images/img_chip_profile_sample.png" alt="" />,
  },
};
