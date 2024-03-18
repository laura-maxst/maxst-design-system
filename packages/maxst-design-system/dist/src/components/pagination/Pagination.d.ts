import { DropDownMenuProps } from '@components/dropdown/Dropdown';
interface PaginationProps {
    smallWidth?: boolean;
    simpleMode?: boolean;
    size: 'l' | 'm' | 's';
    align?: 'left' | 'right' | 'center';
    totalPage: number;
    defaultPage?: number;
    disabled?: boolean;
    showFirstButton?: boolean;
    showLastButton?: boolean;
    showPageSizeChanger?: boolean;
    onshowPageSizeChange?: (data: DropDownMenuProps) => void;
    showPageOptionCustom?: {
        id: string;
        label: string;
    }[];
    onClick?: (selectIndex: number) => void;
    className?: string;
}
declare const Pagination: ({ smallWidth, simpleMode, size, align, totalPage, defaultPage, disabled, showFirstButton, showLastButton, showPageSizeChanger, onshowPageSizeChange, showPageOptionCustom, onClick, className, }: PaginationProps) => JSX.Element;
export { Pagination };
