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
      description: 'width:100% == true',
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
