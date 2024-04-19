import { Button } from '@components/button';
import React, { Fragment, useEffect, useState } from 'react';
import {
  ArrowDownCircleLineIcon,
  MoreHorizontalLineIcon,
  HomeLineIcon,
} from '@maxst-designsystem/icons';
import { Dropdown } from '@components/dropdown';

interface BreadcrumItemPropsType {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onMovePage?: () => void;
  onMoveSubPage?: (targetData: object) => void;
  subMenu?: {
    id: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
  }[];
}
interface BreadcrumbPropsType {
  moreButton?: boolean;
  thisPage: string;
  homeButton?: {
    id: string;
    icon?: React.ReactNode;
    onMoveHome?: () => void;
  };
  menuData: BreadcrumItemPropsType[];
  className?: string;
}

const Breadcrumb = ({
  menuData,
  moreButton,
  thisPage,
  homeButton,
  className,
}: BreadcrumbPropsType) => {
  const [fullMenuMode, setFullMenuMode] = useState<boolean>(true);
  const [thisPageIndex, setThisPageIndex] = useState<number | null>(null);

  useEffect(() => {
    for (const i in menuData) {
      menuData[i].id === thisPage && setThisPageIndex(Number(i));
    }
  }, [thisPage]);

  const DrawButton = (buttonData: BreadcrumItemPropsType) => {
    return (
      <>
        {buttonData.subMenu ? (
          <>
            <Dropdown
              id={`${buttonData.id}-dropdown`}
              size="s"
              align="left"
              menuData={buttonData.subMenu}
              className="breadcrumb-dropdown-box"
              onClick={buttonData.onMoveSubPage && buttonData.onMoveSubPage}
            >
              <>
                <Button
                  state={buttonData.disabled ? 'disabled' : 'default'}
                  type="ghost"
                  size="s"
                  iconLeft={buttonData.icon && buttonData.icon}
                  iconRight={<ArrowDownCircleLineIcon />}
                  className={[
                    thisPage === buttonData.id ? 'current' : 'default',
                  ].join(' ')}
                  onClick={buttonData.onMovePage && buttonData.onMovePage}
                >
                  {buttonData.label}
                </Button>
              </>
            </Dropdown>
          </>
        ) : (
          <Button
            state={buttonData.disabled ? 'disabled' : 'default'}
            type="ghost"
            size="s"
            iconLeft={buttonData.icon && buttonData.icon}
            className={[
              thisPage === buttonData.id ? 'current' : 'default',
            ].join(' ')}
            onClick={buttonData.onMovePage && buttonData.onMovePage}
          >
            {buttonData.label}
          </Button>
        )}
      </>
    );
  };

  const onClickMoreButton = () => {
    setFullMenuMode(true);
  };

  useEffect(() => {
    setFullMenuMode(!moreButton);
  }, [moreButton]);

  return (
    <div className={['mds-breadcrumb', className ? className : ''].join(' ')}>
      {homeButton && (
        <>
          <Button
            type="ghost"
            size="s"
            iconOnly={homeButton.icon ? homeButton.icon : <HomeLineIcon />}
            isIconMode={true}
            className={['breadcrumb-home'].join(' ')}
            onClick={homeButton.onMoveHome && homeButton.onMoveHome}
          />
          <div className="breadcrumb-icon">/</div>
        </>
      )}
      {fullMenuMode &&
        menuData.map((item: any, index) => {
          if (thisPageIndex && index > thisPageIndex) {
            return;
          } else {
            return (
              <Fragment key={item.id}>
                {index !== 0 && <div className="breadcrumb-icon">/</div>}
                {DrawButton(item)}
              </Fragment>
            );
          }
        })}
      {!fullMenuMode && (
        <>
          {DrawButton(menuData[0])}
          <div className="breadcrumb-icon">/</div>
          <Button
            type="ghost"
            size="s"
            isIconMode={true}
            iconOnly={<MoreHorizontalLineIcon />}
            className={['breadcrumb-more-button'].join(' ')}
            onClick={onClickMoreButton}
          />
          <div className="breadcrumb-icon">/</div>
          {DrawButton(menuData[menuData.length - 1])}
        </>
      )}
    </div>
  );
};

export { Breadcrumb };
