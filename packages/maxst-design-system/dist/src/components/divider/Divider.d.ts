import React from 'react';
interface DividerProps {
    type?: 'default' | 'accent';
    direction?: 'vertical' | 'horizontal';
    children?: string | React.ReactNode;
}
declare const Divider: ({ type, direction, children }: DividerProps) => JSX.Element;
export { Divider };
