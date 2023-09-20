import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@components/pagination';
import { DropDownMenuProps } from '@components/dropdown/Dropdown';

const meta: Meta<typeof Pagination> = {
  title: 'components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPage: {
      description: '총 page 수',
    },
    showPageSizeChanger: {
      description:
        '한 페이지당 보여줄 item 갯수를 수정할 dropdown을 보여주는 옵션. 기본적으로 10, 20, 50. 100이지만 showPageOptionCustom 옵션을 사용해서 custom 가능합니다.',
    },
    onshowPageSizeChage: {
      description: '한 페이지당 보여줄 item 갯수 변경 이벤트',
    },
    showPageOptionCustom: {
      description: '한 페이지당 보여줄 item 갯수를 사용자정의 할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const onshowPageSizeChage = (data: DropDownMenuProps) => {
  console.log(data);
};

const showPageOptionData = [
  {
    id: 'page-size-5',
    label: '5 pages',
  },
  {
    id: 'page-size-10',
    label: '10 pages',
  },
  {
    id: 'page-size-15',
    label: '15 pages',
  },
  {
    id: 'page-size-20',
    label: '20 pages',
  },
];

export const PaginationDefault: Story = {
  render: (args) => (
    <div className="pagination-box">
      <Pagination {...args} />
    </div>
  ),
  args: {
    totalPage: 20,
    size: 'l',
    onshowPageSizeChage: onshowPageSizeChage,
    showPageSizeChanger: true,
    showPageOptionCustom: showPageOptionData,
  },
};
