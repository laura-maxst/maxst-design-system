import React from 'react';
interface ContainerProps {
    full?: boolean;
    className?: string;
    maxWidth?: string;
    align?: 'left' | 'center' | 'right';
    children: React.ReactNode;
}
declare const Container: ({ full, className, maxWidth, align, children, ...props }: ContainerProps) => React.JSX.Element;
export { Container };
