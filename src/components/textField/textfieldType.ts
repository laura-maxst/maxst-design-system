export interface textFieldPropsType {
  id?: string;
  type?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  required?: boolean;
  password?: boolean;
  state?:
    | 'default'
    | 'onfocused'
    | 'typing'
    | 'completed'
    | 'error'
    | 'success'
    | 'disabled';
  size?: 's' | 'l' | 'auto';
  disabled?: boolean;
  helperText?: string;
  resetButton?: boolean;
  minLength?: number;
  maxLength?: number;
  multiLine?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: any) => void;
  onChange?: (value: any) => void;
  onKeyDown?: (e: any) => void;
  renderValue?: string | React.ReactNode | JSX.Element | any;
  readOnly?: boolean;
  minHeight?: number;
  maxHeight?: number;
  className?: string;
}

export interface InputChipType {
  id?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  state?:
    | 'default'
    | 'onfocused'
    | 'typing'
    | 'completed'
    | 'error'
    | 'success'
    | 'disabled';
  size?: 's' | 'l';
  disabled?: boolean;
  helperText?: string;
  minInputLength?: number;
  maxInputLength?: number;
  minChipLength?: number;
  maxChipLength?: number;
  onClick?: (e: any) => void;
  onChange?: (data: any) => void;
  className?: string;
  chipColor?:
    | 'default'
    | 'tertiary'
    | 'color-mint'
    | 'color-bluegray'
    | 'color-magenta'
    | 'color-purple'
    | 'color-blue';
  chipValueData?: { id: string; label: string }[];
}

export interface InputGroupPropsType {
  id?: string;
  label?: string;
  state?: 'default' | 'pressed' | 'disabled' | 'error' | 'success';
  fullWidth?: boolean;
  required?: boolean;
  helperText?: string;
  disabled?: boolean;
  children: React.ReactNode | any;
  className?: string;
}
