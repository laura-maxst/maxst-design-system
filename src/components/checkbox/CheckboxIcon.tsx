import React, { useEffect, useState } from 'react';

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

function CheckboxIcon({
  id,
  size,
  disabled,
  checked,
  checkOffIcon,
  checkOnIcon,
  onChange,
  onClick,
}: CheckboxIconPropsType) {
  // checked 여부
  const [thisIsChecked, setThisIsChecked] = useState<boolean>(
    checked ? true : false,
  );

  const resolveOnChange = (e: any) => {
    if (!onChange) {
      return;
    }
    onChange(e.target);
    return;
  };

  const onChecked = (e: any, id: string) => {
    if (disabled) {
      return;
    }

    if (e.target.checked) {
      setThisIsChecked(true);
    } else {
      setThisIsChecked(false);
    }

    if (!onClick) {
      return;
    }
    onClick(e.target);
  };

  useEffect(() => {
    if (checked === true) {
      setThisIsChecked(true);
    } else if (checked === false) {
      setThisIsChecked(false);
    }
  }, [checked]);

  return (
    <label
      htmlFor={id}
      className={[
        'mds-root',
        'checkbox',
        'checkbox-icon',
        `checkbox__${size}`,
        `${disabled ? 'disabled' : ''}`,
        `${thisIsChecked ? 'checked' : ''}`,
      ].join(' ')}
    >
      {thisIsChecked ? checkOnIcon : checkOffIcon}
      <input
        id={id}
        type="checkbox"
        defaultChecked={checked ? checked : false}
        disabled={disabled}
        onClick={(e) => onChecked(e, id)}
        onChange={(e) => resolveOnChange(e)}
      />
    </label>
  );
}

export { CheckboxIcon };
export type { CheckboxIconPropsType };
