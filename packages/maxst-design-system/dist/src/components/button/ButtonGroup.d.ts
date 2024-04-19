import React from 'react';
interface ButtonGropPropsType {
    children: any | React.ReactNode;
    fullWidth?: boolean;
    align?: 'left' | 'right' | 'center';
    direction?: 'vertical' | 'horizontal';
    buttonWidth?: string;
    className?: string;
}
declare const ButtonGroup: ({ children, fullWidth, align, direction, buttonWidth, className, }: ButtonGropPropsType) => React.JSX.Element;
export { ButtonGroup };
