/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@components/textField';
import { UserFillIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof TextField> = {
  title: 'DataInputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Input과 Textarea를 모두 정의합니다.',
      },
    },
  },
  argTypes: {
    id: {
      control: {
        type: null,
      },
    },
    resetButton: {
      description: 'textarea에서는 icon이 적용되지 않습니다.',
    },
    iconLeft: {
      description: 'textarea에서는 icon이 적용되지 않습니다.',
    },
    iconRight: {
      description: 'textarea에서는 icon이 적용되지 않습니다.',
    },
    renderValue: {
      description:
        'dropdown의 다중선택 등 일반적인 `string`, `number` type의 `value`가 아닌 경우에 사용됩니다. component 형태로 넘겨줍니다.',
    },
    onChange: {
      description: '입력값(`value`)을 return 받습니다.',
    },
    onClick: {
      description: '해당 이벤트 객체를 return 받습니다.',
    },
    minLength: {
      description:
        '최소 입력값을 설정합니다. 최소 입력값을 입력하지 않을 시 에러 상태로 변환됩니다.',
    },
    maxLength: {
      description:
        '최대 입력값을 설정합니다. 최대 입력값 이상 입력되지 않습니다.',
    },
    multiLine: {
      description: 'textarea로 사용시 `boolean`값으로 설정합니다.',
    },
    value: {
      description:
        'default `value`를 지정하는 등 `value`값을 설정할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

const onChange = (e: any) => {
  console.log('onchange', e);
};
const onClick = (e: any) => {
  console.log('onclick', e);
};

export const InputDefault: Story = {
  args: {
    id: 'default-textfield',
    placeholder: 'placeholder',
    value: 'text는 blabla',
    label: 'label text',
    required: true,
    helperText: '2~10자리 입력가능합니다.',
    minLength: 2,
    maxLength: 10,
    onChange: onChange,
    onClick: onClick,
  },
};

export const InputWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: '필요에 따라 왼쪽 icon을 설정하여 사용할 수 있습니다.',
      },
    },
  },
  args: {
    id: 'default-textfield',
    placeholder: 'placeholder',
    value: 'text는 blabla',
    label: 'label text',
    required: true,
    helperText: '2~10자리 입력가능합니다.',
    minLength: 2,
    maxLength: 10,
    iconLeft: <UserFillIcon />,
  },
};

export const Textarea: Story = {
  parameters: {
    docs: {
      description: {
        story: "'multiLine=true'로 설정하면 textarea로 사용할 수 있습니다.",
      },
    },
  },
  args: {
    id: 'default-textarea',
    placeholder: 'placeholder',
    value: 'text는 blabla',
    label: 'label text',
    required: true,
    helperText: '2~300자리 입력가능합니다.',
    minLength: 2,
    maxLength: 300,
    multiLine: true,
  },
};
