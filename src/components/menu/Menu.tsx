import React, { useEffect, useRef, useState } from 'react';
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
  itemData: MenuItemProps[];
  onClick?: (selectMenuData: MenuItemProps | MenuItemProps[]) => void;
  onChange?: (selectMenuData: MenuItemProps | MenuItemProps[]) => void;
  className?: string;
  multiple?: boolean;
  selectMenu?: string | { id: string; label: string }[];
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
  selectMenu,
  hasMaxHeight = true,
}: MenuPropsType) => {
  const menuRef = useRef<HTMLInputElement>(null);
  const [selectMenuId, setSelectMenuId] = useState<string>('');
  const [selectMenus, setSelectMenus] = useState<any>([]);
  const [openedMenus, setOpenedMenus] = useState<any>([]);

  const onSelectDataFilter = ({ id, label }: { id: string; label: string }) => {
    if (menuRef.current) {
      const child = menuRef.current.children;
      const thisMenuEl = menuRef.current.querySelector('#' + id);

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
            setSelectMenus(filterSelectData);
            return filterSelectData;
          }
        }
      }
    }
  };

  const openMenuFilter = (menuId: string) => {
    if (menuRef.current) {
      const child = menuRef.current.children;
      const thisMenuEl = menuRef.current.querySelector('#' + menuId);
      const thisMenuElSubList = thisMenuEl?.nextElementSibling;

      for (let i = 0; i < child.length; i++) {
        // sub menu 있는 depth click 시
        if (thisMenuElSubList != null || thisMenuElSubList != undefined) {
          if (thisMenuElSubList.className.includes('close')) {
            if (thisMenuElSubList.id.includes('depth-02-wrap')) {
              setOpenedMenus([thisMenuElSubList.id]);
            } else if (thisMenuElSubList.id.includes('depth-03-wrap')) {
              setOpenedMenus([...openedMenus, thisMenuElSubList.id]);
            }
          } else if (thisMenuElSubList.className.includes('open')) {
            if (thisMenuElSubList.id.includes('depth-02-wrap')) {
              setOpenedMenus([]);
            } else if (thisMenuElSubList.id.includes('depth-03-wrap')) {
              //
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
    if (!onChange) {
      return;
    } else {
      if (multiple) {
        onChange(onSelectDataFilter({ id: id, label: label }));
      } else {
        onChange({ id: id, label: label });
      }
    }
  };

  const onClickMenu = (id: string, label: string) => {
    openMenuFilter(id);
    if (!multiple) {
      setSelectMenuId(id);
    } else {
      onSelectDataFilter({ id: id, label: label });
    }

    if (!onClick) {
      return;
    } else {
      if (multiple) {
        onClick(onSelectDataFilter({ id: id, label: label }));
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

  // select data로 메뉴 ui 제어
  const openMenuBucket: any[] = [];
  const onSelectMenuOpenClose = (menuId: string) => {
    // 부모 노드 찾기
    const getParents = (el: any) => {
      const menuWrap = menuRef.current;
      const parents = [];
      for (el; (el = el?.parentNode) && el !== menuWrap; ) {
        parents.push(el);
      }
      return parents.filter((x) => x?.classList.contains('menu-wrap'));
    };
    // 선택 메뉴 감지하여 부모 depth open
    const selectedMenuEl = menuRef.current?.querySelector('#' + String(menuId));
    const parentsList = getParents(selectedMenuEl);
    for (const v of parentsList) {
      v.id && openMenuBucket.push(v.id);
    }
    parentsList.map((listItem) => {
      return listItem.classList.add('open');
    });
    setOpenedMenus(openMenuBucket);
  };

  useEffect(() => {
    if (selectMenu) {
      if (multiple) {
        setSelectMenus(selectMenu);
        for (const i in selectMenu as {
          id: string;
          label: string;
        }[]) {
          const selectItem = selectMenu[i] as {
            id: string;
            label: string;
          };
          openMenuFilter(selectItem.id);
          onSelectMenuOpenClose(selectItem.id);
        }
      } else {
        setSelectMenuId(String(selectMenu));
        openMenuFilter(String(selectMenu));
        onSelectMenuOpenClose(String(selectMenu));
      }
    }
  }, [selectMenu]);

  return (
    <div
      className={[
        'mds-root',
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
              openedMenus.includes(item.id + '-depth-02-wrap')
                ? 'sub-menu-open'
                : 'sub-menu-close',
            ].join(' ')}
          />
          {item.subItemData && (
            <div
              className={[
                'menu-wrap',
                'depth-02-wrap',

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
export type { MenuPropsType, MenuItemProps };
