import React from 'react';
import { ListItem } from './ListItem';

interface listProps {
  listItemData: {
    id: string;
    title: string;
    text?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    avatarIcon?: React.ReactNode;
    image?: React.ReactNode;
    checkMode?: boolean;
    switchMode?: boolean;
    label?: string;
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
