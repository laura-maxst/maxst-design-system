import React, { useEffect, useRef, useState } from 'react';
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
  onClick?: (selectMenuData: DropDownMenuProps | DropDownMenuProps[]) => void;
  onChange?: (selectMenuData: DropDownMenuProps | DropDownMenuProps[]) => void;
  isFullWidthMenu?: boolean;
  className?: string;
  multiple?: boolean;
  menuDirection?: 'top' | 'bottom';
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
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLInputElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isFullWidthMenuWrap, setIsFullWidthMenuWrap] = useState<boolean>(
    isFullWidthMenu ? isFullWidthMenu : false,
  );
  const [selectId, setSelectId] = useState<string>('');
  const [multiSelectData, setMultiSelectData] = useState<any>([]);

  const onClickDropdownBase = (e: any, id: string) => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const onSelectDataFilter = (id: string, label: string) => {
    const selectData = [...multiSelectData, { id: id, label: label }];
    const filterSelectData = selectData.reduce((acc, current) => {
      const x = acc.find((item: any, s: any) => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc.filter((item: any) => item.id !== current.id);
      }
    }, []);
    setMultiSelectData(filterSelectData);
    return filterSelectData;
  };

  const onClickMenuSelectedCheck = (id: string) => {
    if (multiple) {
      return multiSelectData.filter((item: any) => item.id === id).length === 1
        ? true
        : false;
    } else {
      return selectId === id ? true : false;
    }
  };

  const onChangeDropdownMenu = (id: string, label: string) => {
    if (!multiple) {
      setSelectId(id);
    }
    if (!onChange) {
      return;
    } else {
      if (multiple) {
        onChange(onSelectDataFilter(id, label));
      } else {
        onChange({ id: id, label: label });
      }
    }
  };

  const onClickDropdownMenu = (id: string, label: string) => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
    if (!onClick) {
      return;
    } else {
      if (multiple) {
        onClick(onSelectDataFilter(id, label));
      } else {
        setSelectId(id);
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
                onChange={onChangeDropdownMenu}
                onClick={onClickDropdownMenu}
                selected={onClickMenuSelectedCheck(item.id)}
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
