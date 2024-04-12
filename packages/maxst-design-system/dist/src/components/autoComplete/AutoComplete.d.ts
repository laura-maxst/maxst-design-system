import React from 'react';
interface AutoCompleteMenuType {
    id: string;
    label: string;
    iconLeft?: JSX.Element | React.ReactNode;
    iconRight?: JSX.Element | React.ReactNode;
    disabled?: boolean;
    subLabel?: string;
    size?: 'l' | 's';
}
interface AutoCompleteType {
    id: string;
    size?: 'l' | 's';
    className?: string;
    menuData: AutoCompleteMenuType[];
    onClick?: (e: any) => void;
    onChange?: (value: any) => void;
    children: React.ReactNode;
}
declare function AutoComplete({ id, size, className, menuData, onClick, onChange, children, }: AutoCompleteType): React.JSX.Element;
export { AutoComplete };
