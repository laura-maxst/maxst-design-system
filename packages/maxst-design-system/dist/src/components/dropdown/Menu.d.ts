import React from 'react';
type DropDownMenuProps = {
    id: string;
    label: string;
    size?: 'l' | 's';
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    onChange: (id: string, label: string) => void;
    onClick: (id: string, label: string) => void;
    selected?: boolean;
};
declare const DropdownMenu: ({ id, label, size, iconLeft, iconRight, disabled, subLabel, onChange, onClick, selected, }: DropDownMenuProps) => JSX.Element;
export { DropdownMenu };
