import React from 'react';
import { RadioPropsType } from '@components/radio';
interface RadioGroupPropsType {
    id: string;
    name: string;
    state?: 'default' | 'pressed' | 'disabled' | 'error';
    size: 'l' | 's';
    label?: string;
    disabled?: boolean;
    helperText?: string;
    align?: 'left' | 'right';
    direction?: 'vertical' | 'horizontal';
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
    options: RadioPropsType[];
    className?: string;
}
declare const RadioGroup: ({ id, name, state, size, disabled, label, helperText, align, direction, onClick, onChange, options, className, }: RadioGroupPropsType) => React.JSX.Element;
export { RadioGroup };
