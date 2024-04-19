import React from 'react';
type DropDownMenuPropsType = {
    id: string;
    label: string;
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    size?: 'l' | 's';
    subItemData?: DropDownMenuPropsType[];
};
interface DropdownPropsType {
    id: string;
    size?: 'l' | 's';
    align?: 'left' | 'right' | 'center';
    menuData: DropDownMenuPropsType[];
    children?: string | any;
    onClick?: (selectMenuData: DropDownMenuPropsType | DropDownMenuPropsType[]) => void;
    onChange?: (selectMenuData: DropDownMenuPropsType | DropDownMenuPropsType[]) => void;
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
declare const Dropdown: ({ id, size, align, children, menuData, onClick, onChange, isFullWidthMenu, className, multiple, menuDirection, selectMenu, disabled, }: DropdownPropsType) => React.JSX.Element;
export { Dropdown };
export type { DropDownMenuPropsType, DropdownPropsType };
