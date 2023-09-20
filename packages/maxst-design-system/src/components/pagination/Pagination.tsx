import React, { Fragment, useEffect, useState } from 'react';
import { Button } from '@components/button';
import { TextLabel } from '@components/text';
import { Dropdown } from '@components/dropdown';
import { DropDownMenuProps } from '@components/dropdown/Dropdown';
import {
  ArrowDownLineIcon,
  ArrowRightLineIcon,
  ArrowLeftLineIcon,
  MoreHorizontalLineIcon,
  FirstPageLineIcon,
  LastPageLineIcon,
} from '@maxst-designsystem/icons';

interface PaginationProps {
  smallWidth?: boolean;
  simpleMode?: boolean;
  size: 'l' | 'm' | 's';
  // totalCount: number;
  totalPage: number;
  defaultPage?: number;
  disabled?: boolean;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  showPageSizeChanger?: boolean;
  onshowPageSizeChage?: (data: DropDownMenuProps) => void;
  showPageOptionCustom?: {
    id: string;
    label: string;
  }[];
  onChange?: () => void;
  onClick?: () => void;
}

const pageSizeData = [
  {
    id: 'page-size-10',
    label: '10 pages',
  },
  {
    id: 'page-size-20',
    label: '20 pages',
  },
  {
    id: 'page-size-50',
    label: '50 pages',
  },
  {
    id: 'page-size-100',
    label: '100 pages',
  },
];

const Pagination = ({
  smallWidth,
  simpleMode,
  size,
  // totalCount,
  totalPage,
  defaultPage,
  disabled,
  showFirstButton,
  showLastButton,
  showPageSizeChanger,
  onshowPageSizeChage,
  showPageOptionCustom,
  onChange,
  onClick,
}: PaginationProps) => {
  const [thisPage, setThisPage] = useState<number>(1);
  const [showPageSize, setShowPageSize] = useState<number>(10);
  const [selectShowPageSizeData, setSelectShowPageSizeData] = useState<{
    id: string;
    label: string;
  }>({
    id: 'page-size-10',
    label: '10 pages',
  });

  const buttonSizeFilter = (size: string) => {
    switch (size) {
      case 'l':
        return 'l';
      case 'm':
        return 's';
      case 's':
        return 'xs';
      default:
        return 'l';
    }
  };
  const textLabelSizeFilter = (size: string) => {
    switch (size) {
      case 'l':
        return 'l';
      case 'm':
        return 'm';
      case 's':
        return 'm';
      default:
        return 'l';
    }
  };

  const resolveOnChange = () => {
    if (!onChange) {
      return;
    }
    onChange();
  };

  const resolveOnshowPageSizeChage = (selectMenuData: DropDownMenuProps) => {
    if (selectMenuData) {
      setSelectShowPageSizeData({
        id: selectMenuData.id,
        label: selectMenuData.label,
      });
    }
    if (!onshowPageSizeChage) {
      return;
    }
    onshowPageSizeChage(selectMenuData);
  };

  const resolveOnClick = (type: string, index?: number) => {
    if (type === 'item') {
      setThisPage(Number(index));
    } else if (type === 'prev') {
      if (thisPage !== 1) {
        setThisPage(thisPage - 1);
      }
    } else if (type === 'next') {
      if (thisPage !== totalPage) {
        setThisPage(thisPage + 1);
      }
    } else if (type === 'first') {
      setThisPage(1);
    } else if (type === 'last') {
      setThisPage(totalPage);
    }
    if (!onClick) {
      return;
    }
    onClick();
  };

  const onClickMoreButton = () => {
    console.log('more');
  };

  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  const paginaionItemFilter = (node: any) => {
    let itemList = [];
    const firstLastLiDraw = (type: string, content: any) => {
      return <Fragment key={`pagination-button-${type}`}>{content}</Fragment>;
    };
    const moreButtonDraw = (type: string) => (
      <li key={`pagination-button-more-${type}`}>
        <Button
          type="ghost"
          state={disabled ? 'disabled' : 'default'}
          size={buttonSizeFilter(size)}
          id={`pagination-button-more-${type}`}
          iconOnly={<MoreHorizontalLineIcon />}
          isIconMode={true}
          onClick={() => onClickMoreButton()}
        />
      </li>
    );

    if (smallWidth) {
      if (node.length >= 7) {
        itemList = [];
        if (thisPage < 4) {
          itemList = node.map((item: any, index: number) => {
            return (
              <Fragment key={`pagination-button-${index}`}>
                {index < 5 && item}
              </Fragment>
            );
          });
          itemList.push(
            moreButtonDraw('next'),
            firstLastLiDraw('last', node[node.length - 1]),
          );
        } else if (thisPage >= 4 && thisPage <= node.length - 4) {
          itemList = node.map((item: any, index: number) => {
            if (index > thisPage - 3 && index < thisPage + 1) {
              return (
                <Fragment key={`pagination-button-${index}`}>{item}</Fragment>
              );
            }
          });
          itemList.unshift(
            firstLastLiDraw('first', node[0]),
            moreButtonDraw('prev'),
          );
          itemList.push(
            moreButtonDraw('next'),
            firstLastLiDraw('last', node[node.length - 1]),
          );
        } else if (thisPage > node.length - 4) {
          itemList = node.map((item: any, index: number) => {
            return (
              <Fragment key={`pagination-button-${index}`}>
                {index >= node.length - 5 && item}
              </Fragment>
            );
          });
          itemList.unshift(
            firstLastLiDraw('first', node[0]),
            moreButtonDraw('prev'),
          );
        }
      }
    } else {
      if (node.length >= 14) {
        itemList = [];
        if (thisPage < 7) {
          itemList = node.map((item: any, index: number) => {
            return (
              <Fragment key={`pagination-button-${index}`}>
                {index < 12 && item}
              </Fragment>
            );
          });
          itemList.push(
            moreButtonDraw('next'),
            firstLastLiDraw('last', node[node.length - 1]),
          );
        } else if (thisPage >= 7 && thisPage < node.length - 5) {
          itemList = node.map((item: any, index: number) => {
            return (
              <Fragment key={`pagination-button-${index}`}>
                {index >= thisPage - 6 && index <= thisPage + 3 && item}
              </Fragment>
            );
          });
          itemList.unshift(
            firstLastLiDraw('first', node[0]),
            moreButtonDraw('prev'),
          );
          itemList.push(
            moreButtonDraw('next'),
            firstLastLiDraw('last', node[node.length - 1]),
          );
        } else if (thisPage >= node.length - 12) {
          itemList = node.map((item: any, index: number) => {
            return (
              <Fragment key={`pagination-button-${index}`}>
                {index >= node.length - 12 && item}
              </Fragment>
            );
          });
          itemList.unshift(
            firstLastLiDraw('first', node[0]),
            moreButtonDraw('prev'),
          );
        }
      }
    }
    return itemList;
  };

  const pageSetting = () => {
    const paginationItemDraw = pageNumbers.map((i) => {
      return (
        <li key={`pagination-button-${i}`}>
          <Button
            type="ghost"
            state={disabled ? 'disabled' : 'default'}
            size={buttonSizeFilter(size)}
            id={`pagination-button-${i}`}
            onClick={() => resolveOnClick('item', i)}
            className={thisPage === i ? 'checked' : ''}
          >
            {i}
          </Button>
        </li>
      );
    });
    return paginaionItemFilter(paginationItemDraw);
  };

  useEffect(() => {
    setSelectShowPageSizeData(
      showPageOptionCustom ? showPageOptionCustom[0] : pageSizeData[0],
    );
  }, [showPageOptionCustom]);

  useEffect(() => {
    if (defaultPage) {
      setThisPage(defaultPage);
    }
  }, [defaultPage]);

  return (
    <div
      className={[
        'mds-pagination',
        `pagination-${size}`,
        simpleMode ? 'pagination__simple-mode' : '',
        disabled ? 'disabled' : ' ',
      ].join(' ')}
    >
      <ul>
        {showFirstButton && (
          <li>
            <Button
              type="ghost"
              state={
                (disabled && 'disabled') ||
                (thisPage === 1 ? 'disabled' : 'default')
              }
              size={buttonSizeFilter(size)}
              id={`pagination-button-first`}
              onClick={() => resolveOnClick('first')}
              isIconMode={true}
              iconOnly={<FirstPageLineIcon />}
            />
          </li>
        )}
        <li>
          <Button
            type="ghost"
            size={buttonSizeFilter(size)}
            id={`pagination-button-prev`}
            onClick={() => resolveOnClick('prev')}
            isIconMode={true}
            iconOnly={<ArrowLeftLineIcon />}
            state={
              (disabled && 'disabled') ||
              (thisPage === 1 ? 'disabled' : 'default')
            }
          />
        </li>
        {simpleMode ? (
          <>
            <li className="simple-mode__this">
              <TextLabel size={textLabelSizeFilter(size)}>{thisPage}</TextLabel>
            </li>
            <li className="simple-mode__dash">
              <TextLabel size={textLabelSizeFilter(size)}>/</TextLabel>
            </li>
            <li className="simple-mode__total">
              <TextLabel size={textLabelSizeFilter(size)}>
                {totalPage}
              </TextLabel>
            </li>
          </>
        ) : (
          pageSetting()
        )}
        <li>
          <Button
            type="ghost"
            size={buttonSizeFilter(size)}
            id={`pagination-button-next`}
            onClick={() => resolveOnClick('next')}
            isIconMode={true}
            iconOnly={<ArrowRightLineIcon />}
            state={
              (disabled && 'disabled') ||
              (thisPage === totalPage ? 'disabled' : 'default')
            }
          />
        </li>
        {showLastButton && (
          <li>
            <Button
              type="ghost"
              size={buttonSizeFilter(size)}
              id={`pagination-button-last`}
              onClick={() => resolveOnClick('last')}
              isIconMode={true}
              iconOnly={<LastPageLineIcon />}
              state={
                (disabled && 'disabled') ||
                (thisPage === totalPage ? 'disabled' : 'default')
              }
            />
          </li>
        )}
      </ul>
      {showPageSizeChanger && (
        <Dropdown
          size="s"
          menuData={showPageOptionCustom ? showPageOptionCustom : pageSizeData}
          onChange={resolveOnshowPageSizeChage}
          id="dropdown-page-size-change"
          className="dropdown-page-size-change"
        >
          <Button type="ghost" size="m" iconRight={<ArrowDownLineIcon />}>
            {selectShowPageSizeData.label && selectShowPageSizeData.label}
          </Button>
        </Dropdown>
      )}
    </div>
  );
};

export { Pagination };
