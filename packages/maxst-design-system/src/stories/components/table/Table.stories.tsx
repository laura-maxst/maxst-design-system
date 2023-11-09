import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@components/table';
import {
  CheckLineIcon,
  DesktopLineIcon,
  MobileLineIcon,
  MoreVerticalLineIcon,
} from '@maxst-designsystem/icons';
import { Dropdown } from '@components/dropdown';
import { Button } from '@components/button';
import { Pagination } from '@components/pagination';

const meta: Meta<typeof Table> = {
  title: 'components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    verticalHeadingMode: {
      description:
        '좌측 head가 필요할때 boolean값으로 지정합니다. check mode와 공존할 수 없습니다.',
    },
    checkMode: {
      description:
        'check mode일 때 boolean값으로 지정합니다. vertical heading mode와 공존할 수 없습니다.',
    },
    isRowCheck: {
      description:
        'check mode일때 row를 클릭해도 checkbox가 작동하도록 하는 옵션입니다. 기본적으로 false를 제공합니다. row 내부에서 check box 이외의 button, dropdown등의 이벤트가 존재할시 사용하지 않는 것을 권장합니다.',
    },
    columnData: {
      description:
        'columnData 배열 내부 align key로 coulmn별 정렬 설정이 가능합니다. cellWidth 옵션으로 cell마다 width값을 px, %로 custom할 수 있습니다.',
      control: {
        type: null,
      },
    },
    rowData: {
      description:
        "'id'값을 꼭 지정해줍니다. 그리고 columnData의 column id를 key값으로 data를 담아 지정합니다. 예시 코드를 확인하세요. value에 string과 React.ReactNode type을 지정할 수 있습니다. string type을 지정하면 Text component로 적용되며 React.ReactNode type을 지정하면 해당 component로 렌더링됩니다.",
      control: {
        type: null,
      },
    },
    align: {
      description:
        '기본적으로 left 정렬을 제공합니다. 숫자의 경우 가독성을 위해 우측정렬(right)을 권장합니다.',
    },
    leftHeadRow: {
      description:
        'thead와 같이 row에 th가 필요할 경우 사용합니다. rowdata의 첫 cell이 th로 적용됩니다.',
    },
    onClick: {
      description:
        'click한 row의 id값을 반환합니다. check mode에서는 선택된 row의 id를 배열로 반환, check mode가 아닐시에는 선택된 row의 id값을 string으로 반환합니다.',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const moreMenuData = [
  {
    id: 'label-0',
    label: 'label 0',
    iconLeft: <CheckLineIcon />,
  },
  {
    id: 'label-1',
    label: 'label 1',
    iconLeft: <DesktopLineIcon />,
  },
  {
    id: 'label-2',
    label: 'label 2',
    iconLeft: <MobileLineIcon />,
  },
];

const MoreComponent = () => {
  return (
    <Dropdown menuData={moreMenuData} align="right" id="dropdown-icon-button">
      <Button
        type="ghost"
        size="s"
        iconOnly={<MoreVerticalLineIcon />}
        isIconMode={true}
      >
        more
      </Button>
    </Dropdown>
  );
};

const defaultColumnsData: {
  id: string;
  title: string;
  align?: 'left' | 'center' | 'right' | undefined;
}[] = [
  {
    title: 'Header Menu 01',
    id: 'column-01',
  },
  {
    title: 'Header Menu 02',
    id: 'column-02',
  },
  {
    title: 'Header Menu 03',
    id: 'column-03',
  },
  {
    title: 'Header Menu 04',
    id: 'column-04',
  },
];
const componentColumnsData: {
  id: string;
  title: string;
  align?: 'left' | 'center' | 'right' | undefined;
  sort?: boolean;
}[] = [
  {
    title: 'Header Menu 01',
    id: 'column-01',
  },
  {
    title: 'Header Menu 02',
    id: 'column-02',
  },
  {
    title: 'Header Menu 03',
    id: 'column-03',
  },
  {
    title: 'Header Menu 04',
    id: 'column-04',
  },
  {
    title: ' ',
    id: 'more',
    align: 'right',
  },
];

const customAlignColumnsData: {
  id: string;
  title: string;
  align?: 'left' | 'center' | 'right' | undefined;
}[] = [
  {
    title: 'Header Menu 01',
    id: 'column-01',
  },
  {
    title: 'Header Menu 02',
    id: 'column-02',
  },
  {
    title: 'Header Menu 03',
    id: 'column-03',
    align: 'right',
  },
  {
    title: 'Header Menu 04',
    id: 'column-04',
  },
];

const customCellWidthColumnsData: {
  id: string;
  title: string;
  cellWidth?: string;
}[] = [
  {
    title: 'Header Menu 01',
    id: 'column-01',
    cellWidth: '160px',
  },
  {
    title: 'Header Menu 02',
    id: 'column-02',
  },
  {
    title: 'Header Menu 03',
    id: 'column-03',
  },
  {
    title: 'Header Menu 04',
    id: 'column-04',
  },
  {
    title: ' ',
    id: 'more',
    cellWidth: '60px',
  },
];

const sortColumnsData: {
  id: string;
  title: string;
  align?: 'left' | 'center' | 'right' | undefined;
  sort?: boolean;
}[] = [
  {
    title: 'Header Menu 01',
    id: 'column-01',
    sort: true,
  },
  {
    title: 'Header Menu 02',
    id: 'column-02',
    sort: true,
  },
  {
    title: 'Header Menu 03',
    id: 'column-03',
    sort: true,
  },
  {
    title: 'Header Menu 04',
    id: 'column-04',
    sort: true,
  },
  {
    title: ' ',
    id: 'more',
    align: 'right',
  },
];
const defaultRowsData = [
  {
    id: '1',
    'column-01': 'List item text 1-1',
    'column-02': 'List item text 1-2',
    'column-03': 'List item text 1-3',
    'column-04': 'List item text 1-4',
  },
  {
    id: '2',
    'column-01': 'List item text 2-1',
    'column-02': 'List item text 2-2',
    'column-03': 'List item text 2-3',
    'column-04': 'List item text 2-4',
  },
  {
    id: '3',
    'column-01': 'List item text 3-1',
    'column-02': 'List item text 3-2',
    'column-03': 'List item text 3-3',
    'column-04': 'List item text 3-4',
  },
  {
    id: '4',
    'column-01': 'List item text 4-1',
    'column-02': 'List item text 4-2',
    'column-03': 'List item text 4-3',
    'column-04': 'List item text 4-4',
  },
];

const componentRowsData = [
  {
    id: '1',
    'column-01': 'List item text 1-1',
    'column-02': 'List item text 1-2',
    'column-03': 'List item text 1-3',
    'column-04': 'List item text 1-4',
    more: <MoreComponent />,
  },
  {
    id: '2',
    'column-01': 'List item text 2-1',
    'column-02': 'List item text 2-2',
    'column-03': 'List item text 2-3',
    'column-04': 'List item text 2-4',
    more: <MoreComponent />,
  },
  {
    id: '3',
    'column-01': 'List item text 3-1',
    'column-02': 'List item text 3-2',
    'column-03': 'List item text 3-3',
    'column-04': 'List item text 3-4',
    more: <MoreComponent />,
  },
  {
    id: '4',
    'column-01': 'List item text 4-1',
    'column-02': 'List item text 4-2',
    'column-03': 'List item text 4-3',
    'column-04': 'List item text 4-4',
    more: <MoreComponent />,
  },
];

const sortRowsData = [
  {
    id: '1',
    'column-01': 'aaaaa 1-1',
    'column-02': 1234,
    'column-03': 11,
    'column-04': 23,
  },
  {
    id: '2',
    'column-01': 'aaaaa 1-2',
    'column-02': 2345,
    'column-03': 111,
    'column-04': 6,
  },
  {
    id: '3',
    'column-01': 'aaaaa 1-3',
    'column-02': 3456,
    'column-03': 1111,
    'column-04': 9,
  },
  {
    id: '4',
    'column-01': 'aaaaa 1-4',
    'column-02': 4567,
    'column-03': 11111,
    'column-04': 567,
  },
];

const onClickrow = (value: any) => {
  console.log('checkrows', value);
};

export const TableDefault: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: defaultColumnsData,
    rowData: defaultRowsData,
    tableMinWidth: 500,
    onClick: onClickrow,
  },
};

export const TableVerticalHeading: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: defaultColumnsData,
    rowData: defaultRowsData,
    tableMinWidth: 500,
    leftHeadRow: true,
  },
};

export const TablewithLeftHead: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: defaultColumnsData,
    rowData: defaultRowsData,
    tableMinWidth: 500,
    verticalHeadingMode: true,
  },
};

export const TableColumnAlignCustom: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: customAlignColumnsData,
    rowData: defaultRowsData,
    tableMinWidth: 500,
    align: 'center',
  },
};

export const TableColumnCellWidthCustom: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: customCellWidthColumnsData,
    rowData: componentRowsData,
    tableMinWidth: 500,
    align: 'left',
  },
};

export const TableCheckModeAndRowCheck: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: defaultColumnsData,
    rowData: defaultRowsData,
    tableMinWidth: 500,
    checkMode: true,
    onClick: onClickrow,
    isRowCheck: true,
  },
};

export const TableComponentTypeRow: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: componentColumnsData,
    rowData: componentRowsData,
    tableMinWidth: 500,
    align: 'center',
  },
};

export const TableWithSort: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: sortColumnsData,
    rowData: sortRowsData,
    tableMinWidth: 500,
    onClick: onClickrow,
  },
};

export const TableWidthPagination: Story = {
  render: (args) => (
    <div>
      <Table {...args} />
      <Pagination size={'m'} totalPage={20} />
    </div>
  ),
  args: {
    columnData: defaultColumnsData,
    rowData: defaultRowsData,
    tableMinWidth: 500,
  },
};

export const TableNoData: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: defaultColumnsData,
    rowData: [],
    tableMinWidth: 500,
  },
};
