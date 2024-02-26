import React, { useEffect, useState } from 'react';
import { Text, TextLabel } from '@components/text';
import { Checkbox, CheckboxPropsType } from '@components/checkbox';
import { ErrorCircleLineBoldIcon } from '@maxst-designsystem/icons';

interface CheckboxGroupProps {
  id: string;
  type?: 'selected' | 'indeterminate';
  state?: 'default' | 'pressed' | 'disabled' | 'error';
  size: 'l' | 's';
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  controlMode?: boolean;
  helperText?: string;
  align?: 'left' | 'right';
  direction?: 'vertical' | 'horizontal';
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  options: CheckboxPropsType[];
}

const CheckboxGroup = ({
  id,
  type,
  state,
  size,
  disabled,
  label,
  checked,
  controlMode,
  helperText,
  align,
  direction,
  onClick,
  onChange,
  options,
}: CheckboxGroupProps) => {
  const optionList = options.map((item) => {
    return item.id;
  });
  const [checkItemList, setCheckItemList] = useState<any>([]);
  const [checkBoxAllType, setCheckBoxAllType] = useState<
    'selected' | 'indeterminate'
  >(type ? type : 'selected');
  const [checkAll, setCheckAll] = useState<boolean>(Boolean(checked));

  const resolveOnChange = (e: any, type?: string) => {
    if (!onChange) {
      return;
    }
    const checkItems = [...checkItemList];
    if (type !== 'all') {
      if (checkItems.includes(e.id)) {
        checkItems.splice(checkItems.indexOf(e.id), 1);
      } else {
        checkItems.push(e.id);
      }
    }
    setCheckItemList(checkItems);
    onChange([e, checkItems]);
    return;
  };

  const onCheckedAll = (e: any) => {
    if (disabled || state === 'disabled') {
      return;
    }
    setCheckAll(!checkAll);
    if (!checkAll) {
      setCheckItemList(optionList);
      setCheckAll(true);
    } else {
      setCheckItemList([]);
      setCheckAll(false);
    }

    if (!onChange) {
      return;
    }
    onChange([e, e.checked ? optionList : []]);

    if (!onClick) {
      return;
    }
    onClick([e, e.checked ? optionList : []]);
  };

  const onCheckedOne = (e: any) => {
    if (disabled || state === 'disabled') {
      return;
    }
    const checkItems = [...checkItemList];
    if (checkItems.includes(e.id)) {
      checkItems.splice(checkItems.indexOf(e.id), 1);
    } else {
      checkItems.push(e.id);
    }
    setCheckItemList(checkItems);
    if (checkItems.length === 0) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }
    if (!onClick) {
      return;
    }
    onClick([e, checkItems]);
  };

  useEffect(() => {
    const check = options.filter((item) => item.checked).map((item) => item.id);
    if (check.length === 0) {
      setCheckAll(false);
      setCheckItemList([]);
    } else {
      setCheckAll(true);
      setCheckItemList(check);
    }
  }, [options]);

  useEffect(() => {
    if (checkItemList.length === options.length) {
      setCheckBoxAllType('selected');
    } else {
      setCheckBoxAllType('indeterminate');
    }
  }, [checkItemList]);

  return (
    <>
      <div
        className={[
          `checkbox__group`,
          align && align,
          direction ? direction : 'horizontal',
        ].join(' ')}
      >
        <div className="checkbox-box">
          {label && (
            <TextLabel size="m" className="checkbox__all-check__label">
              {controlMode ? (
                <Checkbox
                  id={id}
                  label={label}
                  size={size}
                  state={state}
                  checked={checkAll}
                  onChange={onCheckedAll}
                  onClick={onCheckedAll}
                  type={checkBoxAllType}
                  disabled={disabled}
                />
              ) : (
                <>{label}</>
              )}
            </TextLabel>
          )}
          {checkItemList &&
            options.map((checkboxItem) => (
              <Checkbox
                id={checkboxItem.id}
                label={checkboxItem.label}
                state={state}
                size={size}
                checked={checkItemList.includes(checkboxItem.id)}
                onChange={resolveOnChange}
                onClick={onCheckedOne}
                key={checkboxItem.id}
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
          </Text>
        )}
      </div>
    </>
  );
};

export { CheckboxGroup };
