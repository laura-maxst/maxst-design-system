import React from 'react';
import { type MenuPropsType } from '@components/menu/Menu';
interface SidebarPropsType extends MenuPropsType {
    header?: JSX.Element | React.ReactNode;
    footer?: JSX.Element | React.ReactNode;
}
declare const Sidebar: ({ className, header, footer, multiple, ...props }: SidebarPropsType) => JSX.Element;
export { Sidebar };
export type { SidebarPropsType };
