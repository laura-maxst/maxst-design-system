import { Button } from '@components/button';
import React, { Fragment, useEffect, useState } from 'react';
import {
  ArrowRightLineIcon,
  ArrowUpCircleLineIcon,
  MoreHorizontalLineIcon,
  HomeLineIcon,
} from '@maxst-designsystem/icons';
import { Dropdown } from '@components/dropdown';

interface BreadcrumItemProps {
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
interface BreadcrumbProps {
  moreButton?: boolean;
  thisPage: string;
  homeButton?: {
    id: string;
    icon?: React.ReactNode;
    onMoveHome?: () => void;
  };
  menuData: {
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
  }[];
}

const Breadcrumb = ({
  menuData,
  moreButton,
  thisPage,
  homeButton,
}: BreadcrumbProps) => {
  const [fullMenuMode, setFullMenuMode] = useState<boolean>(true);

  const DrawButton = (buttonData: BreadcrumItemProps) => {
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
                  type="text"
                  size="s"
                  iconLeft={buttonData.icon && buttonData.icon}
                  iconRight={<ArrowUpCircleLineIcon />}
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
            type="text"
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
    <div className={['mds-breadcrumb'].join(' ')}>
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
          <div className="breadcrumb-icon">
            <ArrowRightLineIcon />
          </div>
        </>
      )}
      {fullMenuMode &&
        menuData.map((item: any, index) => {
          return (
            <Fragment key={item.id}>
              {index !== 0 && (
                <div className="breadcrumb-icon">
                  <ArrowRightLineIcon />
                </div>
              )}
              {DrawButton(item)}
            </Fragment>
          );
        })}
      {!fullMenuMode && (
        <>
          {DrawButton(menuData[0])}
          <div className="breadcrumb-icon">
            <ArrowRightLineIcon />
          </div>
          <Button
            type="ghost"
            size="s"
            isIconMode={true}
            iconOnly={<MoreHorizontalLineIcon />}
            className={['breadcrumb-more-button'].join(' ')}
            onClick={onClickMoreButton}
          />
          <div className="breadcrumb-icon">
            <ArrowRightLineIcon />
          </div>
          {DrawButton(menuData[menuData.length - 1])}
        </>
      )}
    </div>
  );
};

export { Breadcrumb };
