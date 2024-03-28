import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ButtonGroup } from '@components/button';
import { PlusLineBoldIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Button> = {
  title: 'DataInputs/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button은 스타일 및 쓰임새에 따라 Box Button, Action Button, Text Button, Icon Button 4가지로 분류합니다.',
      },
    },
  },
  argTypes: {
    children: {
      description: '`string`, `string + icon`으로 지정하길 권장합니다.',
    },
    isActionMode: {
      description:
        'primary xl 사이즈에서만 사용되는 action button 유무 설정으로 주목도가 높아 브랜드를 보여주기 용이한 곳에 사용합니다.',
    },
    buttonWidth: {
      description:
        'width값으로 고정이 필요할 경우 `px`, `%`를 붙여 `string`으로 작성합니다.',
    },
    size: {
      description:
        'text, link, icon type에서는 large, small 사이즈만 있음. 이외 사이즈 입력시 자동 변환',
    },
    state: {
      description: '지정값 없으면 `default`로 지정됩니다.',
    },
    isIconMode: {
      description: 'icon만 존재하는 mode로 iconOnly 옵션과 함께 지정합니다.',
    },
    iconOnly: {
      description:
        'icon mode일때 icon component를 지정해주는 옵션으로 isIconMode 옵션과 함께 지정합니다.',
      control: {
        type: null,
      },
    },
    htmlType: {
      description: '지정값 없으면 button으로 지정됩니다.',
    },
    onClick: {
      description: 'event 객체를 반환받습니다.',
    },
    loading: {
      description:
        'loading 상태일때 설정합니다. buttom의 min-width값이 없으므로 loading 옵션 사용시 buttonWidth와 함께 설정하길 권장합니다.',
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
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const onClickButton = (e: any) => {
  console.log('button', e);
};

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

export const PrimaryActionButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Primary Button의 xl size에서만 적용됩니다. \n주목도가 높아 브랜드를 보여주기 용이한 곳에 사용하는 버튼입니다. ',
      },
    },
  },
  args: {
    type: 'primary',
    children: 'Button',
    size: 'xl',
    iconRight: <PlusLineBoldIcon />,
    isActionMode: true,
    onClick: onClickButton,
  },
};

export const IconButtons: Story = {
  render: () => ButtonGroupBox(IconButtonData),
  parameters: {
    docs: {
      description: {
        story:
          'Icon으로만 이루어진 버튼으로 도구 모음, 좋아요와 같이 간단한 버튼이 필요한 경우 사용합니다.  ',
      },
      source: {
        code: `
<ButtonGroup>
  <Button
    type="primary"
    size="xl"
    isIconMode={true}
    iconOnly={<PlusLineBoldIcon />}
  />
  <Button
    type="secondary"
    size="l"
    isIconMode={true}
    iconOnly={<PlusLineBoldIcon />}
  />
  <Button
    type="tertiary"
    size="m"
    isIconMode={true}
    iconOnly={<PlusLineBoldIcon />}
  />
  <Button
    type="error"
    size="s"
    isIconMode={true}
    iconOnly={<PlusLineBoldIcon />}
  />
  <Button
    type="primary"
    state="disabled"
    size="xs"
    isIconMode={true}
    iconOnly={<PlusLineBoldIcon />}
  />
</ButtonGroup>
        `,
      },
    },
  },
};

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

export const PrimaryButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '가장 기본적인 버튼이며, 페이지의 내 주요 기능에 활용되는 버튼입니다. ',
      },
    },
  },
  args: {
    type: 'primary',
    size: 'xl',
    children: 'primary xl',
    iconLeft: <PlusLineBoldIcon />,
  },
};

export const SecondaryButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '비교적 중요도가 낮은 기능에 활용합니다. 한 화면에 중복적으로 버튼이 들어갈 경우 사용할 수 있습니다.',
      },
    },
  },
  args: {
    type: 'secondary',
    children: 'Button',
    size: 'xl',
  },
};
export const TertiaryButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Primary,Secondary의 보조 작업을 위한 버튼으로 사용하거나, 중요도가 낮은 기능의 버튼으로 사용합니다. ',
      },
    },
  },
  args: {
    type: 'tertiary',
    children: 'Button',
    size: 'xl',
  },
};
export const GhostButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '컨테이너가 없는 유형으로, 가장 덜 눈에 띄는 버튼으로서 사용합니다. 종종 ‘취소’와 같이 primary button과 함께 사용할 수 있습니다. ',
      },
    },
  },
  args: {
    type: 'ghost',
    children: 'Button',
    size: 'xl',
  },
};
export const ErrorButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '취소, 삭제,탈퇴 등 사용자의 데이터에 파괴적인 영향을 미칠 수 있는 작업에 사용하는 경고성 버튼입니다.',
      },
    },
  },
  args: {
    type: 'error',
    children: 'Button',
    size: 'xl',
  },
};
export const TertiaryErrorButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '비교적 덜 파괴적인 데이터의 일부(텍스트,사진,카드 등)를 삭제할 때 사용합니다. ',
      },
    },
  },
  args: {
    type: 'error-tertiary',
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
  parameters: {
    docs: {
      description: {
        story:
          'Button에 최소값이 지정되어 있지 않으므로 loading 옵션 사용시 buttonWidth 옵션으로 button width값을 지정해주길 권장합니다.',
      },
    },
  },
  args: {
    type: 'primary',
    size: 'l',
    loading: true,
    buttonWidth: '80px',
  },
};

export const TextButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Text로 이루어진 버튼이며, 현재 페이지에서 특정 작업 실행 안내시 사용합니다.',
      },
    },
  },
  args: {
    type: 'text',
    children: 'Button',
    size: 'xl',
  },
};

export const LinkButton: Story = {
  parameters: {
    docs: {
      description: {
        story: '다른 페이지로 link 이동시 사용하는 버튼입니다.',
      },
    },
  },
  args: {
    type: 'link',
    children: 'Button',
    size: 'xl',
  },
};
