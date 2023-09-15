import React from 'react';
interface BreadcrumItemProps {
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
interface BreadcrumbProps {
    menuData: BreadcrumItemProps[];
    moreButton?: boolean;
    thisPage: string;
    homeButton?: {
        id: string;
        icon?: React.ReactNode;
        onMoveHome?: () => void;
    };
}
declare const Breadcrumb: ({ menuData, moreButton, thisPage, homeButton, }: BreadcrumbProps) => JSX.Element;
export { Breadcrumb };
