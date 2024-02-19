import React, { useEffect, useRef, useState } from 'react';
import { TabPanel } from './TabPanel';
import { TextLabel } from '@components/text';
import { Button } from '@components/button';
import {
  ArrowLeftLineIcon,
  ArrowRightLineIcon,
} from '@maxst-designsystem/icons';

type tabDataType = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  count?: number;
  children?: React.ReactNode;
  state?: 'default' | 'pressed' | 'disabled';
};

interface tabPropsType {
  size?: 'l' | 'm' | 's';
  widthFixed?: boolean;
  selectValue: string;
  tabData: tabDataType[];
  secondaryMode?: boolean;
  className?: string;
}

function Tab({
  size,
  widthFixed,
  selectValue,
  tabData,
  secondaryMode,
  className,
}: tabPropsType) {
  const tabBarRef: any = useRef(null);
  const tabBarListRef: any = useRef(null);
  const prevButtonRef: any = useRef(null);
  const nextButtonRef: any = useRef(null);
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
    const tabBar = tabBarRef.current;
    const tabBarList = tabBarListRef.current;
    const tabBarWidth = tabBar.clientWidth;
    const tabBarListWidth = tabBarList.clientWidth;
    const tabControlPrev = prevButtonRef.current;
    const tabControlNext = nextButtonRef.current;

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
    const tabBarList = tabBarListRef.current;
    const tabControlNext = nextButtonRef.current;

    if (tabBarList) {
      const tabBarWidth = tabBarRef.current.clientWidth;
      const tabBarListWidth = tabBarListRef.current.clientWidth;
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
    <div
      className={[
        'mds-root',
        'tab-wrap',
        secondaryMode ? 'secondary-mode' : '',
        className ? className : '',
      ].join(' ')}
    >
      <div
        className={[
          'tab-bar',
          widthFixed ? 'fixed' : '',
          `tab-bar__${size}`,
        ].join(' ')}
        ref={tabBarRef}
      >
        <div className="control prev" ref={prevButtonRef}>
          <Button
            size={size === 's' ? 's' : 'm'}
            type="tertiary"
            iconOnly={<ArrowLeftLineIcon />}
            isIconMode={true}
            onClick={() => onChickControlButton('prev')}
          />
        </div>
        <div className="tab-bar__list" ref={tabBarListRef}>
          {tabData.map((tabitem) => {
            return secondaryMode ? (
              <button
                className={[
                  'tab__secondary-mode',
                  `tab-secondary-${onTabStateFilter(tabitem.state)}`,
                  tabitem.id === selectTab ? 'checked' : '',
                ].join(' ')}
                key={tabitem.id}
                onClick={() => onClickTabBarItem(tabitem.id, tabitem.state)}
              >
                {tabitem.icon && tabitem.icon}
                <TextLabel size={'l'}>{tabitem.label}</TextLabel>
              </button>
            ) : (
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
        <div className="control next" ref={nextButtonRef}>
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
export type { tabPropsType };
