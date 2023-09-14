import React, { useEffect, useState } from 'react';
import { DropdownMenu } from './Menu';

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

const Dropdown = ({
  id,
  size,
  align,
  children,
  menuData,
  onClick,
  onChange,
  isFullWidthMenu,
  className,
}: DropdownProps) => {
  const selectMenu = {
    id: '',
    label: '',
  };
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectMenuData, setSelectMenuData] = useState<object>(selectMenu);
  const [isFullWidthMenuWrap, setIsFullWidthMenuWrap] = useState<boolean>(
    isFullWidthMenu ? isFullWidthMenu : false,
  );

  const onClickDropdownBase = (e: any, id: string) => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const onClickDropdownMenu = (id: string, label: string) => {
    setSelectMenuData({ id: id, label: label });

    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    if (children.type.displayName == 'TextField') {
      setIsFullWidthMenuWrap(true);
    } else {
      setIsFullWidthMenuWrap(false);
    }
  }, [children]);

  useEffect(() => {
    if (!onChange) {
      return;
    }
    onChange(selectMenuData);
  }, [selectMenuData]);

  useEffect(() => {
    if (!onClick) {
      return;
    } else {
      onClick(selectMenuData);
    }
  }, [selectMenuData]);

  useEffect(() => {
    if (menuOpen) {
      const thisDropdown = document.getElementById(String(id));
      const thisDropdownMenuWrap = document.getElementById(`${id}-menu-wrap`);
      const thisDropdownBaseWrap = document.getElementById(`${id}__base`);
      // const isAlignCenter = thisDropdown?.classList.contains('center');
      // if (thisDropdownMenuWrap && isAlignCenter) {
      //   const thisWidth = window
      //     .getComputedStyle(thisDropdownMenuWrap)
      //     .getPropertyValue('width')
      //     .split('px')[0];
      //   const thisWidthHalf = Number(thisWidth) / 2;
      //   console.log('thisWidth', thisWidth);
      //   thisDropdownMenuWrap.style.left = `calc(50% - ${thisWidthHalf}px)`;
      // }
      if (thisDropdownBaseWrap && thisDropdownMenuWrap) {
        if (thisDropdownBaseWrap.getElementsByClassName('has-helperText')[0]) {
          thisDropdownMenuWrap.style.top = 'calc(100% - 22px)';
        }
      }
    }
  }, [menuOpen]);

  return (
    <div
      className={[
        'dropdown-box',
        align ? align : 'left',
        menuOpen ? 'open' : 'close',
        className ? className : '',
      ].join(' ')}
      id={id}
    >
      <div
        className="dropdown-box__base"
        onClick={(e) => onClickDropdownBase(e, String(id))}
        id={id + '__base'}
      >
        {children}
      </div>
      {menuOpen && (
        <div
          className={[
            'dropdown-box__menu-wrap',
            isFullWidthMenuWrap ? 'full-width' : '',
          ].join(' ')}
          id={id + '-menu-wrap'}
        >
          {menuData &&
            menuData.map((item) => (
              <DropdownMenu
                id={item.id}
                size={size}
                label={item.label}
                subLabel={item?.subLabel}
                iconLeft={item?.iconLeft}
                iconRight={item?.iconRight}
                disabled={item.disabled}
                onClick={onClickDropdownMenu}
                key={item.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
export type { DropDownMenuProps, DropdownProps };
