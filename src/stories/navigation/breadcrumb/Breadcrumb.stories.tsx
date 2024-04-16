import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@components/breadcrumb';
import { UserLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '사용자에게 이동 경로를 시각적으로 보여주고, 이전 단계로 빠르게 이동할 수 있도록 해줍니다.',
      },
    },
  },
  argTypes: {
    menuData: {
      description: `menu item별로 \`onMovePage()\` props로 링크 이동 이벤트를 구현할 수 있습니다. \nsub menu 설정시 dropdown으로 sub menu가 구현되며 \`onMoveSubPage()\`로 이벤트를 연결할 수 있습니다.\n
        {
          id: string;
          label: string;
          icon?: React.ReactNode;
          disabled?: boolean;
          onMovePage?: () => void;
          onMoveSubPage?: (targetData: object) => void;
          subMenu?: {
            id: string;
            label: string;
            icon?: React.ReactNode;
            disabled?: boolean;
          }[]
        `,
    },
    moreButton: {
      description: 'menu가 길어 줄임이 필요할 때 설정합니다.',
    },
    thisPage: {
      description:
        '현재 위치한 page를 표시합니다. 중간 메뉴 지정시 이후의 메뉴는 표출 되지 않습니다.',
    },
    homeButton: {
      description:
        '메인 Home으로 돌아가는 button을 이벤트와 함께 설정할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const BreadcrumbDefault: Story = {
  render: (args) => (
    <div className="breadcrumb-box">
      <Breadcrumb {...args}></Breadcrumb>
    </div>
  ),
  args: {
    thisPage: 'breadcrumb-04',
    menuData: [
      {
        id: 'breadcrumb-01',
        label: 'breadcrumb-01',
        onMovePage: () => console.log('/breadcrumb-01'),
        onMoveSubPage: (data) => console.log(data),
      },
      {
        id: 'breadcrumb-02',
        label: 'breadcrumb-02',
        icon: <UserLineIcon />,
        onMovePage: () => console.log('/breadcrumb-02'),
      },
      {
        id: 'breadcrumb-03',
        label: 'breadcrumb-03',
        disabled: true,
        onMovePage: () => console.log('/breadcrumb-03'),
      },
      {
        id: 'breadcrumb-04',
        label: 'breadcrumb-04',
      },
    ],
  },
};

export const BreadcrumbMoreButtom: Story = {
  render: (args) => (
    <div className="breadcrumb-box">
      <Breadcrumb {...args}></Breadcrumb>
    </div>
  ),
  args: {
    moreButton: true,
    thisPage: 'breadcrumb-04',
    menuData: [
      {
        id: 'breadcrumb-01',
        label: 'breadcrumb-01',
        onMovePage: () => console.log('/breadcrumb-01'),
        onMoveSubPage: (data) => console.log(data),
      },
      {
        id: 'breadcrumb-02',
        label: 'breadcrumb-02',
        icon: <UserLineIcon />,
        onMovePage: () => console.log('/breadcrumb-02'),
      },
      {
        id: 'breadcrumb-03',
        label: 'breadcrumb-03',
        disabled: true,
        onMovePage: () => console.log('/breadcrumb-03'),
      },
      {
        id: 'breadcrumb-04',
        label: 'breadcrumb-04',
      },
    ],
  },
};

export const BreadcrumbDropdown: Story = {
  render: (args) => (
    <div className="breadcrumb-box">
      <Breadcrumb {...args}></Breadcrumb>
    </div>
  ),
  args: {
    thisPage: 'breadcrumb-04',
    menuData: [
      {
        id: 'breadcrumb-01',
        label: 'breadcrumb-01',
        onMovePage: () => console.log('/breadcrumb-01'),
        onMoveSubPage: (data) => console.log(data),
        subMenu: [
          {
            id: 'breadcrumb-01-01',
            label: 'breadcrumb-01-01',
          },
          {
            id: 'breadcrumb-01-02',
            label: 'breadcrumb-01-02',
          },
        ],
      },
      {
        id: 'breadcrumb-02',
        label: 'breadcrumb-02',
        icon: <UserLineIcon />,
        onMovePage: () => console.log('/breadcrumb-02'),
      },
      {
        id: 'breadcrumb-03',
        label: 'breadcrumb-03',
        disabled: true,
        onMovePage: () => console.log('/breadcrumb-03'),
      },
      {
        id: 'breadcrumb-04',
        label: 'breadcrumb-04',
      },
    ],
  },
};

export const BreadcrumbWithHome: Story = {
  render: (args) => (
    <div className="breadcrumb-box">
      <Breadcrumb {...args}></Breadcrumb>
    </div>
  ),
  args: {
    homeButton: {
      id: 'breadcrumb-home-icon',
    },
    thisPage: 'breadcrumb-04',
    menuData: [
      {
        id: 'breadcrumb-01',
        label: 'breadcrumb-01',
        onMovePage: () => console.log('/breadcrumb-01'),
        onMoveSubPage: (data) => console.log(data),
      },
      {
        id: 'breadcrumb-02',
        label: 'breadcrumb-02',
        icon: <UserLineIcon />,
        onMovePage: () => console.log('/breadcrumb-02'),
      },
      {
        id: 'breadcrumb-03',
        label: 'breadcrumb-03',
        disabled: true,
        onMovePage: () => console.log('/breadcrumb-03'),
      },
      {
        id: 'breadcrumb-04',
        label: 'breadcrumb-04',
      },
    ],
  },
};
