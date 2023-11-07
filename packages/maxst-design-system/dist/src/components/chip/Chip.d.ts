import React from 'react';
interface ChipProps {
    type: 'default' | 'tertiary' | 'color-mint' | 'color-bluegray' | 'color-magenta' | 'color-purple' | 'color-blue';
    size: 'xl' | 'l' | 's';
    children: string;
    state?: 'default' | 'pressed' | 'disabled';
    action?: 'filter' | 'check';
    checked?: boolean;
    iconCheck?: React.ReactNode;
    iconLeft?: React.ReactNode;
    className?: string;
    onChange?: (checked: boolean) => void;
    onClick?: (checked: boolean) => void;
}
declare const Chip: ({ type, size, state, action, checked, iconCheck, iconLeft, className, children, onChange, onClick, ...props }: ChipProps) => JSX.Element;
export { Chip };
