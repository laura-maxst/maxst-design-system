import {
  CheckLineIcon,
  DesktopLineIcon,
  MobileLineIcon,
} from '@maxst-designsystem/icons';
// import { MoreComponent } from '@stories/dataDisplay/table/Table.stories';

export const moreMenuData = [
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

export const defaultColumnsData: {
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

export const componentColumnsData: {
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

export const customAlignColumnsData: {
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

export const customCellWidthColumnsData: {
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

export const sortColumnsData: {
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

export const defaultRowsData = [
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

export const componentRowsData = [
  {
    id: '1',
    'column-01': 'List item text 1-1',
    'column-02': 'List item text 1-2',
    'column-03': 'List item text 1-3',
    'column-04': 'List item text 1-4',
    // more: <MoreComponent />,
  },
  {
    id: '2',
    'column-01': 'List item text 2-1',
    'column-02': 'List item text 2-2',
    'column-03': 'List item text 2-3',
    'column-04': 'List item text 2-4',
    // more: <MoreComponent />,
  },
  {
    id: '3',
    'column-01': 'List item text 3-1',
    'column-02': 'List item text 3-2',
    'column-03': 'List item text 3-3',
    'column-04': 'List item text 3-4',
    // more: <MoreComponent />,
  },
  {
    id: '4',
    'column-01': 'List item text 4-1',
    'column-02': 'List item text 4-2',
    'column-03': 'List item text 4-3',
    'column-04': 'List item text 4-4',
    // more: <MoreComponent />,
  },
];

export const sortRowsData = [
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
    'column-02': 4567,
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
    'column-02': 2345,
    'column-03': 11111,
    'column-04': 567,
  },
];
