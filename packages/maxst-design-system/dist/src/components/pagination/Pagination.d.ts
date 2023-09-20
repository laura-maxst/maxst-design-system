import { DropDownMenuProps } from '@components/dropdown/Dropdown';
interface PaginationProps {
    smallWidth?: boolean;
    simpleMode?: boolean;
    size: 'l' | 'm' | 's';
    totalPage: number;
    defaultPage?: number;
    disabled?: boolean;
    showFirstButton?: boolean;
    showLastButton?: boolean;
    showPageSizeChanger?: boolean;
    onshowPageSizeChage?: (data: DropDownMenuProps) => void;
    showPageOptionCustom?: {
        id: string;
        label: string;
    }[];
    onChange?: () => void;
    onClick?: () => void;
}
declare const Pagination: ({ smallWidth, simpleMode, size, totalPage, defaultPage, disabled, showFirstButton, showLastButton, showPageSizeChanger, onshowPageSizeChage, showPageOptionCustom, onChange, onClick, }: PaginationProps) => JSX.Element;
export { Pagination };
