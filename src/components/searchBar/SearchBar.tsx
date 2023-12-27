import React from 'react';
import { TextField } from '@components/textField';
import { SearchLineIcon } from '@maxst-designsystem/icons';

interface InputGroupProps {
  id: string;
  size?: 'l' | 's';
  placeholder: string;
  disabled?: boolean;
  fullWidth?: boolean;
  resetButton?: boolean;
  // align?: 'left' | 'right' | 'center';
  onChange?: (value: any) => void;
  // onClick?: (e: any) => void;
}

const SearchBar = ({
  id,
  size,
  placeholder,
  disabled,
  fullWidth,
  resetButton,
  // align,
  onChange,
}: InputGroupProps) => {
  return (
    <div
      className={[
        `search-wrap`,
        fullWidth && 'fullWidth',
        // align && align
      ].join(' ')}
    >
      <TextField
        id={id}
        size={size}
        placeholder={placeholder}
        iconLeft={<SearchLineIcon />}
        disabled={disabled}
        onChange={onChange}
        resetButton={resetButton}
      />
    </div>
  );
};

export { SearchBar };
