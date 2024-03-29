import { CheckboxPropsType } from '@components/checkbox';
interface CheckboxGroupProps {
    id: string;
    type?: 'selected' | 'indeterminate';
    state?: 'default' | 'pressed' | 'disabled' | 'error';
    size: 'l' | 's';
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    controlMode?: boolean;
    helperText?: string;
    align?: 'left' | 'right';
    direction?: 'vertical' | 'horizontal';
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
    options: CheckboxPropsType[];
    className?: string;
}
declare const CheckboxGroup: ({ id, type, state, size, disabled, label, checked, controlMode, helperText, align, direction, onClick, onChange, options, className, }: CheckboxGroupProps) => JSX.Element;
export { CheckboxGroup };
