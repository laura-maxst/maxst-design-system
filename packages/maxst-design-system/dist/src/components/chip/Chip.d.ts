import React from 'react';
interface ChipProps {
    id?: string;
    type: 'default' | 'tertiary' | 'color-mint' | 'color-bluegray' | 'color-magenta' | 'color-purple' | 'color-blue';
    size: 'xl' | 'l' | 's';
    children: string;
    state?: 'default' | 'pressed';
    action?: 'filter' | 'check';
    checked?: boolean;
    iconCheck?: React.ReactNode;
    iconLeft?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onChange?: (id: string, checked?: boolean) => void;
    onClick?: (id: string, checked?: boolean) => void;
}
declare const Chip: ({ id, type, size, state, action, checked, iconCheck, iconLeft, className, children, onChange, onClick, disabled, ...props }: ChipProps) => React.JSX.Element;
export { Chip };
