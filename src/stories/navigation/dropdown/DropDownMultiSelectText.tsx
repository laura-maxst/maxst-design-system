import React, { useEffect, useState } from 'react';
import { DropdownPropsType } from '@components/dropdown/Dropdown';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
import { ArrowDownLineIcon } from '@maxst-designsystem/icons';

const DropDownMultiSelectText = ({
  menuDirection,
  menuData,
  onChange,
  onClick,
  ...props
}: DropdownPropsType) => {
  const [labelValue, setLabelValue] = useState<any>('');
  const [selectData, setSelectData] = useState<any>(null);

  const resolveOnChage = (data: any) => {
    if (!onChange) {
      return;
    }
    onChange(data);
  };
  const resolveOnClick = (data: any) => {
    setSelectData(data);
    if (!onClick) {
      return;
    }
    onClick(data);
  };

  useEffect(() => {
    if (props.selectMenu) {
      setSelectData(props.selectMenu);
    }
  }, [props.selectMenu]);

  useEffect(() => {
    if (selectData) {
      const selectMenus: any[] = [];
      selectData.map((selectItem: any) => {
        return selectMenus.push(selectItem.label);
      });
      setLabelValue(selectMenus.join(', '));
    }
  }, [selectData]);

  return (
    <Dropdown
      {...props}
      menuData={menuData}
      onChange={resolveOnChage}
      onClick={resolveOnClick}
      id="dropdown-multiple-text"
      isFullWidthMenu={true}
      className="dropdown-example"
      multiple={true}
      menuDirection={menuDirection}
      selectMenu={props.selectMenu}
    >
      <TextField
        size="auto"
        helperText="helper text"
        value={labelValue && labelValue}
        id="dropdown-textfield-multiple-text"
        renderValue={labelValue}
        required={true}
        placeholder="placeholder"
        label="label"
        iconRight={<ArrowDownLineIcon />}
        readOnly
      />
    </Dropdown>
  );
};

export default DropDownMultiSelectText;
