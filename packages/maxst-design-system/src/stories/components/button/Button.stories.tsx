import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ButtonGroup } from '@components/button';
import { PlusLineBoldIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'string || string + icon',
    },
    isActionMode: {
      description: 'primary xl 사이즈에서만 사용되는 action button',
    },
    buttonWidth: {
      description:
        'width값으로 고정이 필요할 경우 px, %를 붙여 string으로 작성합니다.',
    },
    size: {
      description:
        'text, link, icon type에서는 large, small 사이즈만 있음. 이외 사이즈 입력시 자동 변환',
    },
    state: {
      description: '지정값 없으면 default',
    },
    iconLeft: {
      control: {
        type: null,
      },
    },
    iconRight: {
      control: {
        type: null,
      },
    },
    iconOnly: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const ButtonGroupBox = (
  buttonListData: {
    size: any;
    type: any;
    state?: any;
    children?: React.ReactNode;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    isIconMode?: boolean;
    iconOnly?: React.ReactNode;
    htmlType?: 'button' | 'submit' | 'reset';
  }[],
) => {
  return (
    <ButtonGroup>
      {buttonListData.map((buttonItem) => (
        <Button
          type={buttonItem.type}
          size={buttonItem.size}
          state={buttonItem?.state}
          iconLeft={buttonItem?.iconLeft}
          iconRight={buttonItem?.iconRight}
          isIconMode={buttonItem?.isIconMode}
          iconOnly={buttonItem?.iconOnly}
          key={`button-${buttonItem.type}-${buttonItem.size}`}
        >
          {buttonItem.children}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export const PrimaryDefault: Story = {
  args: {
    type: 'primary',
    children: 'Button',
    size: 'xl',
    iconRight: <PlusLineBoldIcon />,
    isActionMode: true,
  },
};

export const IconButtons: Story = {
  render: () => ButtonGroupBox(IconButtonData),
};

const PrimaryButtonData = [
  {
    type: 'primary',
    size: 'xl',
    children: 'primary xl',
    iconLeft: <PlusLineBoldIcon />,
  },
];

const IconButtonData = [
  {
    type: 'primary',
    size: 'xl',
    iconOnly: <PlusLineBoldIcon />,
    isIconMode: true,
  },
  {
    type: 'secondary',
    size: 'l',
    iconOnly: <PlusLineBoldIcon />,
    isIconMode: true,
  },
  {
    type: 'tertiary',
    size: 'm',
    iconOnly: <PlusLineBoldIcon />,
    isIconMode: true,
  },
  {
    type: 'error',
    size: 's',
    iconOnly: <PlusLineBoldIcon />,
    isIconMode: true,
  },
  {
    type: 'primary',
    size: 'xs',
    iconOnly: <PlusLineBoldIcon />,
    isIconMode: true,
    state: 'disabled',
  },
];

export const TextButton: Story = {
  args: {
    type: 'text',
    children: 'Button',
    size: 'xl',
  },
};

export const LinkButton: Story = {
  args: {
    type: 'link',
    children: 'Button',
    size: 'xl',
  },
};

export const PrimaryButton: Story = {
  render: () => ButtonGroupBox(PrimaryButtonData),
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Button',
    size: 'xl',
  },
};
export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    children: 'Button',
    size: 'xl',
  },
};
export const Error: Story = {
  args: {
    type: 'error',
    children: 'Button',
    size: 'xl',
  },
};
export const Disabled: Story = {
  args: {
    type: 'primary',
    children: 'Button',
    size: 'xl',
    state: 'disabled',
  },
};

export const LoadingButton: Story = {
  args: {
    type: 'primary',
    size: 'xl',
    loading: true,
  },
};
