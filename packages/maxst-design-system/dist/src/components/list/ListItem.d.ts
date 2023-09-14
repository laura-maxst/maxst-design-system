import React from 'react';
interface listItemProps {
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
}
export declare const ListItem: ({ id, title, text, iconLeft, iconRightData, avatarIcon, image, checkboxData, switchData, labelData, alignTop, }: listItemProps) => JSX.Element;
export {};
