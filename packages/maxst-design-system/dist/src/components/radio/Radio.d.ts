interface RadioPropsType {
    id: string;
    name: string;
    state?: 'default' | 'pressed' | 'disabled' | 'error';
    size: 'l' | 's';
    label: string;
    helperText?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
    className?: string;
}
declare function Radio({ id, name, state, size, disabled, label, helperText, checked, onChange, onClick, className, }: RadioPropsType): JSX.Element;
export { Radio };
export type { RadioPropsType };
