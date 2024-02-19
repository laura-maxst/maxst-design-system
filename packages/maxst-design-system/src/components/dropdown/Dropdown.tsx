import React, { useEffect, useRef, useState } from 'react';
// import { DropdownMenu } from './Menu';
import { Menu } from '@components/menu';

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
  selectMenu?: string | { id: string; label: string }[];
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
  multiple,
  menuDirection,
  selectMenu,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLInputElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isFullWidthMenuWrap, setIsFullWidthMenuWrap] = useState<boolean>(
    isFullWidthMenu ? isFullWidthMenu : false,
  );
  const [selectId, setSelectId] = useState<string>('');
  const [multiSelectData, setMultiSelectData] = useState<any>([]);

  const onClickDropdownBase = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const onChangeDropdownMenu = (data: any) => {
    const { id, label } = data;
    if (!onChange) {
      return;
    } else {
      if (multiple) {
        onChange(data);
      } else {
        onChange({ id: id, label: label });
      }
    }
  };

  const onClickDropdownMenu = (data: any) => {
    const { id, label } = data;
    if (menuRef.current) {
      if (multiple) {
        console.log('multiple');
      } else {
        const thisMenuEl = menuRef.current.querySelector('#' + id);
        const thisMenuElSubList = thisMenuEl?.nextElementSibling;

        if (thisMenuElSubList != null || thisMenuElSubList != undefined) {
          setMenuOpen(true);
        } else {
          setMenuOpen(false);
          setSelectId(String(id));
        }
      }
    }
    if (!onClick) {
      return;
    } else {
      if (multiple) {
        onClick(data);
      } else {
        onClick({ id: id, label: label });
      }
    }
  };

  const handleOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (children.type?.displayName == 'TextField') {
      setIsFullWidthMenuWrap(true);
    } else {
      setIsFullWidthMenuWrap(false);
    }
  }, [children]);

  useEffect(() => {
    if (selectMenu) {
      if (multiple) {
        setMultiSelectData(selectMenu);
      } else {
        setSelectId(String(selectMenu));
      }
    }
  }, [selectMenu]);

  useEffect(() => {
    if (menuOpen) {
      const thisDropdownMenuWrap = document.getElementById(`${id}-menu-wrap`);
      const thisDropdownBaseWrap = document.getElementById(`${id}__base`);
      if (thisDropdownBaseWrap && thisDropdownMenuWrap) {
        if (thisDropdownBaseWrap.getElementsByClassName('has-helperText')[0]) {
          if (menuDirection === 'top') {
            thisDropdownMenuWrap.style.bottom = '0';
          } else {
            thisDropdownMenuWrap.style.top = 'calc(100% - 22px)';
          }
        }
        document.addEventListener('mousedown', handleOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleOutside);
      };
    }
  }, [menuOpen]);

  return (
    <div
      className={[
        'mds-root',
        'dropdown-box',
        align ? align : 'left',
        menuDirection ? menuDirection : 'bottom',
        menuOpen ? 'open' : 'close',
        className ? className : '',
        multiple ? 'multiple' : '',
        isFullWidthMenuWrap ? 'full-width' : '',
      ].join(' ')}
      id={id}
      ref={dropdownRef}
    >
      <div
        className="dropdown-box__base"
        onClick={onClickDropdownBase}
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
          ref={menuRef}
        >
          <Menu
            id={id + 'menu'}
            size={size}
            itemData={menuData}
            onChange={onChangeDropdownMenu}
            onClick={onClickDropdownMenu}
            multiple={multiple}
            selectMenu={multiple ? multiSelectData : selectId}
          />
        </div>
      )}
    </div>
  );
};

export { Dropdown };
export type { DropDownMenuProps, DropdownProps };
