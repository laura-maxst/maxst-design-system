import React from 'react';
interface ContainerProps {
    full?: boolean;
    className?: string;
    children: React.ReactNode;
}
declare const Container: ({ full, className, children, ...props }: ContainerProps) => JSX.Element;
export default Container;
