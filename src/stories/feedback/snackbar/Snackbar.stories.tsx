/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from '@components/snackbar';
import SnackbarExample from './SnackbarExample';
import { CheckCircleLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Snackbar> = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    contents: {
      description:
        'Snackbar의 내용을 자세하게 설명하는 텍스트 영역입니다. `string` type만 가능합니다.',
    },
    iconLeft: {
      description: '필요한 경우 문구 좌측에 아이콘을 넣을 수 있습니다.',
      control: {
        type: null,
      },
    },
    align: {
      description:
        'Snackbar의 표출 위치를 지정합니다. 왼쪽 상단, 상단 중앙, 오른쪽 상단, 왼쪽 하단, 하단 중앙, 오른쪽 하단 6가지 위치를 제공합니다.',
    },
    closeButton: {
      description: '사용자가 Snackbar를 끌 수 있는 버튼을 생성할 수 있습니다.',
    },
    actionButtonData: {
      description:
        '링크 이동 등의 action을 부여할 수 있는 button을 생성할 수 있습니다.',
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
type Story = StoryObj<typeof Snackbar>;

export const SnackbarDefault: Story = {
  render: (args) => <SnackbarExample {...args} />,
  args: {
    contents: 'text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Snackbar의 기본 형태입니다.',
      },
    },
  },
};

export const SnackbarOptions: Story = {
  render: (args) => <SnackbarExample {...args} />,
  args: {
    contents: 'text',
    iconLeft: <CheckCircleLineIcon />,
    closeButton: true,
    actionButtonData: {
      label: 'undo',
      onClickAction: () => console.log('action'),
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '좌측 icon, action button, close button 등의 옵션을 사용할 수 있습니다.',
      },
    },
  },
};
