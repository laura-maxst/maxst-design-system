import React from 'react';
type SidebarMenuItemPropsType = {
    id: string;
    label: string;
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    size?: 'l' | 's';
    subItemData?: SidebarMenuItemPropsType[];
};
interface SidebarPropsType {
    header?: JSX.Element | React.ReactNode;
    footer?: JSX.Element | React.ReactNode;
    id: string;
    size?: 'l' | 's';
    itemData: SidebarMenuItemPropsType[];
    onClick?: (selectMenuData: SidebarMenuItemPropsType | SidebarMenuItemPropsType[]) => void;
    onChange?: (selectMenuData: SidebarMenuItemPropsType | SidebarMenuItemPropsType[]) => void;
    className?: string;
    selectMenu?: string;
}
declare const Sidebar: ({ className, header, footer, ...props }: SidebarPropsType) => React.JSX.Element;
export { Sidebar };
export type { SidebarPropsType };
