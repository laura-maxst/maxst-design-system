import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@components/container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: `component형태로 지정합니다.\n
    React.ReactNode
          `,
      control: {
        type: null,
      },
    },
    full: {
      description:
        '기본적으로 `max-width:1440px`로 설정되어 있습니다. `1440px`이상에서도 `width:100%` 설정이 필요할 때 `boolean`값으로 설정합니다.',
    },
    maxWidth: {
      description: 'px, % 등 원하는 설정값을 string으로 지정합니다.',
    },
    align: {
      description:
        'container의 정렬을 설정할 수 있습니다. 기본적으로 center 정렬을 지원합니다. 필요에 따라 좌측, 우측 정렬을 지정할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const ContainerDefault: Story = {
  render: (args) => <Container {...args}>{args.children}</Container>,
  args: {
    children: 'container',
  },
};
