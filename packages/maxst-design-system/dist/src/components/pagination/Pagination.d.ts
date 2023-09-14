interface PaginationProps {
    type?: 'default' | 'simple';
    totalCount: number;
    defaultPage?: number;
    disabled?: boolean;
    showPageSizeChage?: () => void;
    onChange?: () => void;
    onClick?: () => void;
}
declare const Pagination: ({ type }: PaginationProps) => JSX.Element;
export default Pagination;
