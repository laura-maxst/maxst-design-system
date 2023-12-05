import React from 'react';
import { Menu } from '@components/menu';
import { type MenuPropsType } from '@components/menu/Menu';

interface SidebarPropsType extends MenuPropsType {
  header?: JSX.Element | React.ReactNode;
  footer?: JSX.Element | React.ReactNode;
}

const Sidebar = ({
  className,
  header,
  footer,
  multiple = false,
  ...props
}: SidebarPropsType) => {
  return (
    <div className={['mds-sidebar', className ? className : ''].join(' ')}>
      {header && <div className="mds-sidebar__header">{header}</div>}
      <Menu {...props} hasMaxHeight={false} multiple={false} />
      {footer && <div className="mds-sidebar__footer">{footer}</div>}
    </div>
  );
};

export { Sidebar };
export type { SidebarPropsType };
