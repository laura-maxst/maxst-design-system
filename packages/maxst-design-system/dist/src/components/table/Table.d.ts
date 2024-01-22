interface TableProps {
    id?: string;
    size?: 'l' | 's';
    align?: 'left' | 'center' | 'right';
    columnData: {
        title: string;
        id: string;
        align?: 'left' | 'center' | 'right' | undefined;
        sort?: boolean;
        cellWidth?: string;
    }[];
    rowData: Array<{
        [id: string]: any;
    }>;
    tableMinWidth?: number;
    verticalHeadingMode?: boolean;
    leftHeadRow?: boolean;
    checkMode?: boolean;
    isRowCheck?: boolean;
    onClick?: (rowdata: any, rowid: any) => void;
    onCheck?: (rowdata: any, rowid: any) => void;
}
declare const Table: ({ id, size, align, columnData, rowData, tableMinWidth, verticalHeadingMode, leftHeadRow, checkMode, isRowCheck, onClick, onCheck, }: TableProps) => JSX.Element;
export { Table };
