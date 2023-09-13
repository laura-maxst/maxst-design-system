import React, { useEffect, useState } from 'react';
import { TabPanel } from './TabPanel';
import { TextLabel } from '@components/text';
import { Button } from '@components/button';
import {
  ArrowLeftLineIcon,
  ArrowRightLineIcon,
} from '@maxst-designsystem/icons';

interface tabProps {
  size?: 'l' | 'm' | 's';
  widthFixed?: boolean;
  selectValue: string;
  tabData: {
    id: string;
    label: string;
    icon?: React.ReactNode;
    count?: number;
    children?: React.ReactNode;
    state?: 'default' | 'pressed' | 'disabled';
  }[];
}

function Tab({ size, widthFixed, selectValue, tabData }: tabProps) {
  const [tabSize, setTabSize] = useState<string>('l');
  const [selectTab, setSelectTab] = useState<string>('');
  const [tabMoveSize, setTabMoveSize] = useState<number>(0);
  const [tabBarListItemWidth, setTabBarListItemWidth] = useState<number>(0);

  const onClickTabBarItem = (id: string, state: string | undefined) => {
    if (state === 'disabled') {
      return;
    }
    setSelectTab(id);
  };

  const onTabStateFilter = (state: string | undefined) => {
    if (typeof state == 'string') {
      return state;
    } else {
      return 'default';
    }
  };

  const onChickControlButton = (type: string) => {
    const tabBar = document.querySelector('.tab-bar') as HTMLElement;
    const tabBarList = document.querySelector('.tab-bar__list') as HTMLElement;
    const tabBarWidth = tabBar.clientWidth;
    const tabBarListWidth = tabBarList.clientWidth;
    const tabControlPrev = document.querySelector(
      '.control.prev',
    ) as HTMLElement;
    const tabControlNext = document.querySelector(
      '.control.next',
    ) as HTMLElement;

    if (type === 'next') {
      if (tabMoveSize > tabBarListWidth - tabBarWidth) {
        tabBarList.style.left = `-${tabBarListWidth - tabBarWidth}px`;
        tabControlNext.style.display = 'none';
      } else {
        if (tabMoveSize === 0) {
          tabBarList.style.left = `-${tabBarListItemWidth}px`;
        } else {
          tabBarList.style.left = `-${tabMoveSize}px`;
        }
        setTabMoveSize(tabMoveSize + tabBarListItemWidth);
      }
      tabControlPrev.style.display = 'block';
    } else if (type === 'prev') {
      if (tabMoveSize < tabBarListWidth - tabBarWidth) {
        setTabMoveSize(tabMoveSize - tabBarListItemWidth);
        if (tabMoveSize <= 0) {
          tabBarList.style.left = `0px`;
          tabControlPrev.style.display = 'none';
          setTabMoveSize(tabBarListItemWidth);
        } else {
          tabBarList.style.left = `-${tabMoveSize}px`;
        }
      } else {
        tabBarList.style.left = `-${
          tabBarListWidth - tabBarWidth - tabBarListItemWidth
        }px`;
        setTabMoveSize(tabBarListWidth - tabBarWidth - tabBarListItemWidth * 2);
        tabControlNext.style.display = 'block';
      }
    }
  };

  useEffect(() => {
    const tabBar = document.querySelector('.tab-bar') as HTMLElement;
    const tabBarList = document.querySelector('.tab-bar__list') as HTMLElement;
    const tabControlNext = document.querySelector(
      '.control.next',
    ) as HTMLElement;

    if (tabBarList) {
      const tabBarWidth = tabBar.clientWidth;
      const tabBarListWidth = tabBarList.clientWidth;
      setTabBarListItemWidth(tabBarList.children[0].clientWidth);
      if (tabBarWidth < tabBarListWidth) {
        tabControlNext.style.display = 'block';
      }
      setTabMoveSize(tabBarList.children[0].clientWidth);
    }
  }, []);

  useEffect(() => {
    if (size === ('l' || 'm' || 's')) {
      setTabSize(size);
    }
  }, [size]);

  useEffect(() => {
    if (selectValue) {
      setSelectTab(selectValue);
    }
  }, [selectValue]);

  return (
    <div className={['tab-wrap'].join(' ')}>
      <div
        className={[
          'tab-bar',
          widthFixed ? 'fixed' : '',
          `tab-bar__${size}`,
        ].join(' ')}
      >
        <div className="control prev">
          <Button
            size={size === 's' ? 's' : 'm'}
            type="tertiary"
            iconOnly={<ArrowLeftLineIcon />}
            isIconMode={true}
            onClick={() => onChickControlButton('prev')}
          />
        </div>
        <div className="tab-bar__list">
          {tabData.map((tabitem) => {
            return (
              <button
                className={[
                  `tab-${size}-${onTabStateFilter(tabitem.state)}`,
                  tabitem.id === selectTab ? 'checked' : '',
                ].join(' ')}
                key={tabitem.id}
                onClick={() => onClickTabBarItem(tabitem.id, tabitem.state)}
              >
                {tabitem.icon && tabitem.icon}
                <TextLabel
                  size={
                    (tabSize === 'l' && 'xl') ||
                    (tabSize === 'm' && 'l') ||
                    (tabSize === 's' && 'm') ||
                    'l'
                  }
                >
                  {tabitem.label}
                </TextLabel>
                {tabitem.count && (
                  <span className="chips">{tabitem.count}</span>
                )}
              </button>
            );
          })}
        </div>
        <div className="control next">
          <Button
            size={size === 's' ? 's' : 'm'}
            type="tertiary"
            iconOnly={<ArrowRightLineIcon />}
            isIconMode={true}
            onClick={() => onChickControlButton('next')}
          />
        </div>
      </div>
      {tabData.map(
        (tabitem) =>
          tabitem.id === selectTab && (
            <TabPanel contents={tabitem.children} key={tabitem.id} />
          ),
      )}
    </div>
  );
}

export { Tab };
export type { tabProps };
