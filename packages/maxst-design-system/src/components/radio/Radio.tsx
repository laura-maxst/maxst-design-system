import React, { useEffect, useRef, useState } from 'react';
import { Text } from '@components/text';
import { ErrorCircleLineBoldIcon } from '@maxst-designsystem/icons';

interface RadioPropsType {
  id: string;
  name: string;
  state?: 'default' | 'pressed' | 'disabled' | 'error';
  size: 'l' | 's';
  label: string;
  helperText?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  className?: string;
}

function Radio({
  id,
  name,
  state,
  size,
  disabled,
  label,
  helperText,
  checked,
  onChange,
  onClick,
  className,
}: RadioPropsType) {
  const radioRef: any = useRef(null);
  const [thisState, setThisState] = useState<string>('default');
  // checked 여부
  const [thisIsChecked, setThisIsChecked] = useState<boolean>(
    checked ? true : false,
  );

  const resolveOnChange = (e: any) => {
    if (!onChange) {
      return;
    }
    onChange(e);
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

    radioRef.current.children[0].classList.add('on');

    setTimeout(() => {
      radioRef.current.children[0].classList.remove('on');
    }, 700);

    if (!onClick) {
      return;
    }
    onClick(e);
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

  return (
    <div
      className={['radio-wrap', className ? className : ''].join(' ')}
      ref={radioRef}
    >
      {label ? (
        <label htmlFor={id} className={['', 'radio-label'].join(' ')}>
          <span
            className={[
              'radio',
              `radio__${size}--${(disabled && 'disabled') || thisState}`,
              `${thisIsChecked ? 'checked' : ''}`,
            ].join(' ')}
          >
            {thisIsChecked && <span className="dot"> </span>}
            <input
              type="radio"
              id={id}
              name={name}
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
            'radio',
            `radio__${size}--${(disabled && 'disabled') || thisState}`,
            `${thisIsChecked ? 'checked' : ''}`,
          ].join(' ')}
        >
          <input
            type="radio"
            id={id}
            name={name}
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
          {state === 'error' && (
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

export { Radio };
export type { RadioPropsType };
