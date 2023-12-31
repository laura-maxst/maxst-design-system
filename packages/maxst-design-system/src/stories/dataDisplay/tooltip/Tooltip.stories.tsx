import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@components/tooltip';
import {
  NotificationLineIcon,
  FolderLineBoldIcon,
} from '@maxst-designsystem/icons';
import { Button } from '@components/button';
import { Text } from '@components/text';
import { Divider } from '@components/divider';

const meta: Meta<typeof Tooltip> = {
  title: 'DataDisplay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tooltip은 UI 요소 위로 마우스를 가져가거나, 클릭할 때 표시되는 메시지 상자입니다. 버튼,아이콘,텍스트 와 같은 UI 요소와 쌍을 이루어 활용합니다.\n비교적 간단하고 보충적인 설명이 필요할 때 사용할 수 있습니다.\n다양한 트리거요소와 조합하여 사용할 수 있습니다.',
      },
    },
  },
  argTypes: {
    children: {
      description: `tooltip으로 작동할 모든 component가 가능합니다.\n
    "React.ReactNode"
        `,
      control: {
        type: null,
      },
    },
    title: {
      description: 'tooltip의 제목입니다.',
    },
    text: {
      description: 'tooltip의 내용입니다.',
    },
    customContent: {
      description:
        '기본적인 틀 이외의 custom components를 사용하고 싶을 때 사용합니다.',
      control: {
        type: null,
      },
    },
    mode: {
      description: '기본적으로 dark-mode로 적용됩니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const TooltipDefault: Story = {
  args: {
    children: (
      <Button
        isIconMode={true}
        size="l"
        type="primary"
        iconOnly={<NotificationLineIcon />}
      />
    ),
    text: 'Tooltip',
  },
};

export const TooltipWithArrowAndTitle: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip에 Title과 화살표를 추가할 수 있습니다.\n화살표는 방향과 정렬에 따라 위치가 달라집니다.',
      },
    },
  },
  args: {
    children: (
      <Button
        isIconMode={true}
        size="l"
        type="primary"
        iconOnly={<NotificationLineIcon />}
      />
    ),
    title: 'Tooltip Title을 추가할 수 있습니다.',
    text: 'arrow와 방향 옵션을 사용할 수 있습니다. ',
    arrow: true,
  },
};

export const TooltipCustom: Story = {
  args: {
    children: (
      <Button size="l" type="text" iconLeft={<FolderLineBoldIcon />}>
        text type
      </Button>
    ),
    customContent: (
      <>
        <Text type="body" size="m">
          정보의 분리를 위해 Divider 요소를 사용할 수 있습니다.
        </Text>
        <Text type="body" size="m">
          정보의 양이 많아 가독성이 떨어지는 것은 지양합니다.customContent
          옵션은 title과 text 옵션과 같이 사용할 수 없습니다.
        </Text>
        <Divider />
        <Text type="body" size="m">
          ex. 타이틀과의 분리, 예시 등등
        </Text>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tooltip 내 부가적인 설명이 필요한 경우 시각 요소를 추가할 수 있습니다. ',
      },
    },
  },
};
