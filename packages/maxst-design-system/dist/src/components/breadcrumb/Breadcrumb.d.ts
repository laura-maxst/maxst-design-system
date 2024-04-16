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
    moreButton?: boolean;
    thisPage: string;
    homeButton?: {
        id: string;
        icon?: React.ReactNode;
        onMoveHome?: () => void;
    };
    menuData: BreadcrumItemProps[];
    className?: string;
}
declare const Breadcrumb: ({ menuData, moreButton, thisPage, homeButton, className, }: BreadcrumbProps) => React.JSX.Element;
export { Breadcrumb };
