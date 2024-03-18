import React, { useEffect, useRef, useState } from 'react';
import { Text } from '@components/text';
import {
  MinusLineBoldIcon,
  CheckLineBoldIcon,
  ErrorCircleLineBoldIcon,
} from '@maxst-designsystem/icons';

interface CheckboxPropsType {
  id: string;
  mode?: 'primary' | 'secondary';
  type?: 'selected' | 'indeterminate';
  state?: 'default' | 'pressed' | 'disabled' | 'error';
  size: 'l' | 's';
  label?: string;
  helperText?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  className?: string;
}
function Checkbox({
  id,
  type,
  mode,
  state,
  size,
  disabled,
  label,
  helperText,
  checked,
  onChange,
  onClick,
  className,
}: CheckboxPropsType) {
  const checkboxRef: any = useRef(null);
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

    checkboxRef.current.children[0].classList.add('on');

    setTimeout(() => {
      checkboxRef.current.children[0].classList.remove('on');
    }, 700);

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
    <div
      className={['checkbox-wrap', className ? className : ''].join(' ')}
      ref={checkboxRef}
    >
      {label ? (
        <label htmlFor={id} className={['checkbox-label'].join(' ')}>
          <span
            className={[
              'checkbox',
              `checkbox__${size}--${(disabled && 'disabled') || thisState}__${
                mode ? mode : 'primary'
              }`,
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
            `checkbox__${size}--${(disabled && 'disabled') || thisState}__${
              mode ? mode : 'primary'
            }`,
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
            <span className="icon-error">
              <ErrorCircleLineBoldIcon />
            </span>
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
