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
}
declare function Radio({ id, name, state, size, disabled, label, helperText, checked, onChange, onClick, }: RadioPropsType): JSX.Element;
export { Radio };
export type { RadioPropsType };
