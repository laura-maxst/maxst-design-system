/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@components/alert';
import AlertExample from './AlertExample';
import { Button } from '@components/button';
// import { useState } from 'react';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    contents: {
      description: '',
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
  // render: (args) => {
  //   const [{ isOpen }, updateArgs] = useArgs();

  //   const onOpenSnackbar = () => {
  //     updateArgs({ isOpen: true });
  //   };

  //   const onCloseSnackbar = () => {
  //     updateArgs({ isOpen: false });
  //   };

  //   return (
  //     <div>
  //       <Button type="secondary" size="l" onClick={onOpenSnackbar}>
  //         open Alert
  //       </Button>
  //       <Alert {...args} open={isOpen} onClose={onCloseSnackbar} />
  //     </div>
  //   );
  // },
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
