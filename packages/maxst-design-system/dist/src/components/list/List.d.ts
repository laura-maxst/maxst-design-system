import type { listItemProps } from './ListItem';
interface listProps {
    listItemData: listItemProps[];
    alignTop?: boolean;
    className?: string;
}
declare const List: ({ listItemData, alignTop, className }: listProps) => JSX.Element;
export { List };
