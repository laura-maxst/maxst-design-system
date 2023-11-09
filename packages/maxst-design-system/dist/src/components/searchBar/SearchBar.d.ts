interface InputGroupProps {
    id: string;
    size?: 'l' | 's';
    placeholder: string;
    disabled?: boolean;
    fullWidth?: boolean;
    resetButton?: boolean;
    align?: 'left' | 'right' | 'center';
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
}
declare const SearchBar: ({ id, size, placeholder, disabled, fullWidth, resetButton, align, onChange, }: InputGroupProps) => JSX.Element;
export { SearchBar };
