import React from 'react';
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
declare const List: ({ listItemData, alignTop }: listProps) => JSX.Element;
export { List };
