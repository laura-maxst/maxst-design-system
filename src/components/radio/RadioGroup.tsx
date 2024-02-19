import React, { useEffect, useState } from 'react';
import { Text, TextLabel } from '@components/text';
import { Radio, RadioPropsType } from '@components/radio';
import { ErrorCircleLineBoldIcon } from '@maxst-designsystem/icons';

interface RadioGroupProps {
  id: string;
  name: string;
  state?: 'default' | 'pressed' | 'disabled' | 'error';
  size: 'l' | 's';
  label?: string;
  disabled?: boolean;
  helperText?: string;
  align?: 'left' | 'right';
  direction?: 'vertical' | 'horizontal';
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  options: RadioPropsType[];
}

const RadioGroup = ({
  id,
  name,
  state,
  size,
  disabled,
  label,
  helperText,
  align,
  direction,
  onClick,
  onChange,
  options,
}: RadioGroupProps) => {
  const optionList = options.map((item) => {
    return item.id;
  });
  const [checkItemList, setCheckItemList] = useState<any>(
    options.map((item) => {
      return { [item.id]: Boolean(item.checked) };
    }),
  );

  const resolveOnChange = (e: any) => {
    if (!onChange) {
      return;
    }
    onChange(e);
    return;
  };

  const onCheckedOne = (e: any) => {
    if (disabled || state === 'disabled') {
      return;
    }
    // const checkItems = checkItemList;
    // if (checkItems.includes(e.id)) {
    //   checkItems.splice(checkItems.indexOf(e.id), 1);
    // } else {
    //   checkItems.push();
    // }
    setCheckItemList(e.id);
    if (!onClick) {
      return;
    }
    onClick(e);
  };

  useEffect(() => {
    const check = options.filter((item) => item.checked).map((item) => item.id);
    setCheckItemList(check);
  }, [options]);

  return (
    <>
      <div
        className={[
          'mds-root',
          `radio__group`,
          align && align,
          direction ? direction : 'horizontal',
        ].join(' ')}
      >
        {label && (
          <TextLabel size="m" className="radio__group__label">
            {label}
          </TextLabel>
        )}
        <div className="radio-box">
          {options &&
            checkItemList &&
            options.map((radioItem) => (
              <Radio
                id={radioItem.id}
                name={name}
                label={radioItem.label}
                state={state}
                size={size}
                checked={checkItemList.includes(radioItem.id)}
                onChange={resolveOnChange}
                onClick={onCheckedOne}
                key={radioItem.id}
                disabled={disabled}
              />
            ))}
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
            <span className="text">{helperText}</span>
            {/* {helperText} */}
          </Text>
        )}
      </div>
    </>
  );
};

export { RadioGroup };
