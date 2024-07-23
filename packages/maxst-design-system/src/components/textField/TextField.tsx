import React, { useEffect, useState, forwardRef } from 'react';
import { TextLabel, Text } from '@components/text';
import type { textFieldPropsType } from './textfieldType';
import {
  CloseCircleFillIcon,
  ErrorCircleLineBoldIcon,
  CheckCircleLineBoldIcon,
  ViewFillIcon,
  ViewOffFillIcon,
} from '@maxst-designsystem/icons';

const TextField = forwardRef(function TextField(
  {
    id,
    type = 'text',
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
    onKeyDown,
    renderValue,
    readOnly = false,
    minHeight,
    maxHeight,
    className,
    ...props
  }: textFieldPropsType,
  ref: any,
) {
  const [resoleValue, setResolveValue] = useState<string | number>('');
  const [thisState, setThisState] = useState<string>('default');
  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [thisType, setThisType] = useState<string>('text');
  const [valueLength, setValueLength] = useState<number>(0);
  const [isRenderValueMode, setIsRenderValueMode] = useState<boolean>(false);
  const [rightIconLength, setRightIconLength] = useState<number>(0);

  const onMultilineCheck = (valueLength: number) => {
    setValueLength(valueLength);

    if (typeof maxLength === 'number' && valueLength > Number(maxLength)) {
      setThisState('error');
    } else if (typeof minLength === 'number' && valueLength < minLength) {
      setThisState('error');
    } else {
      setThisState('typing');
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
      onMultilineCheck(e.target.value.length);

      if (size === 'auto') {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
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
    if (onChange) {
      onChange('');
    }
  };

  const onVisibilityPassword = () => {
    if (thisType === 'text') {
      setThisType('password');
    } else {
      setThisType('text');
    }
  };

  useEffect(() => {
    const rightIconArr = [
      Boolean(resetButton),
      Boolean(password),
      Boolean(iconRight),
    ].filter((x) => x == true);
    setRightIconLength(rightIconArr.length);
    console.log(rightIconArr.length);
  }, [resetButton, password, iconRight]);

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
    if (multiLine && value) {
      const valueLengthCheck = String(value).length;
      setResolveValue(value);
      setValueLength(valueLengthCheck);

      if (valueLengthCheck > Number(maxLength)) {
        setThisState('error');
      }
    } else {
      if (typeof maxLength === 'number' && value) {
        const valuefilter = String(value).slice(0, maxLength);
        setResolveValue(valuefilter);
      } else {
        setResolveValue(value !== undefined ? value : '');
      }
    }
  }, [maxLength, multiLine, value]);

  useEffect(() => {
    if (renderValue) {
      if (typeof renderValue === 'string') {
        setIsRenderValueMode(true);
      } else {
        if (renderValue.props.children.length) {
          setIsRenderValueMode(true);
        } else {
          setIsRenderValueMode(false);
          setResolveValue('');
        }
      }
    }
  }, [renderValue]);

  useEffect(() => {
    type && setThisType(type);
  }, [type]);

  useEffect(() => {
    if (password) {
      setThisType('password');
    } else {
      setThisType('text');
    }
  }, [password]);

  return (
    <div
      className={[
        'mds-input-root',
        `textfield textfield__text-${size ? size : 'l'}-${
          (disabled && 'disabled') || thisState
        }`,
        helperText ? 'has-helperText' : null,
        iconLeft ? 'has-left' : null,
        iconRight || resetButton || password
          ? `has-right icon-${rightIconLength}`
          : null,
        isRenderValueMode ? 'render-value-mode' : null,
        className ? className : '',
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
        style={
          size === 'auto' ? { minHeight: minHeight, maxHeight: maxHeight } : {}
        }
      >
        {!multiLine && iconLeft && <div className="left_icon">{iconLeft}</div>}
        {isRenderValueMode &&
          (typeof renderValue === 'string' ? (
            <div className="textfield__render-value-box">
              <Text type="body" size="l">
                {renderValue}
              </Text>
            </div>
          ) : (
            renderValue
          ))}
        {multiLine ? (
          <textarea
            ref={ref}
            rows={1}
            readOnly={readOnly}
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
            onKeyDown={onKeyDown}
          />
        ) : (
          <input
            ref={ref}
            readOnly={readOnly}
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
            onKeyDown={onKeyDown}
            autoComplete={password ? 'off' : 'on'}
          />
        )}
        {(Boolean(!disabled && !multiLine) ||
          Boolean(!multiLine && iconRight)) && (
          <div className={`right_icon_box`}>
            {!disabled && !multiLine && (
              <>
                {showResetButton && resoleValue && thisState !== 'disabled' && (
                  <span className="button reset_button" onClick={onClearValue}>
                    <CloseCircleFillIcon />
                  </span>
                )}
                {password && (
                  <span
                    className="visibility-password-control"
                    onClick={onVisibilityPassword}
                  >
                    {thisType === 'text' ? (
                      <ViewOffFillIcon />
                    ) : (
                      <ViewFillIcon />
                    )}
                  </span>
                )}
              </>
            )}
            {!multiLine && iconRight && (
              <div className="right_icon">{iconRight}</div>
            )}
          </div>
        )}
      </div>
      {(helperText || multiLine) && (
        <Text type="body" size="s" className="helper-text">
          {thisState === 'error' && (
            <span className="icon-error">
              <ErrorCircleLineBoldIcon />
            </span>
          )}
          {thisState === 'success' && (
            <span className="icon-success">
              <CheckCircleLineBoldIcon />
            </span>
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
});

export { TextField };
