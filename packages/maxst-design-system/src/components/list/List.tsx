import React from 'react';
import { ListItem } from './ListItem';
import type { listItemProps } from './ListItem';

interface listProps {
  listItemData: listItemProps[];
  alignTop?: boolean;
  className?: string;
}

const List = ({ listItemData, alignTop, className }: listProps) => {
  return (
    <div className={['mds-list-wrap', className ? className : ''].join(' ')}>
      {listItemData.map((listItem) => {
        return <ListItem key={listItem.id} alignTop={alignTop} {...listItem} />;
      })}
    </div>
  );
};

export { List };
