import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ButtonGroup } from '@components/button';
import { PlusLineBoldIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'string || string + icon',
      control: {
        type: null,
      },
    },
    buttonWidth: {
      description:
        '그룹내의 모든 버튼이 같은 width값으로 고정이 필요할 경우 px, %를 붙여 string으로 작성합니다.',
    },
    fullWidth: {
      description:
        '자식 button들의 width를 100%로 정의해주지만 button의 max-width값 이상 지정할 수 없습니다.',
    },
    direction: {
      description: '기본적으로 horizontal',
    },
    align: {
      description: '기본적으로 left 정렬입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButtonsGroup: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button
        type="primary"
        size="xl"
        iconLeft={<PlusLineBoldIcon />}
        iconRight={<PlusLineBoldIcon />}
      >
        primary XL
      </Button>
      <Button type="primary" size="l">
        primary L
      </Button>
    </ButtonGroup>
  ),
  args: {
    buttonWidth: '123px',
  },
};

export const ButtonsGroupFullwidth1Case: Story = {
  render: () => (
    <ButtonGroup fullWidth={true}>
      <Button type="primary" size="xl" iconLeft={<PlusLineBoldIcon />}>
        primary XL
      </Button>
      <Button type="primary" size="l">
        primary L
      </Button>
    </ButtonGroup>
  ),
};

export const ButtonsGroupFullwidth2Case: Story = {
  render: () => (
    <ButtonGroup fullWidth={true}>
      <Button type="secondary" size="xl" iconLeft={<PlusLineBoldIcon />}>
        primary XL
      </Button>
      <Button type="secondary" size="l">
        primary L
      </Button>
      <Button type="secondary" size="m">
        primary L
      </Button>
    </ButtonGroup>
  ),
};