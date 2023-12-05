import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '@components/menu';
import {
  CheckLineIcon,
  ArrowRightLineIcon,
  ArrowForwardCircleLineIcon,
  MobileLineIcon,
  MobileFillIcon,
  MapLineIcon,
  DesktopLineIcon,
  DesktopFillIcon,
  FolderLineIcon,
  LocationFillIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof Menu> = {
  title: 'components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '메뉴는 화면에 선택 항목 목록을 표시합니다. 사용자가 버튼이나 다른 컨트롤과 상호 작용할 때 나타납니다.',
      },
    },
  },
  argTypes: {
    itemData: {
      description: '',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const menuData = [
  {
    id: 'menu-0',
    label: 'menu 0',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'menu-1',
    label: 'menu 1',
    iconLeft: <DesktopLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    subItemData: [
      {
        id: 'menu-1-1',
        label: 'menu 1-1',
        iconLeft: <DesktopFillIcon />,
        iconRight: <LocationFillIcon />,
        subItemData: [
          {
            id: 'menu-1-1-1',
            label: 'menu 1-1-1',
            iconLeft: <DesktopLineIcon />,
            iconRight: <LocationFillIcon />,
          },
          {
            id: 'menu-1-1-2',
            label: 'menu 1-1-2',
            iconLeft: <DesktopLineIcon />,
            iconRight: <LocationFillIcon />,
          },
        ],
      },
      {
        id: 'menu-1-2',
        label: 'menu 1-2',
        iconLeft: <DesktopFillIcon />,
        // iconRight: <LocationFillIcon />,
      },
    ],
  },
  {
    id: 'menu-2',
    label: 'menu 2',
    iconLeft: <MobileLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subItemData: [
      {
        id: 'menu-2-1',
        label: 'menu 2-1',
        iconLeft: <MobileFillIcon />,
        iconRight: <LocationFillIcon />,
      },
      {
        id: 'menu-2-2',
        label: 'menu 2-2',
        iconLeft: <MobileFillIcon />,
        iconRight: <LocationFillIcon />,
      },
    ],
  },
  {
    id: 'menu-3',
    label: 'menu 3',
    iconLeft: <MapLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'menu-4',
    label: 'menu 4',
    iconLeft: <FolderLineIcon />,
    iconRight: <ArrowForwardCircleLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'menu-5',
    label: 'menu 5',
    iconRight: <ArrowForwardCircleLineIcon />,
    disabled: true,
  },
  {
    id: 'menu-6',
    label: 'menu 6',
    iconRight: <ArrowForwardCircleLineIcon />,
  },
  {
    id: 'menu-7',
    label: 'menu 7',
    iconRight: <ArrowRightLineIcon />,
  },
];

const onClickMenu = (data: any) => {
  console.log('click menu data', data);
};

const onChangeMenu = (data: any) => {
  // console.log('change data', data);
};

export const MenuDefault: Story = {
  render: (args) => <Menu {...args} />,
  args: {
    id: 'menu-docs',
    itemData: menuData,
    onChange: onChangeMenu,
    onClick: onClickMenu,
  },
};
