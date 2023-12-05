import React from 'react';
type MenuItemPropsType = {
    id: string;
    label: string;
    size?: 'l' | 's';
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    onChange?: (id: string, label: string) => void;
    onClick?: (id: string, label: string) => void;
    selected?: boolean;
    className?: string;
};
declare const MenuItem: ({ id, label, size, iconLeft, iconRight, disabled, subLabel, onChange, onClick, selected, className, }: MenuItemPropsType) => JSX.Element;
export { MenuItem };
export type { MenuItemPropsType };
