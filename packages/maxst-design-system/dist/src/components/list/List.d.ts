import React from 'react';
interface listProps {
    listItemData: {
        id: string;
        title: string;
        text?: string;
        iconLeft?: React.ReactNode;
        iconRightData?: {
            icon: React.ReactNode;
            onClick: () => void;
        };
        avatarIcon?: React.ReactNode;
        image?: React.ReactNode;
        checkboxData?: any;
        switchData?: any;
        labelData?: any;
        alignTop?: boolean;
    }[];
    alignTop?: boolean;
}
declare const List: ({ listItemData, alignTop }: listProps) => JSX.Element;
export { List };
