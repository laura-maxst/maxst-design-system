import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '@components/drawers';
import DrawerExample from './DrawerExample';
import DrawerSidebarExample from './DrawerSidebarExample';
import {
  ArrowLeftLineIcon,
  MapLineIcon,
  ThreeDMapLineIcon,
  ViewInArLineIcon,
  ThreeDMapFillIcon,
  MyLocationLineIcon,
  SelectAreaLineIcon,
} from '@maxst-designsystem/icons';
import { Sidebar } from '@components/sidebar';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '주로 모바일에서 Sidebar와 함께 쓰입니다. \n펼쳐지는 방향을 지정할 수 있습니다.',
      },
    },
  },
  argTypes: {
    header: {
      description:
        'drawer의 header를 component 형태로 지정할 수 있습니다. close button과 동시에 존재시 왼쪽 여백이 자동으로 부여됩니다.',
      control: {
        type: null,
      },
    },
    children: {
      description: 'drawer의 body를 component 형태로 지정할 수 있습니다. ',
      control: {
        type: null,
      },
    },
    footer: {
      description:
        'drawer의 footer를 component 형태로 지정할 수 있습니다. header와 body이외의 모든 영역을 차지합니다.',
      control: {
        type: null,
      },
    },
    width: {
      description:
        'drawer의 `width`값 지정이 필요할 때 `px` 혹은 `%`를 `string`으로 지정해줍니다.',
    },
    isCloseButton: {
      description:
        'close button의 유무를 지정할 수 있습니다. 기본적으로 `true`로 제공됩니다. ',
    },
    position: {
      description:
        'drawer가 펼쳐지는 위치를 지정합니다. 기본적으로 left를 제공합니다.',
    },
    closeButtonIcon: {
      description: 'Drawer의 close button icon의 모양을 custom 할 수 있습니다.',
      control: {
        type: null,
      },
    },
    isDim: {
      description:
        'dim없이 drawer를 open 시켜 놓는 경우(ex. sidebar) 등에 `boolean`값으로 지정해줍니다.',
    },
    open: {
      description: 'open 상태값을 할당해줍니다.',
      control: {
        type: null,
      },
    },
    onClose: {
      description: 'open 상태값을 조절하는 함수를 할당해줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const onCloseDrawer = () => {
  console.log('onCloseDrawer');
};

export const DrawerDefault: Story = {
  render: (args) => <DrawerExample {...args} />,
  args: {
    children: 'Drawer',
    open: false,
    onClose: onCloseDrawer,
    header: <div style={{ lineHeight: '56px' }}>header</div>,
    footer: 'footer',
    isCloseButton: true,
  },
};

export const DrawerCloseButtonIconCustom: Story = {
  render: (args) => <DrawerExample {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'closeButtonIcon 옵션으로 Drawer의 close button을 custom 할 수 있습니다.',
      },
    },
  },
  args: {
    children: 'Drawer',
    open: false,
    onClose: onCloseDrawer,
    header: <div style={{ lineHeight: '56px' }}> </div>,
    footer: 'footer',
    isCloseButton: true,
    closeButtonIcon: <ArrowLeftLineIcon />,
  },
};

export const DrawerSidebar: Story = {
  render: (args) => <DrawerSidebarExample {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Sidebar와 함께 모바일에서 주로 쓰길 권장합니다.',
      },
    },
  },
  args: {
    children: (
      <Sidebar
        footer="footer"
        id="sidebar"
        itemData={[
          {
            iconLeft: <MapLineIcon />,
            id: 'depth-01default',
            label: 'depth-01default',
            subItemData: [
              {
                id: 'depth-01-01default',
                label: 'depth-01-01default',
              },
              {
                id: 'depth-01-02default',
                label: 'depth-01-02default',
              },
            ],
          },
          {
            iconLeft: <ThreeDMapLineIcon />,
            id: 'depth-02default',
            label: 'depth-02default',
            subItemData: [
              {
                id: 'depth-02-01default',
                label: 'depth 02-01default',
                subItemData: [
                  {
                    id: 'depth-02-01-01default',
                    label: 'depth 02-01-01default',
                  },
                  {
                    id: 'depth-02-01-02default',
                    label: 'depth 02-01-02default',
                  },
                ],
              },
              {
                id: 'depth-02-02default',
                label: 'depth 02-02default',
              },
            ],
          },
          {
            iconLeft: <ThreeDMapFillIcon />,
            id: 'depth-03default',
            label: 'depth-03default',
          },
          {
            iconLeft: <ViewInArLineIcon />,
            id: 'depth-04default',
            label: 'depth-04default',
          },
          {
            iconLeft: <MyLocationLineIcon />,
            id: 'depth-05default',
            label: 'depth-05default',
          },
          {
            iconLeft: <SelectAreaLineIcon />,
            id: 'depth-06default',
            label: 'depth-06default',
          },
        ]}
      />
    ),
    open: false,
    onClose: onCloseDrawer,
    header: <div style={{ lineHeight: '56px' }}> </div>,
    isCloseButton: true,
  },
};
