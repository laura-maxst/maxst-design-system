interface PaginationProps {
    simpleMode?: boolean;
    size: 'l' | 'm' | 's';
    totalCount: number;
    totalPage?: number;
    defaultPage?: number;
    disabled?: boolean;
    showFirstButton?: boolean;
    showLastButton?: boolean;
    showPageSize?: number;
    showPageSizeChage?: () => void;
    showPageOptionCustom?: any;
    onChange?: () => void;
    onClick?: () => void;
}
declare const Pagination: ({ simpleMode, size, totalCount, defaultPage, disabled, showFirstButton, showLastButton, showPageSize, showPageSizeChage, onChange, onClick, }: PaginationProps) => JSX.Element;
export { Pagination };
