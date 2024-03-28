import React from 'react';
type DropDownMenuProps = {
    id: string;
    label: string;
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    size?: 'l' | 's';
    subItemData?: DropDownMenuProps[];
};
interface DropdownProps {
    id: string;
    size?: 'l' | 's';
    align?: 'left' | 'right' | 'center';
    menuData: DropDownMenuProps[];
    children?: string | any;
    onClick?: (selectMenuData: DropDownMenuProps | DropDownMenuProps[]) => void;
    onChange?: (selectMenuData: DropDownMenuProps | DropDownMenuProps[]) => void;
    isFullWidthMenu?: boolean;
    className?: string;
    multiple?: boolean;
    menuDirection?: 'top' | 'bottom';
    selectMenu?: string | {
        id: string;
        label: string;
    }[];
    disabled?: boolean;
}
declare const Dropdown: ({ id, size, align, children, menuData, onClick, onChange, isFullWidthMenu, className, multiple, menuDirection, selectMenu, disabled, }: DropdownProps) => JSX.Element;
export { Dropdown };
export type { DropDownMenuProps, DropdownProps };
