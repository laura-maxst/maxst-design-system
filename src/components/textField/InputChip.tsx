import React, { useEffect, useState, forwardRef } from 'react';
import { TextLabel, Text } from '@components/text';
import type { InputChipType } from './textfieldType';
import {
  ErrorCircleLineBoldIcon,
  CheckCircleLineBoldIcon,
} from '@maxst-designsystem/icons';
import { Chip } from '@components/chip';

const InputChip = forwardRef(function InputChip(
  {
    id,
    type = 'text',
    label,
    placeholder,
    required,
    state,
    size = 'l',
    disabled,
    helperText,
    minInputLength,
    maxInputLength,
    minChipLength,
    maxChipLength,
    onChange,
    onClick,
    className,
    chipColor,
    chipValueData,
    ...props
  }: InputChipType,
  ref: any,
) {
  const [inputValue, setInputValue] = useState<string | number | null>('');
  const [thisState, setThisState] = useState<string>('default');
  const [thisType, setThisType] = useState<string>('text');
  const [selectData, setSelectData] = useState<{ id: string; label: string }[]>(
    [],
  );

  const onClickChip = (e: any) => {
    setSelectData(selectData.filter((x) => x.id != e.target.id));

    if (!onChange) {
      return;
    }
    onChange(selectData.filter((x) => x.id != e.target.id));
  };

  const onChipErrorCheck = () => {
    const isMinChipLength: boolean =
      typeof minChipLength === 'number' && selectData.length < minChipLength;

    const isMaxChipLength: boolean =
      typeof maxChipLength === 'number' && selectData.length > maxChipLength;

    if (isMaxChipLength) {
      setThisState('error');
    } else if (isMinChipLength) {
      setThisState('error');
    } else {
      setThisState('default');
    }
  };

  const resolveOnChange = (e: any) => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;

    if (e.target.value != ' ' && e.target.value != ',') {
      setInputValue(e.target.value);

      if (regExp.test(e.target.value)) {
        const value = e.target.value.substring(0, e.target.value.length - 1);
        setInputValue(value);
      }
    } else {
      setInputValue(null);
    }

    if (!onChange) {
      return;
    }
    onChange(selectData);
  };

  const onFocus = (e: any) => {
    if (thisState !== 'error') {
      setThisState('onfocused');
    }
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 32 || e.keyCode === 188) {
      // 최소입력 체크
      if (e.target.value.length < Number(minInputLength)) {
        return;
      } else if (e.target.value !== '' && e.target.value !== ',') {
        // 중복 검사
        if (!(selectData.filter((x) => x.id === e.target.value).length > 0)) {
          setSelectData([
            ...selectData,
            {
              id: e.target.value,
              label: e.target.value,
            },
          ]);
        }
      }
      setInputValue(null);
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

  useEffect(() => {
    if (typeof state === 'string') {
      setThisState(state);
    }
  }, [state]);

  useEffect(() => {
    // 초기 chip data setting
    if (chipValueData) {
      setSelectData(chipValueData);
    }
  }, [chipValueData]);

  useEffect(() => {
    onChipErrorCheck();
  }, [selectData]);

  useEffect(() => {
    type && setThisType(type);
  }, [type]);

  return (
    <div
      className={[
        'mds-input-root',
        `textfield textfield__text-${size ? size : 'l'}-${
          (disabled && 'disabled') || thisState
        }`,
        helperText ? 'has-helperText' : '',
        'textfield-chip',
        selectData.length > 0 ? 'has-chip' : '',
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
        className={['textfield-formControl', 'textfield-chip-control'].join(
          ' ',
        )}
      >
        {selectData.length > 0 &&
          selectData.map((menuItem, index) => {
            return (
              <Chip
                type={
                  disabled
                    ? 'tertiary'
                    : chipColor
                    ? chipColor
                    : 'color-bluegray'
                }
                size="s"
                key={menuItem.id + index}
                action="filter"
                onClick={onClickChip}
                id={menuItem.id}
                disabled={disabled}
              >
                {menuItem.label}
              </Chip>
            );
          })}
        {!(disabled && selectData.length > 0) && (
          <input
            ref={ref}
            id={id}
            placeholder={placeholder}
            type={thisType}
            disabled={
              (disabled ? disabled : false) ||
              (thisState === 'disabled' ? true : false)
            }
            value={inputValue ? inputValue : ''}
            onChange={(e) => resolveOnChange(e)}
            onFocus={(e) => onFocus(e)}
            onBlur={(e) => onBlur(e)}
            minLength={minInputLength ? minInputLength : 1}
            maxLength={maxInputLength && maxInputLength}
            onClick={onClick}
            autoComplete={'off'}
            onKeyDown={onKeyDown}
          />
        )}
      </div>
      {helperText && (
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
          {maxChipLength && (
            <span className="textarea__text-langth-check">
              {selectData.length} / {maxChipLength}
            </span>
          )}
        </Text>
      )}
    </div>
  );
});

export { InputChip };
