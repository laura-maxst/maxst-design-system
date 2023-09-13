/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '@components/searchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: {
        type: null,
      },
    },
    // alertText: {
    //   description:'error'
    // },
    // value: {
    //   description:''
    // },
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
