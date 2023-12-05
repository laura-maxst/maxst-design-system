/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup, TextField } from '@components/textField';
import { Dropdown } from '@components/dropdown';

import {
  ArrowDownLineIcon,
  CheckLineIcon,
  ArrowRightLineIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '여러 Input을 감싸는 용도로 사용합니다.',
      },
    },
  },
  argTypes: {
    label: {
      description:
        'inputGroup에 쌓인 textField는 개별 label을 가질 수 없습니다. ',
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

const menuData = [
  {
    id: 'label-0',
    label: 'label 0',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-1',
    label: 'label 1',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: true,
    // subLabel: 'more',
  },
  {
    id: 'label-2',
    label: 'label 2',
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-3',
    label: 'label 3',
    iconLeft: <CheckLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-4',
    label: 'label 4',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    // subLabel: 'more',
  },
];

const onClickMenu = (data: any) => {
  console.log('click data', data);
};

const onChangeMenu = (data: any) => {
  console.log('change data', data);
};

export const InputGroupFullWidth: Story = {
  args: {
    id: 'full-field',
    label: 'total label',
    fullWidth: true,
    children: (
      <>
        <Dropdown
          menuData={menuData}
          onChange={onChangeMenu}
          onClick={onClickMenu}
          id="phone-01"
        >
          <TextField
            id=""
            required={true}
            placeholder="placeholder"
            iconRight={<ArrowDownLineIcon />}
          />
        </Dropdown>
        <TextField id="full-field02" placeholder="two" />
        <TextField id="full-field03" placeholder="three" />
      </>
    ),
  },
};
