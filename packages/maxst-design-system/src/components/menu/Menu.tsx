import React, { Fragment, useEffect, useRef, useState } from 'react';
import { MenuItem } from './MenuItem';
import { ArrowDownLineIcon } from '@maxst-designsystem/icons';

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
  itemData: {
    id: string;
    label: string;
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    size?: 'l' | 's';
    subItemData?: MenuItemProps[];
  }[];
  onClick?: (selectMenuData: MenuItemProps | MenuItemProps[]) => void;
  onChange?: (selectMenuData: MenuItemProps | MenuItemProps[]) => void;
  className?: string;
  multiple?: boolean;
  selectedId?: string;
  hasMaxHeight?: boolean;
}

const Menu = ({
  id,
  size,
  itemData,
  onClick,
  onChange,
  className,
  multiple,
  selectedId,
  hasMaxHeight = true,
}: MenuPropsType) => {
  const menuRef = useRef<HTMLInputElement>(null);
  const [selectMenuId, setSelectMenuId] = useState<string>('');
  const [selectMenus, setSelectdMenus] = useState<any>([]);
  const [isOpenDepthTwo, setIsOpenDepthTwo] = useState<boolean>(false);
  const [isOpenDepthThree, setIsOpenDepthThree] = useState<boolean>(false);
  const [openedMenus, setOpenedMenus] = useState<any>([]);
  const [openedMenuID, setOpenedMenuID] = useState<string>('');

  const onSelectDataFilter = (id: string, label: string) => {
    if (menuRef.current) {
      const child = menuRef.current.children;
      const thisMenuEl = document.getElementById(id);

      for (let i = 0; i < child.length; i++) {
        const thisMenuElSubList = thisMenuEl?.nextElementSibling;
        if (thisMenuElSubList != null || thisMenuElSubList != undefined) {
          if (thisMenuElSubList.id.includes('depth-02')) {
            return selectMenus;
          } else if (thisMenuElSubList.id.includes('depth-03')) {
            return selectMenus;
          }
        } else {
          if (multiple) {
            const selectData = [...selectMenus, { id: id, label: label }];
            const filterSelectData = selectData.reduce((acc, current) => {
              const x = acc.find((item: any, s: any) => item.id === current.id);
              if (!x) {
                return acc.concat([current]);
              } else {
                return acc.filter((item: any) => item.id !== current.id);
              }
            }, []);
            setSelectdMenus(filterSelectData);
            return filterSelectData;
          }
        }
      }
    }
  };

  const openMenuFilter = (id: string) => {
    if (menuRef.current) {
      const child = menuRef.current.children;
      const thisMenuEl = document.getElementById(id);
      const thisMenuElSubList = thisMenuEl?.nextElementSibling;

      for (let i = 0; i < child.length; i++) {
        // sub menu 있는 depth click 시
        if (thisMenuElSubList != null || thisMenuElSubList != undefined) {
          if (thisMenuElSubList.className.includes('close')) {
            if (thisMenuElSubList.id.includes('depth-02-wrap')) {
              setIsOpenDepthTwo(true);
              setOpenedMenus([thisMenuElSubList.id]);
            } else if (thisMenuElSubList.id.includes('depth-03-wrap')) {
              setIsOpenDepthThree(true);
              setOpenedMenus([...openedMenus, thisMenuElSubList.id]);
            }
          } else if (thisMenuElSubList.className.includes('open')) {
            if (thisMenuElSubList.id.includes('depth-02-wrap')) {
              setOpenedMenus([]);
              setIsOpenDepthTwo(false);
            } else if (thisMenuElSubList.id.includes('depth-03-wrap')) {
              setIsOpenDepthThree(false);
            }
            const filterOpenMenu = openedMenus.filter(
              (x: any) => x !== thisMenuElSubList.id,
            );
            setOpenedMenus(filterOpenMenu);
          }
        } else {
          // sub menu 없는 depth 2 click시
          if (thisMenuEl?.className.includes('depth-02')) {
            const filterOpenMenu = openedMenus.filter(
              (x: any) => !x.includes('depth-03-wrap'),
            );
            setOpenedMenus(filterOpenMenu);
          } else if (!thisMenuEl?.className.includes('depth-03')) {
            setOpenedMenus([]);
          }
        }
      }
    }
  };

  const onChangeMenu = (id: string, label: string) => {
    if (!multiple) {
      setSelectMenuId(id);
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

  const onClickMenu = (id: string, label: string) => {
    setOpenedMenuID(id);
    openMenuFilter(id);

    if (!multiple) {
      setSelectMenuId(id);
    }

    if (!onClick) {
      return;
    } else {
      if (multiple) {
        onClick(onSelectDataFilter(id, label));
      } else {
        onClick({ id: id, label: label });
      }
    }
  };

  const onClickMenuSelectedCheck = (id: string) => {
    if (multiple) {
      return selectMenus.filter((item: any) => item.id === id).length === 1
        ? true
        : false;
    } else {
      return selectMenuId === id ? true : false;
    }
  };

  useEffect(() => {
    if (selectedId) {
      setSelectMenuId(selectedId);
      openMenuFilter(selectedId);
      const menuWrap = menuRef.current;
      const selectedMenuEl = document.getElementById(selectedId);
      const getParents = (el: any) => {
        const parents = [];
        for (el; (el = el?.parentNode) && el !== menuWrap; ) {
          parents.push(el);
        }
        return parents.filter((x) => x?.classList.contains('menu-wrap'));
      };
      const parentsList = getParents(selectedMenuEl);
      parentsList.map((listItem) => {
        return listItem.classList.add('open');
      });
    }
  }, [selectedId]);

  return (
    <div
      className={[
        'menu-wrap',
        className ? className : '',
        hasMaxHeight ? 'has-max-height' : '',
      ].join(' ')}
      id={id + '-menu-wrap'}
      ref={menuRef}
    >
      {itemData.map((item) => (
        <div key={item.id} className="depth-01-wrap">
          <MenuItem
            id={item.id}
            size={size ? size : 'l'}
            label={item.label}
            subLabel={item?.subLabel}
            iconLeft={item?.iconLeft}
            iconRight={
              item.subItemData ? <ArrowDownLineIcon /> : item?.iconRight
            }
            disabled={item.disabled}
            onChange={onChangeMenu}
            onClick={() => onClickMenu(item.id, item.label)}
            selected={onClickMenuSelectedCheck(item.id)}
            className={[
              '',
              isOpenDepthTwo && openedMenus.includes(item.id + '-depth-02-wrap')
                ? 'sub-menu-open'
                : 'sub-menu-close',
            ].join(' ')}
          />
          {item.subItemData && (
            <div
              className={[
                'menu-wrap',
                'depth-02-wrap',
                isOpenDepthTwo &&
                openedMenus.includes(item.id + '-depth-02-wrap')
                  ? 'open'
                  : 'close',
              ].join(' ')}
              id={item.id + '-depth-02-wrap'}
            >
              {item.subItemData.map((subItem) => (
                <div key={subItem.id}>
                  <MenuItem
                    id={subItem.id}
                    size={'s'}
                    label={subItem.label}
                    subLabel={subItem?.subLabel}
                    iconLeft={subItem?.iconLeft}
                    iconRight={
                      subItem.subItemData ? (
                        <ArrowDownLineIcon />
                      ) : (
                        subItem?.iconRight
                      )
                    }
                    disabled={subItem.disabled}
                    onChange={onChangeMenu}
                    onClick={() => onClickMenu(subItem.id, subItem.label)}
                    selected={onClickMenuSelectedCheck(subItem.id)}
                    className={[
                      'depth-02',
                      subItem.subItemData ? 'has-sub-menu' : '',
                      isOpenDepthThree &&
                      openedMenus.includes(item.id + '-depth-03-wrap')
                        ? 'sub-menu-open'
                        : 'sub-menu-close',
                    ].join(' ')}
                  />
                  {subItem.subItemData && (
                    <div
                      className={[
                        'menu-wrap',
                        'depth-03-wrap',
                        isOpenDepthThree &&
                        openedMenus.includes(item.id + '-depth-03-wrap')
                          ? 'open'
                          : 'close',
                      ].join(' ')}
                      id={item.id + '-depth-03-wrap'}
                    >
                      {subItem.subItemData.map((subItem) => (
                        <div key={subItem.id}>
                          <MenuItem
                            id={subItem.id}
                            size={'s'}
                            label={subItem.label}
                            subLabel={subItem?.subLabel}
                            iconLeft={subItem?.iconLeft}
                            iconRight={
                              subItem.subItemData ? (
                                <ArrowDownLineIcon />
                              ) : (
                                subItem?.iconRight
                              )
                            }
                            disabled={subItem.disabled}
                            onChange={onChangeMenu}
                            onClick={() =>
                              onClickMenu(subItem.id, subItem.label)
                            }
                            selected={onClickMenuSelectedCheck(subItem.id)}
                            className="depth-03"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { Menu };
export type { MenuPropsType };
