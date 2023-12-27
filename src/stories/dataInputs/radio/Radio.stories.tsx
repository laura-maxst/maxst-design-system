import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@components/radio';

const meta: Meta<typeof Radio> = {
  title: 'DataInputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Radio Button은 선택지에서 단 하나만 선택해야할 때 사용합니다.',
      },
    },
  },
  argTypes: {
    id: {
      control: {
        type: null,
      },
    },
    onChange: {
      description: '`event.target`값을 return 받습니다.',
      control: {
        type: null,
      },
    },
    onClick: {
      description: '`event.target`값을 return 받습니다.',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

const onChange = (e: any) => {
  console.log('target change', e);
};
const onClick = (e: any) => {
  console.log('target chick', e);
};

export const RadioDefault: Story = {
  args: {
    id: 'radio-1',
    name: 'radio',
    size: 'l',
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
    onChange: onChange,
    onClick: onClick,
  },
};
