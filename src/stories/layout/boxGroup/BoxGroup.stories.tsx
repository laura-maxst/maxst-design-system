import type { Meta, StoryObj } from '@storybook/react';
import { BoxGroup } from '@components/boxGroup';
import { TextField } from '@components/textField';
import { Button } from '@components/button';

const meta: Meta<typeof BoxGroup> = {
  title: 'layout/BoxGroup',
  component: BoxGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '여러 component들를 감싸주는 component입니다. 한줄에 여러 component를 정렬할 때 사용합니다.',
      },
    },
  },
  argTypes: {
    children: {
      description: `component형태로 지정합니다.\n
    React.ReactNode
          `,
      control: {
        type: null,
      },
    },
    align: {
      description: 'Buttom group 내부의 버튼들의 정렬을 설정할 수 있습니다.',
    },
    wrap: {
      description: '줄바꿈 여부를 설정합니다.',
    },
    gap: {
      description: 'button간의 간격을 지정할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BoxGroup>;

export const BoxGroupDefault: Story = {
  render: (args) => <BoxGroup {...args}>{args.children}</BoxGroup>,
  args: {
    children: (
      <>
        <TextField placeholder="placeholder" />
        <Button size={'xl'} type={'primary'}>
          test
        </Button>
        <Button size={'xl'} type={'secondary'}>
          test button
        </Button>
        <Button size={'xl'} type={'error'}>
          test button
        </Button>
        <Button size={'xl'} type={'tertiary'}>
          test button test button
        </Button>
        <Button size={'xl'} type={'secondary'}>
          test button
        </Button>
        <Button size={'xl'} type={'primary'}>
          test button
        </Button>
        <Button size={'xl'} type={'error-tertiary'}>
          test
        </Button>
        <Button size={'xl'} type={'secondary'}>
          test
        </Button>
      </>
    ),
    gap: 5,
  },
};
