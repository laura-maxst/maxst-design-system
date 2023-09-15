interface CheckboxPropsType {
    id: string;
    type?: 'selected' | 'indeterminate';
    state?: 'default' | 'pressed' | 'disabled' | 'error';
    size: 'l' | 's';
    label?: string;
    helperText?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
}
declare function Checkbox({ id, type, state, size, disabled, label, helperText, checked, onChange, onClick, }: CheckboxPropsType): JSX.Element;
export { Checkbox };
export type { CheckboxPropsType };
