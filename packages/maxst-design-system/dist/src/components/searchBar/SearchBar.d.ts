interface InputGroupProps {
    id: string;
    size?: 'l' | 's';
    placeholder: string;
    disabled?: boolean;
    fullWidth?: boolean;
    resetButton?: boolean;
    onChange?: (value: any) => void;
}
declare const SearchBar: ({ id, size, placeholder, disabled, fullWidth, resetButton, onChange, }: InputGroupProps) => JSX.Element;
export { SearchBar };
