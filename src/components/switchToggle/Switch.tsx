import React, { useEffect, useState } from 'react';
import { Text } from '@components/text';
import {
  CheckLineBoldIcon,
  CloseLineBoldIcon,
} from '@maxst-designsystem/icons';

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
  checkOffIcon?: React.ReactNode;
  checkOnIcon?: React.ReactNode;
  onClick?: (e: any) => void;
}

const Switch = ({
  id,
  iconMode,
  size,
  state,
  label,
  className,
  checked,
  disabled,
  helperText,
  checkOffIcon,
  checkOnIcon,
  onClick,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [thisState, setThisState] = useState<string>('default');
  const resolveOnClick = (e: any) => {
    setIsChecked(e.target.checked);
    if (!onClick) {
      return;
    }
    onClick(e.target.checked);
  };

  useEffect(() => {
    setIsChecked(Boolean(checked));
  }, []);

  useEffect(() => {
    if (typeof state === 'string') {
      setThisState(state);
    }
  }, [state]);

  return (
    <div
      className={[
        'switch-toggle-wrap',
        label && 'label-mode',
        size ? `switch-toggle-${size}` : 'switch-toggle-l',
        disabled ? 'disabled' : thisState,
      ].join(' ')}
    >
      <label
        htmlFor={id}
        className={[
          'switch-toggle',
          `switch-toggle__${size ? size : 'l'}--${
            (disabled && 'disabled') || thisState
          }`,
          isChecked ? 'checked' : '',
          className ? className : '',
        ].join(' ')}
        onClick={resolveOnClick}
      >
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          defaultChecked={checked}
        />
        <span className="switch-button">
          {iconMode &&
            (isChecked ? (
              checkOnIcon ? (
                checkOnIcon
              ) : (
                <CheckLineBoldIcon />
              )
            ) : checkOffIcon ? (
              checkOffIcon
            ) : (
              <CloseLineBoldIcon />
            ))}
        </span>
        {label && (
          <Text type="body" size="m">
            {label}
          </Text>
        )}
      </label>
      {helperText && (
        <Text
          type="body"
          size="s"
          className={['helper-text', disabled && 'disabled'].join(' ')}
        >
          {helperText}
        </Text>
      )}
    </div>
  );
};

export { Switch };
