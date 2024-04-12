import React from 'react';
interface ButtonProps {
    id?: string;
    size: 'xl' | 'l' | 'm' | 's' | 'xs';
    onClick?: (e: any) => void;
    type: 'primary' | 'secondary' | 'tertiary' | 'error' | 'error-tertiary' | 'text' | 'link' | 'ghost';
    state?: 'default' | 'pressed' | 'disabled' | 'error';
    children?: React.ReactNode;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    isIconMode?: boolean;
    iconOnly?: React.ReactNode;
    isActionMode?: boolean;
    htmlType?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    buttonWidth?: string;
    className?: string;
}
declare const Button: ({ id, size, children, type, state, iconLeft, iconRight, isIconMode, iconOnly, isActionMode, loading, buttonWidth, className, onClick, ...props }: ButtonProps) => React.JSX.Element;
export { Button };
