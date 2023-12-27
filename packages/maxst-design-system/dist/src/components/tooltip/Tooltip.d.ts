import React from 'react';
interface TooltipProps {
    title?: string;
    text?: string;
    children: React.ReactNode;
    customContent?: any;
    align?: 'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left';
    arrow?: boolean;
    mode?: 'dark-mode' | 'light-mode';
}
declare const Tooltip: ({ title, text, customContent, children, align, arrow, mode, }: TooltipProps) => JSX.Element;
export { Tooltip };
export type { TooltipProps };
