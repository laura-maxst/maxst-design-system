import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '@components/loading';
import { BoxGroup } from '@components/boxGroup';
import { Title } from '@components/title';

const meta: Meta<typeof Loading> = {
  title: 'Feedback/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Loading을 contents의 내부에서 inline의 요소로 사용합니다.',
      },
    },
  },
  argTypes: {
    className: {
      // description: 'Loading',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const LoadingDefault: Story = {
  args: {
    size: 'l',
    color: 'mint',
  },
};

export const LoadingWithTitle: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Title이나 Text와 함께 inline 속성으로 사용될 경우 감싸고 있는 부모 div를 사용하여 정렬을 맞춰줍니다.',
      },
    },
  },
  render: (args) => (
    <div className="loading-sample-wrap">
      <BoxGroup>
        <Title role={1} size={'m'}>
          Title과 함께 쓰이는 Loading
        </Title>
        <Loading {...args} />
      </BoxGroup>
    </div>
  ),
  args: {
    size: 's',
    color: 'mint',
  },
};
