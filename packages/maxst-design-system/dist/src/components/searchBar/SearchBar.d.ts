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
declare const SearchBar: ({ id, size, placeholder, disabled, helperText, resetButton, onChange, value, className, }: InputGroupProps) => JSX.Element;
export { SearchBar };
