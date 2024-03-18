import React from 'react';
interface DividerProps {
    type?: 'default' | 'accent';
    direction?: 'vertical' | 'horizontal';
    children?: string | React.ReactNode;
    className?: string;
}
declare const Divider: ({ type, direction, children, className }: DividerProps) => JSX.Element;
export { Divider };
