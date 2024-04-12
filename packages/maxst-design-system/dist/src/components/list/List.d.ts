import React from 'react';
import type { listItemProps } from './ListItem';
interface listProps {
    listItemData: listItemProps[];
    alignTop?: boolean;
    className?: string;
}
declare const List: ({ listItemData, alignTop, className }: listProps) => React.JSX.Element;
export { List };
