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
  title: 'Navigation/Menu',
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
      description: `\n
      {\n
        id: string;\n
        label: string;\n
        iconLeft?: JSX.Element | React.ReactNode;\n
        iconRight?: JSX.Element | React.ReactNode;\n
        disabled?: boolean;\n
        subLabel?: string;\n
        size?: 'l' | 's';\n
        subItemData?: MenuItemProps[];\n
      };
            `,
      control: {
        type: null,
      },
    },
    multiple: {
      description: '다중 선택 유무를 설정합니다.',
    },
    selectMenu: {
      description: '초기 선택된 메뉴를 지정할 수 있습니다.',
    },
    hasMaxHeight: {
      description:
        '`max-height:216px` 설정 유무를 선택할 수 있습니다. default는 `true`로 설정됩니다.',
    },
    onChange: {
      description: '다중 선택 유무를 설정합니다.',
    },
    onClick: {
      description: '다중 선택 유무를 설정합니다.',
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
        disabled: true,
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
    subItemData: [
      {
        id: 'menu-3-1',
        label: 'menu 3-1',
        iconLeft: <MobileFillIcon />,
        iconRight: <LocationFillIcon />,
      },
      {
        id: 'menu-3-2',
        label: 'menu 3-2',
        iconLeft: <MobileFillIcon />,
        iconRight: <LocationFillIcon />,
      },
    ],
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
  // console.log('click menu data', data);
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
    selectMenu: 'menu-1',
  },
};

export const MenuMultiple: Story = {
  render: (args) => <Menu {...args} />,
  args: {
    id: 'menu-multiple-docs',
    itemData: menuData,
    onChange: onChangeMenu,
    onClick: onClickMenu,
    multiple: true,
    selectMenu: [
      { id: 'menu-1-1-1', label: 'menu 1-1-1' },
      { id: 'menu-0', label: 'menu 0' },
      // { id: 'menu-2-2', label: 'menu 2-2' },
    ],
  },
};
