interface InputGroupProps {
    id: string;
    size?: 'l' | 's';
    placeholder: string;
    disabled?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    resetButton?: boolean;
    onChange?: (value: any) => void;
    className?: string;
    value?: string | number;
}
declare const SearchBar: ({ id, size, placeholder, disabled, fullWidth, helperText, resetButton, onChange, value, className, }: InputGroupProps) => JSX.Element;
export { SearchBar };
