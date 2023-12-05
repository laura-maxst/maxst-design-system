import React from 'react';
interface BoxGroupPropsType {
    align?: 'left' | 'right' | 'center' | 'between';
    direction?: 'vertical' | 'horizontal';
    gap?: number;
    wrap?: boolean;
    children: React.ReactNode;
}
declare const BoxGroup: ({ align, direction, gap, wrap, children, }: BoxGroupPropsType) => JSX.Element;
export { BoxGroup };
