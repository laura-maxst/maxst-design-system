import React from 'react';
type MenuItemProps = {
    id: string;
    label: string;
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    size?: 'l' | 's';
    subItemData?: MenuItemProps[];
};
interface MenuPropsType {
    id: string;
    size?: 'l' | 's';
    itemData: MenuItemProps[];
    onClick?: (selectMenuData: MenuItemProps | MenuItemProps[]) => void;
    onChange?: (selectMenuData: MenuItemProps | MenuItemProps[]) => void;
    className?: string;
    multiple?: boolean;
    selectedId?: string;
    hasMaxHeight?: boolean;
}
declare const Menu: ({ id, size, itemData, onClick, onChange, className, multiple, selectedId, hasMaxHeight, }: MenuPropsType) => JSX.Element;
export { Menu };
export type { MenuPropsType };
