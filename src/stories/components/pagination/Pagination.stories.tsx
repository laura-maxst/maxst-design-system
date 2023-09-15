import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@components/pagination';

const meta: Meta<typeof Pagination> = {
  title: 'components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalCount: {
      description: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PaginationDefault: Story = {
  render: (args) => (
    <div className="pagination-box">
      <Pagination {...args} />
    </div>
  ),
  args: {
    totalCount: 20,
    size: 'l',
  },
};
