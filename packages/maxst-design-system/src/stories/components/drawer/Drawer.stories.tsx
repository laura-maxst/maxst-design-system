import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '@components/drawers';
import DrawerExample from './DrawerExample';
import { ArrowLeftLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Drawer> = {
  title: 'components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
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
        'drawer의 width값 지정이 필요할 때 px 혹은 %를 string으로 지정해줍니다.',
    },
    isCloseButton: {
      description:
        'close button의 유무를 지정할 수 있습니다. 기본적으로 true로 제공됩니다. ',
    },
    position: {
      description:
        'drawer가 펼쳐지는 위치를 지정합니다. 기본적으로 left를 제공합니다.',
    },
    closeButtonIcon: {
      control: {
        type: null,
      },
    },
    isDim: {
      description:
        'dim없이 drawer를 open 시켜 놓는 경우(ex. sidebar) 등에 boolean값으로 지정해줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const onCloseDrawer = () => {
  console.log('onCloseDrawer');
};

export const DrawerDefault: Story = {
  // render: (args) => <Drawer {...args}>{args.children}</Drawer>,
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
  // render: (args) => <Drawer {...args}>{args.children}</Drawer>,
  render: (args) => <DrawerExample {...args} />,
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
