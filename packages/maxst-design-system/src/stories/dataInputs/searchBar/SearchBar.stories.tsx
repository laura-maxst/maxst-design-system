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
        component: '검색어를 입력하기 위한 입력 필드 컴포넌트입니다.',
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
  },
};
