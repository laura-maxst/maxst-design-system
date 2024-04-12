import React from 'react';
interface CheckboxPropsType {
    id: string;
    mode?: 'primary' | 'secondary';
    type?: 'selected' | 'indeterminate';
    state?: 'default' | 'pressed' | 'disabled' | 'error';
    size: 'l' | 's';
    label?: string;
    helperText?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
    className?: string;
}
declare function Checkbox({ id, type, mode, state, size, disabled, label, helperText, checked, onChange, onClick, className, }: CheckboxPropsType): React.JSX.Element;
export { Checkbox };
export type { CheckboxPropsType };
