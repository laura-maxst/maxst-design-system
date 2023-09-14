import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@components/divider';

const meta: Meta<typeof Divider> = {
  title: 'components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'divider 사이 문구 등이 필요할 경우 사용',
    },
    direction: {
      description:
        'vertical, horizontal 두가지. 기본적으로 horizontal 제공, vertical로 사용시에는 감싸는 container가 flex box로 되어 있어야 한다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const DividerDefault: Story = {
  render: (args) => (
    <div className="divider-box">
      <Divider type={args.type} direction={args.direction} {...args}>
        {args.children}
      </Divider>
    </div>
  ),
  args: {
    children: 'container',
    type: 'default',
    direction: 'horizontal',
  },
};
