import React from 'react';
interface DividerPropsType {
    type?: 'default' | 'accent';
    direction?: 'vertical' | 'horizontal';
    children?: string | React.ReactNode;
    className?: string;
}
declare const Divider: ({ type, direction, children, className, }: DividerPropsType) => React.JSX.Element;
export { Divider };
