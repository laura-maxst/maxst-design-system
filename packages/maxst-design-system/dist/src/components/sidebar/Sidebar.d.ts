import React from 'react';
type SidebarMenuItemProps = {
    id: string;
    label: string;
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    size?: 'l' | 's';
    subItemData?: SidebarMenuItemProps[];
};
interface SidebarPropsType {
    header?: JSX.Element | React.ReactNode;
    footer?: JSX.Element | React.ReactNode;
    id: string;
    size?: 'l' | 's';
    itemData: SidebarMenuItemProps[];
    onClick?: (selectMenuData: SidebarMenuItemProps | SidebarMenuItemProps[]) => void;
    onChange?: (selectMenuData: SidebarMenuItemProps | SidebarMenuItemProps[]) => void;
    className?: string;
    selectedId?: string;
}
declare const Sidebar: ({ className, header, footer, ...props }: SidebarPropsType) => JSX.Element;
export { Sidebar };
export type { SidebarPropsType };
