import React from 'react';
interface BadgeProps {
    type: 'number' | 'dot' | 'icon';
    size: 'xl' | 'l' | 'm' | 's';
    align?: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';
    color?: 'mint' | 'gray' | 'magenta';
    status?: 'default' | 'error' | 'warning' | 'information' | 'success';
    children?: React.ReactNode;
    number?: number | string;
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}
declare const Badge: ({ type, size, align, color, status, children, number, icon, onClick, className, }: BadgeProps) => React.JSX.Element;
export { Badge };
