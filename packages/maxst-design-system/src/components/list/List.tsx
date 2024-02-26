import React from 'react';
import { ListItem } from './ListItem';
import type { listItemProps } from './ListItem';

interface listProps {
  listItemData: listItemProps[];
  alignTop?: boolean;
}

const List = ({ listItemData, alignTop }: listProps) => {
  return (
    <div className="mds-list-wrap">
      {listItemData.map((listItem) => {
        return <ListItem key={listItem.id} alignTop={alignTop} {...listItem} />;
      })}
    </div>
  );
};

export { List };
