import type { Meta, StoryObj } from '@storybook/react';
import { LoadingPage } from '@components/loading';
import LoadingSample from './LoadingSample';

const meta: Meta<typeof LoadingPage> = {
  title: 'Feedback/LoadingPage',
  component: LoadingPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Loading 상태일 경우 호출하여 사용합니다.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'Loading',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingPage>;

export const LoadingPageDefault: Story = {
  render: (args) => (
    <LoadingSample>
      <LoadingPage {...args} />
    </LoadingSample>
  ),
  args: {
    size: 'l',
  },
};
