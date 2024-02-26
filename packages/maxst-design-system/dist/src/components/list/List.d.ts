import type { listItemProps } from './ListItem';
interface listProps {
    listItemData: listItemProps[];
    alignTop?: boolean;
}
declare const List: ({ listItemData, alignTop }: listProps) => JSX.Element;
export { List };
