/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import Snackbar from '@components/snackbar';
import SnackbarExample from './SnackbarExample';
import { CheckCircleLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    contents: {
      description:
        'Snackbar의 내용을 자세하게 설명하는 텍스트 영역입니다. string type만 가능합니다.',
    },
    iconLeft: {
      description: '문구 좌측으로 필요한 경우 아이콘을 넣을 수 있습니다.',
      control: {
        type: null,
      },
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
};
