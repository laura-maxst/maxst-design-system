import React from 'react';
import { TextLabel, Text } from '@components/text';
import {
  ErrorCircleLineBoldIcon,
  CheckCircleLineBoldIcon,
} from '@maxst-designsystem/icons';

interface InputGroupProps {
  id?: string;
  label?: string;
  state?: 'default' | 'pressed' | 'disabled' | 'error' | 'success';
  fullWidth?: boolean;
  required?: boolean;
  helperText?: string;
  disabled?: boolean;
  children: React.ReactNode | any;
}

const InputGroup = ({
  id,
  label,
  state,
  fullWidth,
  required,
  helperText,
  disabled,
  children,
}: InputGroupProps) => {
  return (
    <>
      <div className={[`input__group`, fullWidth && 'fullWidth'].join(' ')}>
        {label && (
          <label htmlFor={id}>
            <TextLabel size="m">
              {label} {required && <span className="required"> *</span>}
            </TextLabel>
          </label>
        )}

        <div className="input-box">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { state: state });
          })}
        </div>
        {helperText && (
          <Text
            type="body"
            size="s"
            className={['helper-text', (disabled && 'disabled') || state].join(
              ' ',
            )}
          >
            {state === 'error' && (
              <span className="icon-error">
                <ErrorCircleLineBoldIcon />
              </span>
            )}
            {state === 'success' && (
              <span className="icon-success">
                <CheckCircleLineBoldIcon />
              </span>
            )}
            <span className="text">{helperText}</span>
            {/* {helperText} */}
          </Text>
        )}
      </div>
    </>
  );
};

export { InputGroup };
