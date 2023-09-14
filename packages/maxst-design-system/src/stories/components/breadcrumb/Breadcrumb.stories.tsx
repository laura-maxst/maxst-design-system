import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@components/breadcrumb';
import { UserLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Breadcrumb> = {
  title: 'components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    menuData: {
      description:
        'menu item 별로 onMovePage props로 링크 이동 이벤트 구현하도록 지원, sub menu 존재시 onMoveSubPage로 dropdown 선택값을 받아오는 이벤트 연결',
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
