import React from 'react';
interface textFieldProps {
    id?: string;
    value?: any;
    label?: string;
    placeholder?: string;
    required?: boolean;
    password?: boolean;
    state?: 'default' | 'onfocused' | 'typing' | 'completed' | 'error' | 'success' | 'disabled';
    size?: 's' | 'l';
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
}
declare function TextField({ id, value, label, placeholder, required, password, state, size, disabled, helperText, resetButton, minLength, maxLength, multiLine, iconLeft, iconRight, onChange, onClick, ...props }: textFieldProps): JSX.Element;
export { TextField };