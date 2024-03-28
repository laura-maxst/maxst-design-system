import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@components/chip';
import { UserLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Chip> = {
  title: 'DataDisplay/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Chip은 항목을 설명하는 키워드로 사용하거나, 라벨을 붙여 분류하거나 정리하는 용도로 사용합니다.',
      },
    },
  },
  argTypes: {
    children: {
      description: `
    "string"
      `,
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
    id: {
      description: 'check mode와 filter mode일 시 사용합니다.',
    },
    onClick: {
      description:
        'check mode와 filter mode일 시 사용합니다.\ncheck mode에서는 `event 객체`, `checked` 여부를 반환합니다. \nfilter mode에서는 `event 객체`를 반환합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

const onClick = (id: string, checked?: boolean) => {
  console.log('chip click', 'id : ', id, 'checked : ', checked);
};

const onClickFilter = (id: string) => {
  console.log('chip click', 'id : ', id);
};

export const ChipDefault: Story = {
  render: (args) => <Chip {...args}>{args.children}</Chip>,
  parameters: {
    docs: {
      description: {
        story:
          '기본형으로 항목을 설명하거나, 분류하는 용도로 사용합니다. \n기본적으로 클릭이 가능하지 않습니다.',
      },
    },
  },
  args: {
    type: 'default',
    size: 'l',
    children: 'Chip',
  },
};

export const ChipFilter: Story = {
  render: (args) => <Chip {...args}>{args.children}</Chip>,
  parameters: {
    docs: {
      description: {
        story:
          '필터형으로 콘텐츠를 필터링하는 목적으로 사용됩니다. \n클릭이 가능하며, 추가 및 삭제도 가능합니다.\nonClick시 id를 return합니다.',
      },
    },
  },
  args: {
    id: 'chip-filter',
    type: 'color-blue',
    size: 'l',
    children: 'Chip',
    onClick: onClickFilter,
    action: 'filter',
  },
};

export const ChipCheck: Story = {
  render: (args) => <Chip {...args}>{args.children}</Chip>,
  parameters: {
    docs: {
      description: {
        story:
          '선택형으로 콘텐츠와 관련된 옵션 중 하나를 선택하는 목적으로 사용합니다. \nTab의 하위위계로 활용할 수 있습니다.\nonClick시 id와 checked 여부를 return합니다.',
      },
    },
  },
  args: {
    id: 'chip-check',
    type: 'tertiary',
    size: 'l',
    children: 'Chip Icon',
    onClick: onClick,
    action: 'check',
  },
};

export const ChipWidthIcon: Story = {
  render: (args) => <Chip {...args}>{args.children}</Chip>,
  parameters: {
    docs: {
      description: {
        story: 'chip에 icon을 함께 쓸 수 있습니다.',
      },
    },
  },
  args: {
    type: 'default',
    size: 'l',
    children: 'Chip Icon',
    onClick: onClick,
    iconLeft: <UserLineIcon />,
  },
};

export const ChipWidthImage: Story = {
  render: (args) => <Chip {...args}>{args.children}</Chip>,
  parameters: {
    docs: {
      description: {
        story:
          'chip에 image를 함께 쓸 수 있습니다.\n이때 원형의 image를 사용합니다.',
      },
    },
  },
  args: {
    type: 'color-magenta',
    size: 'l',
    children: 'Chip Icon',
    onClick: onClick,
    // eslint-disable-next-line @next/next/no-img-element
    iconLeft: <img src="./images/img_chip_profile_sample.png" alt="" />,
  },
};
