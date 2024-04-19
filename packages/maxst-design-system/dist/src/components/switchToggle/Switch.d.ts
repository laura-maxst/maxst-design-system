import React from 'react';
interface SwitchPropsType {
    id: string;
    iconMode?: boolean;
    size?: 'l' | 's';
    state?: 'default' | 'pressed' | 'disabled';
    label?: string;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    helperText?: string;
    checkOffIcon?: React.ReactNode;
    checkOnIcon?: React.ReactNode;
    onClick?: (data: any) => void;
}
declare const Switch: ({ id, iconMode, size, state, label, className, checked, disabled, helperText, checkOffIcon, checkOnIcon, onClick, }: SwitchPropsType) => React.JSX.Element;
export { Switch };
