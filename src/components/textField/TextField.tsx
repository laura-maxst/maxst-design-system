import React, { useEffect, useState } from 'react';
import { TextLabel, Text } from '@components/text';
import {
  CloseCircleFillBoldIcon,
  ErrorCircleLineBoldIcon,
  CheckCircleLineBoldIcon,
  ViewFillBoldIcon,
  ViewOffFillBoldIcon,
} from '@maxst-designsystem/icons';

interface textFieldProps {
  id?: string;
  value?: any;
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
  size?: 's' | 'l';
  disabled?: boolean;
  helperText?: string;
  resetButton?: boolean;
  minLength?: number;
  maxLength?: number;
  multiLine?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
}

function TextField({
  id,
  value,
  label,
  placeholder,
  required,
  password,
  state,
  size,
  disabled,
  helperText,
  resetButton,
  minLength,
  maxLength,
  multiLine,
  iconLeft,
  iconRight,
  onChange,
  onClick,
  ...props
}: textFieldProps) {
  const [resoleValue, setResolveValue] = useState<string>('');
  const [thisState, setThisState] = useState<string>('default');
  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [thisType, setThisType] = useState<string>('text');
  const [valueLength, setValueLength] = useState<number>(0);

  const onMaxLengthCheck = (valueLength: number) => {
    if (typeof maxLength === 'number') {
      setValueLength(valueLength);
      if (valueLength > Number(maxLength)) {
        setThisState('error');
      } else {
        setThisState('typing');
      }
    }
  };

  const onMinLengthCheck = (valueLength: number) => {
    if (typeof minLength === 'number') {
      if (valueLength < minLength) {
        setThisState('error');
      } else {
        setThisState('typing');
      }
    }
  };

  const resolveOnChange = (e: any) => {
    setResolveValue(e.target.value);
    if (multiLine) {
      onMaxLengthCheck(e.target.value.length);
    } else {
      onMinLengthCheck(e.target.value.length);
    }
    if (!onChange) {
      return;
    }
    onChange(e.target.value);
    return;
  };

  const onFocus = (e: any) => {
    if (thisState !== 'error') {
      setThisState('onfocused');
    }
  };

  const onBlur = (e: any) => {
    if (thisState !== 'error') {
      if (e.target.value) {
        setThisState('completed');
      } else {
        setThisState('default');
      }
    }
  };

  const onClearValue = () => {
    setResolveValue('');
    setThisState('default');
  };

  const onVisibilityPassword = () => {
    if (thisType === 'text') {
      setThisType('password');
    } else {
      setThisType('text');
    }
  };

  useEffect(() => {
    if (typeof resetButton === 'boolean') {
      setShowResetButton(!!resetButton);
    }
  }, [resetButton]);

  useEffect(() => {
    if (typeof state === 'string') {
      setThisState(state);
    }
  }, [state]);

  useEffect(() => {
    if (password) {
      setThisType('password');
    } else {
      setThisType('text');
    }
  }, [password]);

  useEffect(() => {
    if (multiLine && value) {
      const valueLengthCheck = value.length;
      setResolveValue(value);
      setValueLength(valueLengthCheck);
      if (valueLengthCheck > Number(maxLength)) {
        setThisState('error');
      }
    } else {
      if (typeof maxLength === 'number' && value) {
        const valuefilter = value.slice(0, maxLength);
        setResolveValue(valuefilter);
      } else {
        setResolveValue(value);
      }
    }
  }, [maxLength, multiLine, value]);

  return (
    <div
      className={[
        `textfield textfield__text-${size ? size : 'l'}-${
          (disabled && 'disabled') || thisState
        }`,
        helperText ? 'has-helperText' : '',
      ].join(' ')}
    >
      {label && (
        <label htmlFor={id}>
          <TextLabel size="m">
            {label} {required && <span className="required"> *</span>}
          </TextLabel>
        </label>
      )}
      <div
        className={['textfield-formControl', multiLine && 'multi-line'].join(
          ' ',
        )}
      >
        {!multiLine && iconLeft && iconLeft}
        {multiLine ? (
          <textarea
            id={id}
            placeholder={placeholder}
            disabled={
              (disabled ? disabled : false) ||
              (thisState === 'disabled' ? true : false)
            }
            value={resoleValue ? resoleValue : ''}
            onChange={(e) => resolveOnChange(e)}
            onFocus={(e) => onFocus(e)}
            onBlur={(e) => onBlur(e)}
            onClick={onClick}
          />
        ) : (
          <input
            id={id}
            placeholder={placeholder}
            type={thisType}
            disabled={
              (disabled ? disabled : false) ||
              (thisState === 'disabled' ? true : false)
            }
            value={resoleValue ? resoleValue : ''}
            onChange={(e) => resolveOnChange(e)}
            onFocus={(e) => onFocus(e)}
            onBlur={(e) => onBlur(e)}
            minLength={minLength && minLength}
            maxLength={maxLength && maxLength}
            onClick={onClick}
          />
        )}
        {!disabled && !multiLine && (
          <>
            {showResetButton && resoleValue && thisState !== 'disabled' && (
              <button onClick={onClearValue}>
                <CloseCircleFillBoldIcon />
              </button>
            )}
            {password && (
              <span onClick={onVisibilityPassword}>
                {thisType === 'text' ? (
                  <ViewOffFillBoldIcon />
                ) : (
                  <ViewFillBoldIcon />
                )}
              </span>
            )}
          </>
        )}

        {!multiLine && iconRight && iconRight}
      </div>
      {(helperText || multiLine) && (
        <Text type="body" size="s">
          {thisState === 'error' && (
            <div className="icon-error">
              <ErrorCircleLineBoldIcon />
            </div>
          )}
          {thisState === 'success' && (
            <div className="icon-success">
              <CheckCircleLineBoldIcon />
            </div>
          )}
          <span className="text">{helperText}</span>
          {multiLine && maxLength && (
            <span className="textarea__text-langth-check">
              {valueLength} / {maxLength}
            </span>
          )}
        </Text>
      )}
    </div>
  );
}
export { TextField };
