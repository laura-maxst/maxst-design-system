import React from 'react';
interface BreadcrumbProps {
    moreButton?: boolean;
    thisPage: string;
    homeButton?: {
        id: string;
        icon?: React.ReactNode;
        onMoveHome?: () => void;
    };
    menuData: {
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
    }[];
    className?: string;
}
declare const Breadcrumb: ({ menuData, moreButton, thisPage, homeButton, className, }: BreadcrumbProps) => JSX.Element;
export { Breadcrumb };
