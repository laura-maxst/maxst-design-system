import React from 'react';
import { TextField } from '@components/textField';
import { SearchLineIcon } from '@maxst-designsystem/icons';

interface InputGroupProps {
  id: string;
  size?: 'l' | 's';
  placeholder: string;
  disabled?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  resetButton?: boolean;
  onChange?: (value: any) => void;
  // onClick?: (e: any) => void;
  className?: string;
  value?: string | number;
}

const SearchBar = ({
  id,
  size,
  placeholder,
  disabled,
  fullWidth,
  helperText,
  resetButton,
  onChange,
  value,
  className,
}: InputGroupProps) => {
  return (
    <div
      className={[
        `search-wrap`,
        fullWidth && 'fullWidth',
        className && className,
      ].join(' ')}
    >
      <TextField
        id={id}
        size={size}
        placeholder={placeholder}
        iconLeft={<SearchLineIcon />}
        disabled={disabled}
        onChange={onChange}
        helperText={helperText}
        resetButton={resetButton}
        value={value}
      />
    </div>
  );
};

export { SearchBar };
