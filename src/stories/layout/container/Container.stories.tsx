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
