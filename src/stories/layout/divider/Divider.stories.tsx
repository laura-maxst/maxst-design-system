import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@components/divider';
import { Chip } from '@components/chip';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '영역을 구분하는 선입니다. \n기본적으로 문구는 들어가지 않으며 필요시 children으로 문구를 지정하며 가로, 세로 라인 선택이 가능합니다.',
      },
    },
  },
  argTypes: {
    children: {
      description: `divider 사이 문구 등이 필요할 경우 설정합니다.\n
    string, React.ReactNode
          `,
    },
    type: {
      description: 'Divider 색상 type을 선택할 수 있습니다.',
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
    type: 'default',
    direction: 'horizontal',
  },
};

export const DividerWithText: Story = {
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

export const DividerWithChip: Story = {
  render: (args) => (
    <div className="divider-box">
      <Divider type={args.type} direction={args.direction} {...args}>
        {args.children}
      </Divider>
    </div>
  ),
  args: {
    children: (
      <Chip size="l" type="default">
        Chip
      </Chip>
    ),
    type: 'default',
    direction: 'horizontal',
  },
};

export const DividerWithTextVerticalVersion: Story = {
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
    direction: 'vertical',
  },
};
