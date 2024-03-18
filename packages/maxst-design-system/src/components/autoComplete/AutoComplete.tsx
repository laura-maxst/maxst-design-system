import React, { useEffect, useRef, useState } from 'react';
import { Menu, MenuItemProps } from '@components/menu';

interface AutoCompleteMenuType {
  id: string;
  label: string;
  iconLeft?: JSX.Element | React.ReactNode;
  iconRight?: JSX.Element | React.ReactNode;
  disabled?: boolean;
  subLabel?: string;
  size?: 'l' | 's';
}

interface AutoCompleteType {
  id: string;
  size?: 'l' | 's';
  className?: string;
  menuData: AutoCompleteMenuType[];
  onClick?: (e: any) => void;
  onChange?: (value: any) => void;
  children: React.ReactNode;
}

function AutoComplete({
  id,
  size,
  className,
  menuData,
  onClick,
  onChange,
  children,
}: AutoCompleteType) {
  const autoCompleteRef = useRef<HTMLInputElement>(null);
  const [autoCompleteMenuDatas, setAutoCompleteMenuData] = useState<
    AutoCompleteMenuType[]
  >([]);
  // const [selectMenuData, setSelectMenuData] = useState<
  //   MenuItemProps | MenuItemProps[]
  // >(menuData);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>('');

  const onChangeChildren = (value: any) => {
    const filteringData = menuData.filter(
      (itemData) =>
        itemData.label.toLowerCase().indexOf(value.toLowerCase()) > -1,
    );
    setAutoCompleteMenuData(filteringData);

    if (!onChange) {
      return;
    } else {
      onChange(value);
    }
  };

  const onClickChildren = (e: any) => {
    setMenuOpen(true);

    if (!onClick) {
      return;
    } else {
      onClick(e);
    }
  };

  const handleOutside = (e: any) => {
    if (
      autoCompleteRef.current &&
      !autoCompleteRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
      const thisAutoCompleteMenuWrap = document.getElementById(
        `${id}-menu-wrap`,
      );
      if (thisAutoCompleteMenuWrap) {
        thisAutoCompleteMenuWrap.style.height = `0px`;
      }
    }
  };

  const onMenuClick = (data: any) => {
    setSelectValue(data.id);
    if (onChange) {
      onChange(data);
    }
  };

  useEffect(() => {
    if (menuData) {
      setAutoCompleteMenuData(menuData);
    }
  }, [menuData]);

  useEffect(() => {
    const thisBaseWrap = document.getElementById(`${id}__base`);
    const thisAutoCompleteMenuWrap = document.getElementById(`${id}-menu-wrap`);

    if (menuOpen) {
      if (thisBaseWrap && thisAutoCompleteMenuWrap) {
        if (thisBaseWrap.getElementsByClassName('has-helperText')[0]) {
          thisAutoCompleteMenuWrap.style.top = 'calc(100% - 22px)';
          thisAutoCompleteMenuWrap.style.height = `${thisAutoCompleteMenuWrap.clientHeight}px`;
        }
        document.addEventListener('mousedown', handleOutside);
      }

      if (autoCompleteMenuDatas) {
        const thisAutoCompleteMenuWrap = document.getElementById(
          `${id}-menu-wrap`,
        );
        const thisAutoCompleteMenu = document.getElementById(
          `${id}-menu-menu-wrap`,
        );
        if (thisAutoCompleteMenuWrap && thisAutoCompleteMenu) {
          thisAutoCompleteMenuWrap.style.height = `${thisAutoCompleteMenu.clientHeight}px`;
        }
      }

      return () => {
        document.removeEventListener('mousedown', handleOutside);
      };
    }
  }, [autoCompleteMenuDatas, id, menuOpen]);

  return (
    <div
      className={['mds-autocomplete', className ? className : ''].join(' ')}
      ref={autoCompleteRef}
    >
      <div
        className="autocomplete__base"
        onClick={onClickChildren}
        id={id + '__base'}
      >
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, {
            value: selectValue,
            onChange: onChangeChildren,
            size: size,
          });
        })}
      </div>
      <div
        className={['autocomplete__menu-wrap', menuOpen ? 'on' : 'off'].join(
          ' ',
        )}
        id={id + '-menu-wrap'}
      >
        <Menu
          id={id + '-menu'}
          itemData={autoCompleteMenuDatas}
          size={size}
          onClick={onMenuClick}
        />
      </div>
    </div>
  );
}

export { AutoComplete };
