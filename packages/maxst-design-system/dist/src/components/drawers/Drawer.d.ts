import React from 'react';
interface DrawerPropsType {
    width?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    position?: 'left' | 'right' | 'top' | 'bottom';
    children?: string | any;
    isCloseButton?: boolean;
    open: boolean;
    onClose: () => void;
    closeButtonIcon?: React.ReactNode;
    isDim?: boolean;
    className?: string;
}
declare const Drawer: ({ width, header, footer, position, children, isCloseButton, open, onClose, closeButtonIcon, isDim, className, }: DrawerPropsType) => JSX.Element;
export { Drawer };
export type { DrawerPropsType };
