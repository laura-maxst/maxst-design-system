import React, { useEffect, useState } from 'react';
import { TextLabel, Text } from '@components/text';
import {
  ErrorCircleLineBoldIcon,
  CheckCircleLineBoldIcon,
} from '@maxst-designsystem/icons';
import { InputGroupPropsType } from './textfieldType';

const InputGroup = ({
  id,
  label,
  state,
  fullWidth,
  required,
  helperText,
  disabled,
  children,
  className,
}: InputGroupPropsType) => {
  const [thisState, setThisState] = useState<
    'default' | 'pressed' | 'disabled' | 'error' | 'success'
  >('default');

  useEffect(() => {
    state && setThisState(state);
  }, [state]);

  return (
    <>
      <div
        className={[
          'mds-input-root',
          `input__group`,
          fullWidth && 'fullWidth',
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

        <div className="input-box">
          {thisState &&
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { state: thisState });
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
