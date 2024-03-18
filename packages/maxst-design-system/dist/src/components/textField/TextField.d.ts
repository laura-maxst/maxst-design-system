import React from 'react';
interface textFieldProps {
    id?: string;
    type?: string;
    value?: string | number;
    label?: string;
    placeholder?: string;
    required?: boolean;
    password?: boolean;
    state?: 'default' | 'onfocused' | 'typing' | 'completed' | 'error' | 'success' | 'disabled';
    size?: 's' | 'l' | 'auto';
    disabled?: boolean;
    helperText?: string;
    resetButton?: boolean;
    minLength?: number;
    maxLength?: number;
    multiLine?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    onClick?: (e: any) => void;
    onChange?: (e: any) => void;
    renderValue?: string | React.ReactNode | JSX.Element | any;
    readOnly?: boolean;
    minHeight?: number;
    maxHeight?: number;
    className?: string;
}
declare const TextField: React.ForwardRefExoticComponent<textFieldProps & React.RefAttributes<unknown>>;
export { TextField };
