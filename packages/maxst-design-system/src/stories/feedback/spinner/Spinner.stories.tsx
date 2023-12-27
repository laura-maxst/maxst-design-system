/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@components/spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '동적인 Spinner입니다. \ncss로 svg 내부 `path`의 `stroke-width` 조절로 두께 조절이 가능하고 제공되는 컬러 이외의 컬러를 지정하여 사용할 수 있습니다. ',
      },
    },
  },
  argTypes: {
    color: {
      description:
        '`white`, `black`으로 색 선택 가능. 부모 component 중심에 위치합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const SpinnerDefault: Story = {
  args: {
    color: 'black',
  },
};
