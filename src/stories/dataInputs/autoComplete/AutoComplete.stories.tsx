/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from '@components/autoComplete';
import { ArrowDownLineIcon } from '@maxst-designsystem/icons';
import { TextField } from '@components/textField';
import { SearchBar } from '@components/searchBar';

const meta: Meta<typeof AutoComplete> = {
  title: 'DataInputs/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'AutoComplete 기능을 정의합니다.',
      },
    },
  },
  argTypes: {
    children: {
      description: `Textfield나 Searchbar 사용을 권장합니다.\n
    "React.ReactNode"
        `,
      control: {
        type: null,
      },
    },
    id: {
      control: {
        type: null,
      },
    },
    onChange: {
      description: '입력값(`value`)을 return 받습니다.',
    },
    onClick: {
      description: '해당 이벤트 객체를 return 받습니다.',
    },
    size: {
      description: 'Menu의 size를 지정할 수 있습니다. ',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

const menuData = [
  {
    id: 'menu-0',
    label: 'menu 0',
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'menu-1',
    label: 'menu 1',
  },
  {
    id: 'menu-2',
    label: 'menu 2',
    disabled: false,
    subItemData: [
      {
        id: 'menu-2-1',
        label: 'menu 2-1',
      },
      {
        id: 'menu-2-2',
        label: 'menu 2-2',
      },
    ],
  },
  {
    id: 'menu-3',
    label: 'menu 3',
    disabled: false,
    subLabel: 'more',
    subItemData: [
      {
        id: 'menu-3-1',
        label: 'menu 3-1',
      },
      {
        id: 'menu-3-2',
        label: 'menu 3-2',
      },
    ],
  },
  {
    id: 'menu-4',
    label: 'menu 4',
    disabled: false,
  },
  {
    id: 'menu-5',
    label: 'menu 5',
    disabled: true,
  },
  {
    id: 'menu-6',
    label: 'menu 6',
  },
  {
    id: 'menu-7',
    label: 'menu 7',
  },
];

const onChange = (value: any) => {
  console.log('onchange', value);
};
const onClick = (e: any) => {
  console.log('onclick', e.target);
};

export const AutocompleteWithSearchbar: Story = {
  args: {
    children: (
      <SearchBar
        id="searchBar"
        // onChange={onChange}
        placeholder="search"
        helperText={'검색할 단어를 입력하세요.'}
        resetButton
      />
    ),
    menuData: menuData,
    onClick: onClick,
    onChange: onChange,
    id: 'auto-complete_searchbar',
    className: 'auto-complete__searchbar',
  },
};

export const AutocompleteWithTextfield: Story = {
  args: {
    children: <TextField id="" required={true} placeholder="placeholder" />,
    menuData: menuData,
    onClick: onClick,
    onChange: onChange,
    id: 'auto-complete_textfield',
    className: 'auto-complete__textfield',
  },
};
