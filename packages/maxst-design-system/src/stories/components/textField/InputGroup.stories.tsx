/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup, TextField } from '@components/textField';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description:
        'inputGroup에 쌓인 textField는 개별 label을 가질 수 없습니다. ',
    },
    align: {
      description: '기본적으로 left 정렬입니다.',
    },
    helperText: {
      description:
        'children이 multiline이면 helper text는 children component에 주고 input group에서는 사용하지 않는다. ',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const InputGroupDefault: Story = {
  args: {
    id: 'field',
    children: (
      <>
        <TextField id="field01" placeholder="one" password={true} />
        <TextField id="field02" placeholder="two" />
        <TextField id="field03" placeholder="three" />
      </>
    ),
  },
};

export const InputGroupFullWidth: Story = {
  args: {
    id: 'full-field',
    label: 'total label',
    fullWidth: true,
    children: (
      <>
        <TextField id="full-field01" placeholder="one" />
        <TextField id="full-field02" placeholder="two" />
        <TextField id="full-field03" placeholder="three" />
      </>
    ),
  },
};
