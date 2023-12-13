/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@components/sidebar';
import {
  MapLineIcon,
  ThreeDMapLineIcon,
  ViewInArLineIcon,
  ThreeDMapFillIcon,
  MyLocationLineIcon,
  SelectAreaLineIcon,
} from '@maxst-designsystem/icons';
import { Container } from '@components/container';
import SidebarExample from './SidebarExample';

const meta: Meta<typeof Sidebar> = {
  title: 'components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    header: {
      description:
        'sidebar의 header영역으로 tablet, mobile에서 X버튼 등이 들어갈 수 있다.',
      control: {
        type: null,
      },
    },
    footer: {
      description:
        'sidebar의 footer영역으로 tablet, mobile에서 다국어 선택 등이 들어갈 수 있다.',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const onClickSidebarMenu = (data: any) => {
  console.log('menu data', data);
};

const sidebarMenuDataSetting = (id: string) => {
  return [
    {
      id: 'depth-01' + id,
      label: 'depth-01' + id,
      iconLeft: <MapLineIcon />,
      subItemData: [
        {
          id: 'depth-01-01' + id,
          label: 'depth-01-01' + id,
        },
        {
          id: 'depth-01-02' + id,
          label: 'depth-01-02' + id,
        },
      ],
    },
    {
      id: 'depth-02' + id,
      label: 'depth-02' + id,
      iconLeft: <ThreeDMapLineIcon />,
      subItemData: [
        {
          id: 'depth-02-01' + id,
          label: 'depth 02-01' + id,
          subItemData: [
            {
              id: 'depth-02-01-01' + id,
              label: 'depth 02-01-01' + id,
            },
            {
              id: 'depth-02-01-02' + id,
              label: 'depth 02-01-02' + id,
            },
          ],
        },
        {
          id: 'depth-02-02' + id,
          label: 'depth 02-02' + id,
        },
      ],
    },
    {
      id: 'depth-03' + id,
      label: 'depth-03' + id,
      iconLeft: <ThreeDMapFillIcon />,
    },
    {
      id: 'depth-04' + id,
      label: 'depth-04' + id,
      iconLeft: <ViewInArLineIcon />,
    },
    {
      id: 'depth-05' + id,
      label: 'depth-05' + id,
      iconLeft: <MyLocationLineIcon />,
    },
    {
      id: 'depth-06' + id,
      label: 'depth-06' + id,
      iconLeft: <SelectAreaLineIcon />,
    },
  ];
};

export const SidebarDefault: Story = {
  render: (args) => <Sidebar {...args} />,
  args: {
    header: 'header',
    footer: 'footer',
    id: 'sidebar',
    itemData: sidebarMenuDataSetting('default'),
    onClick: (data) => onClickSidebarMenu(data),
  },
};

export const SidebarPcVersion: Story = {
  render: (args) => (
    <Container>
      <div style={{ display: 'flex', gap: 10 }}>
        <Sidebar {...args} />
        <div>
          {'pc에서 sidebar를 사용할 경우에는 <Container>로 감싸서 사용합니다.'}
        </div>
      </div>
    </Container>
  ),
  args: {
    id: 'sidebar',
    itemData: sidebarMenuDataSetting('-pc'),
  },
};

export const SidebarMobileVersion: Story = {
  render: (args) => <SidebarExample {...args} />,
  args: {
    id: 'sidebar',
    header: ' ',
    footer: 'mobile, tablet에서는 Button과 Drawer를 활용하여 사용합니다. ',
    itemData: sidebarMenuDataSetting('-mobile'),
  },
};
