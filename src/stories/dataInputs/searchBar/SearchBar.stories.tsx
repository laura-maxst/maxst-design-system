/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '@components/searchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'DataInputs/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '검색어를 입력하기 위한 입력 필드 컴포넌트입니다.\n공통 마진 규칙 및 최소 너비는 Text Field와 동일합니다.',
      },
    },
  },
  argTypes: {
    ref: {
      description:
        '`useRef()`를 사용하여 Searchbar 내부 Textfield에 ref를 전달할 수 있습니다.',
    },
    id: {
      control: {
        type: null,
      },
    },
    onChange: {
      description: '입력값(`value`)을 return 받습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

const onChangeSearch = (e: any) => {
  console.log(e);
};

export const SearchBarDefault: Story = {
  args: {
    id: 'searchBar',
    placeholder: 'search',
    resetButton: true,
    onChange: onChangeSearch,
    className: 'searchbar-example',
  },
};
