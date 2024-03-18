import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgress, CircularProgress } from '@components/progress';
import { BoxGroup } from '@components/boxGroup';
import {
  ProgressCircleFillIcon,
  StarFillIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/Progress',
  component: CircularProgress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Progress는 대기 시간을 표현하거나 프로세스의 길이를 표시합니다.\n양식 제출, 업데이트 저장, 업로드 상황 등 진행 중인 프로세스의 상태를 사용자에게 알려줍니다.\nCircular type, Linear type 두가지 타입이 있습니다.',
      },
    },
  },
  argTypes: {
    percent: {
      description: '`percent`가 `null`이면 indeterminate mode로 작동합니다.',
    },
    status: {
      description:
        'progress의 success 혹은 error 상태를 나타냅니다. success는 100%일때만 표시됩니다.',
    },
    isShowPercent: {
      description: 'percent 문구 표시 여부를 지정할 수 있습니다.',
    },
    isShowIcon: {
      description: 'icon 표시 여부를 지정할 수 있습니다.',
    },
    align: {
      description:
        'Linear progress에서 문구의 위아래 정렬을 지정할 수 있습니다.',
    },
    iconBefore: {
      description:
        'Linear progress에서 success / error 전 보여지는 icon을 custom 할 수 있습니다.',
      control: {
        type: null,
      },
    },
    iconError: {
      description: 'error 상태일때의 icon을 custom 할 수 있습니다.',
      control: {
        type: null,
      },
    },
    iconSuccess: {
      description:
        'success 상태일때의 icon을 custom 할 수 있습니다.\nsuccess는 100%일때만 표시됩니다.',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const LinearProgressDefault: Story = {
  render: (args) => <LinearProgress {...args} />,
  args: {
    size: 'l',
    isShowPercent: true,
    label: 'progress',
    percent: 80,
    type: 'secondary',
  },
};

export const LinearProgressCustomIcon: Story = {
  render: (args) => (
    <BoxGroup align="center" gap={10} direction="vertical">
      <LinearProgress {...args} size="l" type="secondary" />
      <LinearProgress {...args} size="l" status="success" />
      <LinearProgress {...args} size="l" status="error" />
    </BoxGroup>
  ),
  args: {
    isShowPercent: true,
    label: 'progress',
    isShowIcon: true,
    percent: 100,
    iconBefore: <StarFillIcon />,
    iconError: <ProgressCircleFillIcon />,
  },
};

export const LinearProgressIndeterminate: Story = {
  render: (args) => (
    <BoxGroup align="center" gap={10} direction="vertical">
      <LinearProgress {...args} size="l" type="secondary" />
      <LinearProgress {...args} size="m" type="secondary" />
      <LinearProgress {...args} size="s" type="secondary" />
    </BoxGroup>
  ),
  args: {},
};

export const LinearProgressSize: Story = {
  render: (args) => (
    <BoxGroup align="center" gap={10} direction="vertical">
      <LinearProgress {...args} size="l" type="primary" />
      <LinearProgress {...args} size="m" type="primary" />
      <LinearProgress {...args} size="s" type="primary" />
    </BoxGroup>
  ),
  args: {
    isShowPercent: true,
    label: 'progress',
    isShowIcon: true,
    percent: 100,
  },
};

export const LinearProgressPercent: Story = {
  render: (args) => (
    <BoxGroup align="center" gap={10} direction="vertical">
      <LinearProgress {...args} size="l" type="primary" percent={50} />
      <LinearProgress {...args} size="l" type="secondary" percent={80} />
      <LinearProgress {...args} size="l" status="success" percent={100} />
      <LinearProgress {...args} size="l" status="error" percent={30} />
    </BoxGroup>
  ),
  args: { isShowPercent: true, label: 'progress' },
};

export const LinearProgressIcon: Story = {
  render: (args) => (
    <BoxGroup align="center" gap={10} direction="vertical">
      <LinearProgress {...args} size="l" status="success" />
      <LinearProgress {...args} size="l" status="error" />
    </BoxGroup>
  ),
  args: {
    isShowPercent: true,
    label: 'progress',
    isShowIcon: true,
    percent: 100,
  },
};

export const CircularProgressIndeterminate: Story = {
  parameters: {
    docs: {
      description: {
        story: '`percent`가 `null`이면 indeterminate mode로 작동합니다.',
      },
    },
  },
  render: (args) => (
    <BoxGroup align="center" gap={10}>
      <CircularProgress {...args} size="l" />
      <CircularProgress {...args} size="m" />
      <CircularProgress {...args} size="s" />
    </BoxGroup>
  ),
  args: {},
};

export const CircularProgressPercent: Story = {
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
  render: (args) => (
    <BoxGroup align="center" gap={10}>
      <CircularProgress {...args} type="primary" percent={90} />
      <CircularProgress {...args} type="secondary" percent={60} />
      <CircularProgress {...args} status="success" percent={100} />
      <CircularProgress {...args} status="error" percent={70} />
    </BoxGroup>
  ),
  args: { isShowPercent: true, size: 'l' },
};

export const CircularProgressIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
  render: (args) => (
    <BoxGroup align="center" gap={10}>
      <CircularProgress {...args} status="success" size="l" />
      <CircularProgress {...args} status="error" size="l" />
      <CircularProgress {...args} status="success" size="m" />
      <CircularProgress {...args} status="error" size="m" />
      <CircularProgress {...args} status="success" size="s" />
      <CircularProgress {...args} status="error" size="s" />
    </BoxGroup>
  ),
  args: { isShowIcon: true, percent: 100 },
};
