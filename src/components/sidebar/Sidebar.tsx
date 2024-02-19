import React from 'react';
import { Menu } from '@components/menu';

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
  onClick?: (
    selectMenuData: SidebarMenuItemProps | SidebarMenuItemProps[],
  ) => void;
  onChange?: (
    selectMenuData: SidebarMenuItemProps | SidebarMenuItemProps[],
  ) => void;
  className?: string;
  selectedId?: string;
}

const Sidebar = ({ className, header, footer, ...props }: SidebarPropsType) => {
  return (
    <div
      className={['mds-root', 'mds-sidebar', className ? className : ''].join(
        ' ',
      )}
    >
      {header && <div className="mds-sidebar__header">{header}</div>}
      <Menu {...props} hasMaxHeight={false} multiple={false} />
      {footer && <div className="mds-sidebar__footer">{footer}</div>}
    </div>
  );
};

export { Sidebar };
export type { SidebarPropsType };
