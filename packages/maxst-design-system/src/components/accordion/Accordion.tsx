import { Title } from '@components/title';
import { ArrowDownLineIcon } from '@maxst-designsystem/icons';
import React, { useEffect, useState } from 'react';

interface AccordionProps {
  width?: string;
  items: {
    id: string;
    head: React.ReactNode | string;
    contents: React.ReactNode | string;
    disabled?: boolean;
  }[];
  expandIcon?: React.ReactNode;
  defaultSelectItem?: string;
  expandControl?: boolean;
  showExpandIcon?: boolean;
}

const Accordion = ({
  width,
  items,
  expandIcon,
  defaultSelectItem,
  expandControl = true,
  showExpandIcon = true,
}: AccordionProps) => {
  const [isOpenBody, setIsOpenBody] = useState<boolean>(false);
  const [openBody, setOpenBody] = useState<string | null>(null);
  const [height, setHeight] = useState<number>(0);
  const [clickItem, setClickItem] = useState<HTMLElement>();
  const [clickItemPerent, setClickItemPerent] = useState<HTMLElement>();

  const onClickHead = (e: any, clickId: string) => {
    if (!e.target.classList.contains('disabled') && expandControl) {
      const clickIditem = document.getElementById(`${clickId}-item`);
      const clickItemPerent = document.getElementById(
        `${clickId}`,
      )?.parentElement;

      clickItemPerent && setClickItemPerent(clickItemPerent);

      clickIditem && setClickItem(clickIditem);
      clickIditem && setHeight(clickIditem.scrollHeight);

      if (openBody == clickId) {
        setIsOpenBody(!isOpenBody);
      } else {
        setOpenBody(clickId);
        setIsOpenBody(true);
      }
    }
  };

  useEffect(() => {
    if (defaultSelectItem) {
      const defaultSelectMenu = document.getElementById(
        `${defaultSelectItem}-item`,
      );
      setOpenBody(defaultSelectItem);
      setIsOpenBody(true);
      defaultSelectMenu && setClickItem(defaultSelectMenu);
      defaultSelectMenu && setHeight(defaultSelectMenu.scrollHeight);
    }
  }, [defaultSelectItem]);

  useEffect(() => {
    if (clickItemPerent) {
      const allItem = clickItemPerent.querySelectorAll(
        '.mds-accordion__item_body',
      ) as any;
      for (const item of allItem) {
        item.style.height = '0';
      }
      if (clickItem) {
        if (isOpenBody) {
          clickItem.style.height = `${height}px`;
        } else {
          clickItem.style.height = '0';
        }
      }
    }
  }, [clickItem, isOpenBody, height, clickItemPerent]);

  return (
    <div
      className="mds-accordion-wrap"
      style={{ width: width ? width : '100%' }}
    >
      {items.map((itemData) => {
        return (
          <div
            key={itemData.id}
            className={[
              'mds-accordion__item',
              itemData.disabled ? 'disabled' : '',
            ].join(' ')}
            id={itemData.id}
          >
            <div
              id={itemData.id + '-head'}
              className={[
                'mds-accordion__item__head',
                itemData.disabled ? 'disabled' : '',
                !expandControl ? 'non-control' : '',
              ].join(' ')}
              onClick={(e) => onClickHead(e, itemData.id)}
            >
              {typeof itemData.head === 'string' ? (
                <Title role={3} type="title" size="xs">
                  {itemData.head}
                </Title>
              ) : (
                itemData.head
              )}
              <div
                className={[
                  'accordion-icon',
                  openBody === itemData.id && isOpenBody ? 'open' : 'close',
                ].join(' ')}
              >
                {showExpandIcon &&
                  (expandIcon ? expandIcon : <ArrowDownLineIcon />)}
              </div>
            </div>
            <div
              id={itemData.id + '-item'}
              className={[
                'mds-accordion__item_body',
                openBody === itemData.id && isOpenBody ? 'open' : 'close',
              ].join(' ')}
            >
              {itemData.contents}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Accordion };
