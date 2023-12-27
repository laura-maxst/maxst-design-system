import type { Meta, StoryObj } from '@storybook/react';
import { PositionModal } from '@components/positionModal';
import { PositionModalExample } from './PositionModalExample';

const meta: Meta<typeof PositionModal> = {
  title: 'Feedback/PositionModal',
  component: PositionModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '기본 Modal의 옵션에서 확장된 버전으로 위치를 지정할 수 있는 Modal입니다. \narrow, dim의 유무와 modla의 position을 지정할 수 있습니다. ',
      },
    },
  },
  argTypes: {
    smallButtonMode: {
      description: '4등분 size의 작은 버튼으로 사용 필요시 사용합니다.',
    },
    children: {
      description: `\`string\`으로 넘기면 자동으로 Text Component로 적용됩니다.그 외의 형태는 컴포넌트 형태로 넘길 수 있습니다.\n\`string\`, \`React.ReactNode\`
        `,
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
      description: `main버튼으로 type을 \`primary\`, \`secondary\`, \`error\`을 하나를 지정해줘야 합니다.`,
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
      description: 'open 상태값을 할당해줍니다.',
      control: {
        type: null,
      },
    },
    onClose: {
      description: 'open 상태값을 조절하는 함수를 할당해줍니다.',
    },
    position: {
      description:
        'modal의 위치를 top, left, right, bottom 중 원하는 key에 값을 담아줍니다. modal의 style로 적용됩니다.',
    },
    isCloseButton: {
      description: 'Modal의 close button의 유무를 설정할 수 있습니다.',
    },
    isDim: {
      description: 'Modal 뒤의 Dim 영역의 유무를 선택할 수 있습니다.',
    },
    arrowDirection: {
      description:
        '화살표를 총 9가지 위치로 제공합니다.\n왼쪽 상 중 하, 오른쪽 상 중 하, 상단 좌 중 우, 하단 좌 중 우',
    },
    size: {
      description: `Modal의 너비를 정해줍니다. \n
    xl= 1088px; l=720px; m=532px; s=348px;`,
    },
    id: {
      description: '필요에 따라 id를 지정할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PositionModal>;

export const PositionModalSecondaryButton: Story = {
  render: (args) => <PositionModalExample {...args} />,
  args: {
    id: 'position-modal',
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
