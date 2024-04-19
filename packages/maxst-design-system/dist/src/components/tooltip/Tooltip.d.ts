import React from 'react';
interface TooltipPropsType {
    title?: string;
    text?: string;
    children: React.ReactNode;
    customContent?: any;
    align?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left';
    arrow?: boolean;
    mode?: 'dark-mode' | 'light-mode';
    className?: string;
}
declare const Tooltip: ({ title, text, customContent, children, align, arrow, mode, className, }: TooltipPropsType) => React.JSX.Element;
export { Tooltip };
export type { TooltipPropsType };
