interface SwitchProps {
    id: string;
    iconMode?: boolean;
    size?: 'l' | 's';
    state?: 'default' | 'pressed' | 'disabled';
    label?: string;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    helperText?: string;
    onClick?: (e: any) => void;
}
declare const Switch: ({ id, iconMode, size, state, label, className, checked, disabled, helperText, onClick, }: SwitchProps) => JSX.Element;
export default Switch;
