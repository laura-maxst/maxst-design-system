/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@components/alert';
import AlertExample from './AlertExample';

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
};

export const AlertDescription: Story = {
  render: (args) => <AlertExample {...args} />,
  args: {
    type: 'error',
    title: 'title',
    contents: 'text',
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
};
