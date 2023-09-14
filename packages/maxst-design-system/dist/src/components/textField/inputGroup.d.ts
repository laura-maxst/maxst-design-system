import React from 'react';
interface InputGroupProps {
    id?: string;
    label?: string;
    state?: 'default' | 'pressed' | 'disabled' | 'error' | 'success';
    fullWidth?: boolean;
    required?: boolean;
    helperText?: string;
    disabled?: boolean;
    children: React.ReactNode | any;
}
export declare const InputGroup: ({ id, label, state, fullWidth, required, helperText, disabled, children, }: InputGroupProps) => JSX.Element;
export {};
