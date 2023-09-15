import React from 'react';
type DropDownMenuProps = {
    id: string;
    label: string;
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    size?: 'l' | 's';
};
interface DropdownProps {
    id: string;
    size?: 'l' | 's';
    align?: 'left' | 'right' | 'center';
    menuData: DropDownMenuProps[];
    children?: string | any;
    onClick?: (selectMenuData: object) => void;
    onChange?: (selectMenuData: object) => void;
    isFullWidthMenu?: boolean;
    className?: string;
}
declare const Dropdown: ({ id, size, align, children, menuData, onClick, onChange, isFullWidthMenu, className, }: DropdownProps) => JSX.Element;
export { Dropdown };
export type { DropDownMenuProps, DropdownProps };
