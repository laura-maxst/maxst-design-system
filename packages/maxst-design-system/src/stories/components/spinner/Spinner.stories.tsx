/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@components/spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description:
        'white, black으로 색 선택 가능. 부모 component 중심에 위치한다.',
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
