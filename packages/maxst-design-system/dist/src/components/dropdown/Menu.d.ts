import React from 'react';
type DropDownMenuProps = {
    id: string;
    label: string;
    size?: 'l' | 's';
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    onClick: (id: string, label: string) => void;
};
declare const DropdownMenu: ({ id, label, size, iconLeft, iconRight, disabled, subLabel, onClick, }: DropDownMenuProps) => JSX.Element;
export { DropdownMenu };
