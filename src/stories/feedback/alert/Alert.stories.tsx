/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@components/alert';
import AlertExample from './AlertExample';
const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Alert은 사용자의 주의를 끄는 방식으로 짧고 중요한 메세지를 표시합니다.',
      },
    },
  },
  argTypes: {
    contents: {
      description: '',
    },
    type: {
      description: 'Alert의 상태 type을 지정할 수 있습니다.',
    },
    actionButtonData: {
      description:
        '링크 이동 등의 action을 부여할 수 있는 button을 생성할 수 있습니다.',
    },
    closeButton: {
      description: '사용자가 Alert을 끌 수 있는 버튼을 생성할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const AlertBasic: Story = {
  render: (args) => <AlertExample {...args} />,
  args: {
    type: 'error',
    contents: 'text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Alert의 기본형으로 text만 존재합니다.',
      },
      source: {
        code: `      
<div>
  <Button type="secondary" size="l" onClick={onOpenSnackbar}>
    open Alert
  </Button>
  <Alert type="error" contents="text" open={isOpen} onClose={onCloseSnackbar} />
</div>
        `,
      },
    },
  },
};

export const AlertDescription: Story = {
  render: (args) => <AlertExample {...args} />,
  args: {
    type: 'error',
    title: 'title',
    contents: 'text',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Title과 Description이 존재하는 형태의 Alert으로 사용할 수 있습니다.',
      },
      source: {
        code: `      
<div>
  <Button type="secondary" size="l" onClick={onOpenSnackbar}>
    open Alert
  </Button>
  <Alert type="error" title="title" contents="text" open={isOpen} onClose={onCloseSnackbar} />
</div>
        `,
      },
    },
  },
};

export const AlertOptions: Story = {
  render: (args) => <AlertExample {...args} />,
  args: {
    type: 'error',
    title: 'title',
    contents: 'text',
    closeButton: true,
    actionButtonData: {
      label: 'undo',
      onClickAction: () => console.log('action'),
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'close button과 링크 이동 등의 action을 부여할 수 있는 button(예시에서 undo button) 옵션 등을 지정하여 사용할 수 있습니다.',
      },
      source: {
        code: `      
<div>
  <Button type="secondary" size="l" onClick={onOpenSnackbar}>
    open Alert
  </Button>
  <Alert 
    type="error" 
    title="title" 
    contents="text" 
    closeButton={true}
    open={isOpen} 
    onClose={onCloseSnackbar} 
    actionButtonData={{
      label: 'undo',
      onClickAction: () => console.log('action'),
    }}
  />
</div>
        `,
      },
    },
  },
};
