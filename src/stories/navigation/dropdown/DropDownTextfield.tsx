import React, { useState } from 'react';
import { DropdownPropsType } from '@components/dropdown/Dropdown';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
import { ArrowDownLineIcon } from '@maxst-designsystem/icons';

const DropDownTextfield = ({
  menuDirection,
  menuData,
  onChange,
  onClick,
  ...props
}: DropdownPropsType) => {
  const [labelValue, setLabelValue] = useState<string>('');
  const [idValue, setIdValue] = useState<string>('');

  const resolveOnChage = (data: any) => {
    if (!onChange) {
      return;
    }
    onChange(data);
  };
  const resolveOnClick = (data: any) => {
    setLabelValue(data.label);
    setIdValue(data.id);
    if (!onClick) {
      return;
    }
    onClick(data);
  };

  return (
    <Dropdown
      {...props}
      menuData={menuData}
      onChange={resolveOnChage}
      onClick={resolveOnClick}
      id="dropdown-textfield"
      isFullWidthMenu={true}
      className="dropdown-example"
      menuDirection={menuDirection}
    >
      <TextField
        helperText="helper text"
        value={labelValue && labelValue}
        id={idValue && idValue}
        required={true}
        placeholder="placeholder"
        label="label"
        iconRight={<ArrowDownLineIcon />}
        readOnly
      />
    </Dropdown>
  );
};

export default DropDownTextfield;
