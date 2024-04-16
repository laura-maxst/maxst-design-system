import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@components/table';
import { MoreVerticalLineIcon } from '@maxst-designsystem/icons';
import { Dropdown } from '@components/dropdown';
import { Button } from '@components/button';
import { Pagination } from '@components/pagination';
import {
  componentColumnsData,
  componentRowsData,
  customAlignColumnsData,
  customCellWidthColumnsData,
  defaultColumnsData,
  defaultRowsData,
  moreMenuData,
  sortColumnsData,
  sortRowsData,
} from '@stories/data/tableData';

const meta: Meta<typeof Table> = {
  title: 'DataDisplay/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    verticalHeadingMode: {
      description:
        '좌측 head가 필요할때 `boolean`값으로 지정합니다. check mode와 공존할 수 없습니다.',
    },
    checkMode: {
      description:
        'check mode일 때 `boolean`값으로 지정합니다. vertical heading mode와 공존할 수 없습니다.',
    },
    isRowCheck: {
      description:
        'check mode일때 row를 클릭해도 checkbox가 작동하도록 하는 옵션입니다. 기본적으로 `false`를 제공합니다. row 내부에서 checkbox 이외의 button, dropdown등의 이벤트가 존재할시 사용하지 않는 것을 권장합니다.',
    },
    columnData: {
      description:
        'columnData 배열 내부 align key로 coulmn별 정렬 설정이 가능합니다. cellWidth 옵션으로 cell마다 width값을 `px`, `%`로 custom할 수 있습니다.',
      control: {
        type: null,
      },
    },
    rowData: {
      description:
        'id값을 꼭 지정해줍니다. 그리고 columnData의 column id를 key값으로 data를 담아 지정합니다. 예시 코드를 확인하세요. value에 `string`과 `React.ReactNode` type을 지정할 수 있습니다. `string` type을 지정하면 Text component로 적용되며 `React.ReactNode` type을 지정하면 해당 component로 렌더링됩니다.',
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
    tableMinWidth: {
      description:
        'table의 최소 너비를 지정합니다. 반응형에서 지정한 너비보다 좁아질 경우 스크롤 처리 됩니다.',
    },
    onClick: {
      description:
        'click한 row의 data(`rowdata`)와 id값(`value`)을 반환합니다. \ncheck mode에서는 선택된 row의 id를 배열로 반환, check mode가 아닐시에는 선택된 row의 id값을 `string`으로 반환합니다.\ncheck mode의 전체선택에서는 rowdata가 `null`로 반환됩니다.',
      control: {
        type: null,
      },
    },
    onCheck: {
      description:
        'row click과 checkbox click을 구분할 때 사용합니다. `onCheck()` 사용시 `onClick`은 checkbox click을 제외한 row click시 작동, `onCheck`는 row 내부의 checkbox click시에만 작동합니다. 이때 `전체선택`은 `onClick`에 포함되지 않습니다.',
      control: {
        type: null,
      },
    },
    id: {
      description: '필요에 따라 `id`를 지정할 수 있습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

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

const onClickrow = (rowdata: any, id: any) => {
  console.log('row click data', rowdata, 'id', id);
};

const onClickCheck = (rowdata: any, id: any) => {
  console.log('checkbox click ', rowdata, 'id', id);
};

export const TableDefault: Story = {
  render: (args) => <Table {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Table의 기본형 예시입니다.',
      },
    },
  },
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
    onClick: onClickrow,
  },
};

export const TablewithLeftHead: Story = {
  render: (args) => <Table {...args} />,
  args: {
    columnData: defaultColumnsData,
    rowData: defaultRowsData,
    tableMinWidth: 500,
    verticalHeadingMode: true,
    onClick: onClickrow,
  },
};

export const TableColumnAlignCustom: Story = {
  render: (args) => <Table {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'align 옵션으로 table 문구의 정렬을 설정할 수 있습니다.',
      },
    },
  },
  args: {
    columnData: customAlignColumnsData,
    rowData: defaultRowsData,
    tableMinWidth: 500,
    align: 'center',
    onClick: onClickrow,
  },
};

export const TableComponentTypeRow: Story = {
  render: (args) => <Table {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'row에 component형태의 data를 지정할 수 있습니다. 예. more button',
      },
    },
  },
  args: {
    columnData: componentColumnsData,
    rowData: componentRowsData.map((item) => {
      return { ...item, more: <MoreComponent /> };
    }),
    tableMinWidth: 500,
    align: 'center',
  },
};

export const TableColumnCellWidthCustom: Story = {
  render: (args) => <Table {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'columnData에 cellWidth로 cell별 width값을 지정할 수 있습니다.',
      },
    },
  },
  args: {
    columnData: customCellWidthColumnsData,
    rowData: componentRowsData.map((item) => {
      return { ...item, more: <MoreComponent /> };
    }),
    tableMinWidth: 500,
    align: 'left',
    onClick: onClickrow,
  },
};

export const TableCheckModeAndOnCheck: Story = {
  render: (args) => <Table {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'onCheck() 사용시 row click과 checkbox click이 구분됩니다. ',
      },
    },
  },
  args: {
    columnData: customCellWidthColumnsData,
    rowData: componentRowsData.map((item) => {
      return { ...item, more: <MoreComponent /> };
    }),
    tableMinWidth: 500,
    checkMode: true,
    onClick: onClickrow,
    onCheck: onClickCheck,
  },
};

export const TableWithSort: Story = {
  render: (args) => <Table {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'cell별 정렬을 할 수 있습니다. ',
      },
    },
  },
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
