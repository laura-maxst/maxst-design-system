import React from 'react';
import { ListItem } from './ListItem';
import type { listItemProps } from './ListItem';

interface listProps {
  // listItemData: listItemProps[];
  listItemData: {
    id: string;
    title: string;
    text?: string;
    iconLeft?: React.ReactNode;
    iconRightData?: { icon: React.ReactNode; onClick: () => void };
    avatarIcon?: React.ReactNode;
    image?: React.ReactNode;
    checkboxData?: any;
    switchData?: any;
    labelData?: any;
    alignTop?: boolean;
  }[];
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
