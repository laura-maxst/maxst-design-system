import type { Meta, StoryObj } from '@storybook/react';
import { PositionModal } from '@components/positionModal';
import { PositionModalExample } from './PositionModalExample';

const meta: Meta<typeof PositionModal> = {
  title: 'components/PositionModal',
  component: PositionModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '기본 Modal의 옵션에서 확장된 버전입니다. arrow, dim의 유무와 modla의 position을 지정할 수 있습니다. ',
      },
    },
  },
  argTypes: {
    smallButtonMode: {
      description: '4등분 size의 작은 버튼으로 사용 필요시 사용합니다.',
    },
    children: {
      description:
        'string으로 넘기면 자동으로 Text Component로 적용됩니다.그 외의 형태는 컴포넌트 형태로 넘길 수 있습니다. ',
    },
    titleIcon: {
      description: 'modal header영역에서 title 상단에 위치하는 icon',
      control: {
        type: null,
      },
    },
    titleImage: {
      description: 'modal header영역에서 title 상단에 위치하는 image',
      control: {
        type: null,
      },
    },
    mainButton: {
      description: `main버튼으로 type을 'primary','secondary', 'error'을 하나를 지정해줘야 합니다.`,
      control: {
        type: null,
      },
    },
    subButton: {
      description: 'main button보다 낮은 위계로 tertiary button이 적용됩니다.',
      control: {
        type: null,
      },
    },
    subtlestButton: {
      description: 'sub button보다 낮은 위계로 ghost button이 적용됩니다.',
      control: {
        type: null,
      },
    },
    open: {
      control: {
        type: null,
      },
    },
    position: {
      description:
        'modal의 위치를 top, left, right, bottom 중 원하는 key에 값을 담아줍니다. modal의 style로 적용됩니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PositionModal>;

export const PositionModalSecondaryButton: Story = {
  render: (args) => <PositionModalExample {...args} />,
  args: {
    children: 'Modal',
    title: 'Title',
    size: 's',
    smallButtonMode: true,
    mainButton: {
      type: 'secondary',
      text: 'main button',
      onClick: () => console.log('main'),
    },
    subButton: {
      text: 'sub button',
      onClick: () => console.log('sub'),
    },
    isCloseButton: true,
    isArrow: true,
    arrowDirection: 'left',
    position: { top: '29%', left: '31%' },
  },
  // parameters: {
  //   docs: {
  //     source: {
  //       code: `
  //       `,
  //     },
  //   },
  // },
};
