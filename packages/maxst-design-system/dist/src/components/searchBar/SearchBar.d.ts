import React from 'react';
interface InputGroupProps {
    id: string;
    size?: 'l' | 's';
    placeholder: string;
    disabled?: boolean;
    helperText?: string;
    resetButton?: boolean;
    onChange?: (value: any) => void;
    className?: string;
    value?: string | number;
}
declare const SearchBar: React.ForwardRefExoticComponent<InputGroupProps & React.RefAttributes<unknown>>;
export { SearchBar };
