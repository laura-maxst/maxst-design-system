import React from 'react';
interface BoxGroupPropsType {
    align?: 'left' | 'right' | 'center' | 'between';
    direction?: 'vertical' | 'horizontal';
    gap?: number;
    wrap?: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const BoxGroup: ({ align, direction, gap, wrap, children, className, }: BoxGroupPropsType) => React.JSX.Element;
export { BoxGroup };
