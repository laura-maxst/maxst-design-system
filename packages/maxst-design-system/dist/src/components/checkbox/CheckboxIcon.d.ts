import React from 'react';
interface CheckboxIconPropsType {
    id: string;
    size: 'l' | 's';
    disabled?: boolean;
    checked?: boolean;
    checkOffIcon: React.ReactNode;
    checkOnIcon: React.ReactNode;
    onChange?: (e: any) => void;
    onClick?: (e: any) => void;
}
declare function CheckboxIcon({ id, size, disabled, checked, checkOffIcon, checkOnIcon, onChange, onClick, }: CheckboxIconPropsType): React.JSX.Element;
export { CheckboxIcon };
export type { CheckboxIconPropsType };
