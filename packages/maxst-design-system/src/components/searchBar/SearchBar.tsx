import React, { forwardRef } from 'react';
import { TextField } from '@components/textField';
import { SearchLineIcon } from '@maxst-designsystem/icons';

interface InputGroupPropsType {
  id: string;
  size?: 'l' | 's';
  placeholder: string;
  disabled?: boolean;
  helperText?: string;
  resetButton?: boolean;
  onChange?: (value: any) => void;
  // onClick?: (e: any) => void;
  className?: string;
  value?: string | number;
}

const SearchBar = forwardRef(function SearchBar(
  {
    id,
    size,
    placeholder,
    disabled,
    helperText,
    resetButton,
    onChange,
    value,
    className,
  }: InputGroupPropsType,
  ref: any,
) {
  return (
    <div className={[`search-wrap`, className && className].join(' ')}>
      <TextField
        ref={ref}
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
});

export { SearchBar };
