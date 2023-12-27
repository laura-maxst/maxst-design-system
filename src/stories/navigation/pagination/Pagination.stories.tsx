import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@components/pagination';
import { DropDownMenuProps } from '@components/dropdown/Dropdown';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '페이지네이션은 다음 또는 이전 페이지로 이동하기 위한 제어 기능을 사용하여 콘텐츠나 데이터를 여러 페이지로 분할하는 데 사용합니다.\nPagination은 구조 및 쓰임새에 따라 2가지 모드를 제공합니다.',
      },
    },
  },
  argTypes: {
    totalPage: {
      description: '총 page 수를 설정합니다.',
    },
    onClick: {
      description: '클릭된 page number를 return 합니다.',
    },
    showPageSizeChanger: {
      description:
        '한 페이지당 보여줄 item 갯수를 수정할 dropdown을 보여주는 옵션. 기본적으로 10, 20, 50. 100이지만 `showPageOptionCustom` 옵션을 사용해서 custom 가능합니다.',
    },
    onshowPageSizeChange: {
      description: `한 페이지당 보여줄 item 갯수 변경 이벤트를 설정합니다.\n클릭한 menu의 data를 return 합니다.
      `,
    },
    showFirstButton: {
      description: '첫 번째 페이지로 이동하는 버튼의 유무를 설정합니다.',
    },
    showLastButton: {
      description: '마지막 페이지로 이동하는 버튼의 유무를 설정합니다.',
    },
    showPageOptionCustom: {
      description: '한 페이지당 보여줄 item 갯수를 사용자정의 할 수 있습니다.',
    },
    defaultPage: {
      description: '초기 선택된 page를 설정할 수 있습니다.',
    },
    align: {
      description: 'pagination의 정렬을 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const onClick = (thisPage: number) => {
  console.log(thisPage);
};

const onshowPageSizeChange = (data: DropDownMenuProps) => {
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
    onClick: onClick,
    onshowPageSizeChange: onshowPageSizeChange,
  },
};

export const PaginationMediumSize: Story = {
  render: (args) => (
    <div className="pagination-box">
      <Pagination {...args} />
    </div>
  ),
  args: {
    totalPage: 20,
    size: 'm',
    onClick: onClick,
    onshowPageSizeChange: onshowPageSizeChange,
  },
};

export const PaginationSmallSize: Story = {
  render: (args) => (
    <div className="pagination-box">
      <Pagination {...args} />
    </div>
  ),
  args: {
    totalPage: 20,
    size: 's',
    onClick: onClick,
    onshowPageSizeChange: onshowPageSizeChange,
  },
};

export const PaginationSimpleMode: Story = {
  render: (args) => (
    <div className="pagination-box">
      <Pagination {...args} />
    </div>
  ),
  args: {
    totalPage: 20,
    size: 'l',
    onClick: onClick,
    simpleMode: true,
    onshowPageSizeChange: onshowPageSizeChange,
  },
};

export const PaginationSmallWidth: Story = {
  render: (args) => (
    <div className="pagination-box">
      <Pagination {...args} />
    </div>
  ),
  args: {
    totalPage: 20,
    size: 'l',
    onClick: onClick,
    smallWidth: true,
    onshowPageSizeChange: onshowPageSizeChange,
  },
};

export const PaginationFirstLastButton: Story = {
  render: (args) => (
    <div className="pagination-box">
      <Pagination {...args} />
    </div>
  ),
  args: {
    totalPage: 20,
    size: 'l',
    onClick: onClick,
    showFirstButton: true,
    showLastButton: true,
    onshowPageSizeChange: onshowPageSizeChange,
    showPageSizeChanger: true,
  },
};

export const PaginationPageOptionCustom: Story = {
  render: (args) => (
    <div className="pagination-box">
      <Pagination {...args} />
    </div>
  ),
  args: {
    totalPage: 20,
    size: 'l',
    onClick: onClick,
    onshowPageSizeChange: onshowPageSizeChange,
    showPageSizeChanger: true,
    showPageOptionCustom: showPageOptionData,
  },
};
