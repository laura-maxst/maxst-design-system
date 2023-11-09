import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@components/container';

const meta: Meta<typeof Container> = {
  title: 'layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'React.ReactNode',
      control: {
        type: null,
      },
    },
    full: {
      description:
        '기본적으로 max-width:1440px로 설정되어 있습니다. 1440px이상에서도 width:100% 설정이 필요할 때 boolean값으로 설정합니다.',
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
