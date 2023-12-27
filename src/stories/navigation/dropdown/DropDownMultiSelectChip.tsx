import React, { useEffect, useState } from 'react';
import { DropdownProps } from '@components/dropdown/Dropdown';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
import { ArrowDownLineIcon } from '@maxst-designsystem/icons';
import { Chip, ChipGroup } from '@components/chip';

const DropDownMultiSelectChip = ({
  menuDirection,
  menuData,
  onChange,
  onClick,
}: DropdownProps) => {
  const [labelValue, setLabelValue] = useState<any>('');
  const [selectData, setSelectData] = useState<any>([]);

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
    if (selectData && selectData.length !== 0) {
      const selectMenus: any[] = [];
      selectData.map((selectItem: any) => {
        return selectMenus.push(selectItem.label);
      });
      setLabelValue(selectMenus.join(', '));
    }
  }, [selectData]);

  return (
    <Dropdown
      menuData={menuData}
      onChange={resolveOnChage}
      onClick={resolveOnClick}
      id="dropdown-multiple-chip"
      isFullWidthMenu={true}
      className="dropdown-example"
      multiple={true}
      menuDirection={menuDirection}
    >
      <TextField
        size="auto"
        helperText="helper text"
        value={labelValue && labelValue}
        renderValue={
          <ChipGroup>
            {selectData.map((menuItem: { label: string; id: string }) => {
              return (
                <Chip type="color-blue" size="s" key={menuItem.id}>
                  {menuItem.label}
                </Chip>
              );
            })}
          </ChipGroup>
        }
        id="dropdown-textfield-multiple-chip"
        required={true}
        placeholder="placeholder"
        label="label"
        iconRight={<ArrowDownLineIcon />}
      />
    </Dropdown>
  );
};

export default DropDownMultiSelectChip;
