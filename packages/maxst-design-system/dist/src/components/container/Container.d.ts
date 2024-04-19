import React from 'react';
interface ContainerPropsType {
    full?: boolean;
    className?: string;
    maxWidth?: string;
    align?: 'left' | 'center' | 'right';
    children: React.ReactNode;
}
declare const Container: ({ full, className, maxWidth, align, children, ...props }: ContainerPropsType) => React.JSX.Element;
export { Container };
