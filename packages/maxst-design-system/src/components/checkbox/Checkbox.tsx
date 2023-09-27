import React, { useEffect, useState } from 'react';
import { Text } from '@components/text';
import {
  MinusLineBoldIcon,
  CheckLineBoldIcon,
  ErrorCircleLineBoldIcon,
} from '@maxst-designsystem/icons';

interface CheckboxPropsType {
  id: string;
  type?: 'selected' | 'indeterminate';
  state?: 'default' | 'pressed' | 'disabled' | 'error';
  size: 'l' | 's';
  label?: string;
  helperText?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
}
function Checkbox({
  id,
  type,
  state,
  size,
  disabled,
  label,
  helperText,
  checked,
  onChange,
  onClick,
}: CheckboxPropsType) {
  const [thisState, setThisState] = useState<string>('default');
  // checked 여부
  const [thisIsChecked, setThisIsChecked] = useState<boolean>(
    checked ? true : false,
  );
  const [thisType, setThisType] = useState<string>(type ? type : 'selected');

  const resolveOnChange = (e: any) => {
    if (!onChange) {
      return;
    }
    onChange(e.target);
    return;
  };

  const onChecked = (e: any) => {
    if (disabled || state === 'disabled') {
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
    if (typeof state === 'string') {
      setThisState(state);
    }
  }, [state]);

  useEffect(() => {
    if (checked === true) {
      setThisIsChecked(true);
    } else if (checked === false) {
      setThisIsChecked(false);
    }
  }, [checked]);

  useEffect(() => {
    if (typeof type === 'string') {
      setThisType(type);
    }
  }, [type]);

  return (
    <div className={['checkbox-wrap'].join(' ')}>
      {label ? (
        <label htmlFor={id} className={['', 'checkbox-label'].join(' ')}>
          <span
            className={[
              'checkbox',
              `checkbox__${size}--${(disabled && 'disabled') || thisState}`,
              `${thisIsChecked ? 'checked' : ''}`,
            ].join(' ')}
          >
            {thisType === 'selected' && thisIsChecked && <CheckLineBoldIcon />}
            {thisType === 'indeterminate' && thisIsChecked && (
              <MinusLineBoldIcon />
            )}
            <input
              id={id}
              type="checkbox"
              defaultChecked={checked}
              disabled={disabled}
              onClick={(e) => onChecked(e)}
              onChange={(e) => resolveOnChange(e)}
            />
          </span>
          <Text type="body" size="l">
            {label}
          </Text>
        </label>
      ) : (
        <label
          htmlFor={id}
          className={[
            'checkbox',
            `checkbox__${size}--${(disabled && 'disabled') || thisState}`,
            `${thisIsChecked ? 'checked' : ''}`,
          ].join(' ')}
        >
          {thisType === 'selected' && thisIsChecked && <CheckLineBoldIcon />}
          {thisType === 'indeterminate' && thisIsChecked && (
            <MinusLineBoldIcon />
          )}
          <input
            id={id}
            type="checkbox"
            defaultChecked={checked ? checked : false}
            disabled={disabled}
            onClick={(e) => onChecked(e)}
            onChange={(e) => resolveOnChange(e)}
          />
        </label>
      )}
      {helperText && (
        <Text
          type="body"
          size="s"
          className={[
            'helper-text',
            (disabled && 'disabled') || thisState,
          ].join(' ')}
        >
          {thisState === 'error' && (
            <div className="icon-error">
              <ErrorCircleLineBoldIcon />
            </div>
          )}
          <span className="text">{helperText}</span>
          {/* {helperText} */}
        </Text>
      )}
    </div>
  );
}

export { Checkbox };
export type { CheckboxPropsType };