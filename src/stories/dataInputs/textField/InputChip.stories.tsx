/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { InputChip } from '@components/textField';
import { UserFillIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof InputChip> = {
  title: 'DataInputs/InputChip',
  component: InputChip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Input안에 chip이 생성되는 component입니다.',
      },
    },
  },
  argTypes: {
    ref: {
      description:
        '`useRef()`를 사용하여 Textfield에 ref를 전달할 수 있습니다.',
    },
    id: {
      control: {
        type: null,
      },
    },
    onChange: {
      description: '입력된 chip data를(`string[]`)형태로 return 받습니다.',
    },
    onClick: {
      description: '해당 이벤트 객체(입력Input)를 return 받습니다.',
    },
    minInputLength: {
      description: 'chip 생성시 최소로 입력 해야 하는 문구의 수를 지정합니다.',
    },
    maxInputLength: {
      description: 'chip 생성시 최대로 입력 해야 하는 문구의 수를 지정합니다.',
    },
    minChipLength: {
      description: '최소 입력 해야 하는 Chip의 갯수를 지정합니다.',
    },
    maxChipLength: {
      description: '최대 입력 해야 하는 Chip의 갯수를 지정합니다.',
    },
    type: {
      description:
        'HTML5의 input type을 지정할 수 있습니다. 미 지정시 text로 설정됩니다.',
    },
    size: {
      description: 'textfield의 size를 지정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputChip>;

const onChange = (e: any) => {
  console.log('onchange', e);
};
const onClick = (e: any) => {
  console.log('onclick', e);
};

const chipData: { id: string; label: string }[] = [
  {
    id: '123',
    label: '123',
  },
  {
    id: '234',
    label: '234',
  },
  {
    id: '345',
    label: '345',
  },
  {
    id: 'qwe',
    label: 'qwe',
  },
];

export const InputChipDefault: Story = {
  args: {
    id: 'default-textfield',
    placeholder: 'chip 추가',
    label: 'label text',
    required: true,
    helperText:
      'chip은 2~10자리 입력 가능합니다. chip의 갯수는 2~10개 입력 가능합니다. 중복된 chip은 입력할 수 없습니다.',
    minInputLength: 2,
    maxInputLength: 10,
    minChipLength: 2,
    maxChipLength: 10,
    onChange: onChange,
    onClick: onClick,
    chipValueData: chipData,
  },
};
