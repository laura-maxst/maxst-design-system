import React, { Fragment, useEffect, useState } from 'react';
import { Button } from '@components/button';
import { TextLabel } from '@components/text';
import {
  ArrowRightLineIcon,
  ArrowLeftLineIcon,
  MoreHorizontalLineIcon,
} from '@maxst-designsystem/icons';

interface PaginationProps {
  // type?: 'default' | 'simple';
  simpleMode?: boolean;
  size: 'l' | 'm' | 's';
  totalCount: number;
  totalPage?: number;
  defaultPage?: number;
  disabled?: boolean;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  showPageSize?: number;
  showPageSizeChage?: () => void;
  showPageOptionCustom?: any;
  onChange?: () => void;
  onClick?: () => void;
}

const Pagination = ({
  simpleMode,
  size,
  totalCount,
  defaultPage,
  disabled,
  showFirstButton,
  showLastButton,
  showPageSize,
  showPageSizeChage,
  onChange,
  onClick,
}: PaginationProps) => {
  const [thisPage, setThisPage] = useState<number>(1);

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

  const resolveOnClick = (type: string, index?: number) => {
    if (type === 'item') {
      setThisPage(Number(index));
    } else if (type === 'prev') {
      if (thisPage !== 1) {
        setThisPage(thisPage - 1);
      }
    } else if (type === 'next') {
      if (thisPage !== totalCount) {
        setThisPage(thisPage + 1);
      }
    }
    if (!onClick) {
      return;
    }
    onClick();
  };

  const pageNumbers = Array.from({ length: totalCount }, (_, i) => i + 1);

  const paginaionItemFilter = (node: any) => {
    let itemList = [];
    const firstLastLiDraw = (type: string, content: any) => {
      return <Fragment key={`pagination-button-${type}`}>{content}</Fragment>;
    };
    const moreButtonDraw = (type: string) => (
      <li key={`pagination-button-more-${type}`}>
        <Button
          type="ghost"
          size={buttonSizeFilter(size)}
          id={`pagination-button-more-${type}`}
          iconOnly={<MoreHorizontalLineIcon />}
          isIconMode={true}
          // onClick={() => resolveOnClick('item', i)}
          // className={thisPage === i ? 'checked' : ''}
        />
      </li>
    );
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
      } else if (thisPage >= 7 && thisPage < 15) {
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
      } else if (thisPage >= 15) {
        itemList = node.map((item: any, index: number) => {
          return (
            <Fragment key={`pagination-button-${index}`}>
              {index >= 8 && item}
            </Fragment>
          );
        });
        itemList.unshift(
          firstLastLiDraw('first', node[0]),
          moreButtonDraw('prev'),
        );
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
    if (defaultPage) {
      setThisPage(defaultPage);
    }
  }, [defaultPage]);

  useEffect(() => {
    console.log('thisPage', thisPage);
  }, [thisPage]);

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
        <li>
          <Button
            type="ghost"
            size={buttonSizeFilter(size)}
            id={`pagination-button-prev`}
            onClick={() => resolveOnClick('prev')}
            isIconMode={true}
            iconOnly={<ArrowLeftLineIcon />}
            state={thisPage === 1 ? 'disabled' : 'default'}
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
                {totalCount}
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
            state={thisPage === totalCount ? 'disabled' : 'default'}
          />
        </li>
      </ul>
    </div>
  );
};

export { Pagination };
