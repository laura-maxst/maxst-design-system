import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@components/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'DataInputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox는 Unselected/Seleted/Indeterminate 3가지 타입으로 Unselected를 기본으로 사용합니다.\n\n두가지 컬러모드(Primary(Default),Secondary) 를 제공하며 default를 우선으로 사용합니다. 낮은 Depth의 화면이나 체크박수의 갯수가 많아 눈부심을 유발할 수 있는 화면에서는 선택적으로 Secondary 체크박스를 사용할 수 있습니다.',
      },
    },
  },
  argTypes: {
    id: {
      control: {
        type: null,
      },
    },
    mode: {
      description:
        'color mode를 선택할 수 있습니다. 기본적으로 primary로 적용됩니다.',
    },
    type: {
      description:
        '단독으로 쓰일때는 `selected`로 사용됩니다. `indeterminate`는 CheckboxGroup에서 사용됩니다.',
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
type Story = StoryObj<typeof Checkbox>;

const onChange = (e: any) => {
  console.log('target', e);
};
const onClick = (e: any) => {
  console.log('target', e);
};

export const CheckboxDefaultPrimary: Story = {
  args: {
    id: 'checkbox-1',
    type: 'selected',
    size: 'l',
    checked: true,
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
    onChange: onChange,
    onClick: onClick,
  },
};

export const CheckboxSecondary: Story = {
  args: {
    id: 'checkbox-2',
    type: 'selected',
    mode: 'secondary',
    size: 'l',
    checked: true,
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
  },
};

export const CheckboxError: Story = {
  args: {
    id: 'checkbox-3',
    type: 'selected',
    mode: 'secondary',
    size: 'l',
    state: 'error',
    checked: true,
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
  },
};

export const CheckboxDisabled: Story = {
  args: {
    id: 'checkbox-4',
    type: 'selected',
    mode: 'secondary',
    size: 'l',
    state: 'disabled',
    checked: true,
    disabled: false,
    label: 'label',
    helperText: 'helperText ',
  },
};
