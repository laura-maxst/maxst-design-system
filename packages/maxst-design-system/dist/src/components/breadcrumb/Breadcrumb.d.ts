import React from 'react';
interface BreadcrumItemPropsType {
    id: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    onMovePage?: () => void;
    onMoveSubPage?: (targetData: object) => void;
    subMenu?: {
        id: string;
        label: string;
        icon?: React.ReactNode;
        disabled?: boolean;
    }[];
}
interface BreadcrumbPropsType {
    moreButton?: boolean;
    thisPage: string;
    homeButton?: {
        id: string;
        icon?: React.ReactNode;
        onMoveHome?: () => void;
    };
    menuData: BreadcrumItemPropsType[];
    className?: string;
}
declare const Breadcrumb: ({ menuData, moreButton, thisPage, homeButton, className, }: BreadcrumbPropsType) => React.JSX.Element;
export { Breadcrumb };
