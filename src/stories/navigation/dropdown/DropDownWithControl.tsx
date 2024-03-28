import React, { useEffect, useState } from 'react';
import { DropdownProps } from '@components/dropdown/Dropdown';
import { Dropdown } from '@components/dropdown';
import { TextField } from '@components/textField';
import {
  ArrowDownLineIcon,
  ArrowRightLineIcon,
} from '@maxst-designsystem/icons';
import { Chip, ChipGroup } from '@components/chip';
import { Checkbox } from '@components/checkbox';
import { Switch } from '@components/switchToggle';

const DropDownWithControl = ({
  menuDirection,
  onChange,
  onClick,
  ...props
}: DropdownProps) => {
  const [labelValue, setLabelValue] = useState<any>('');
  const [selectData, setSelectData] = useState<any>([]);

  const onIsSelectChecked = (id: string) => {
    return selectData.filter((item: any) => item.id === id).length === 1
      ? true
      : false;
  };

  const onIsSelectSwitch = (id: string) => {
    return selectData.filter((item: any) => item.id === id).length === 1
      ? true
      : false;
  };

  const menuData2 = [
    {
      id: 'label-0',
      label: 'label 0',
      iconLeft: (
        <Checkbox
          id="checkbox-0"
          size="l"
          checked={onIsSelectChecked('label-0')}
        />
      ),
      disabled: false,
      subLabel: 'more',
    },
    {
      id: 'label-1',
      label: 'label 1',
      iconLeft: (
        <Checkbox
          id="checkbox-1"
          size="l"
          checked={onIsSelectChecked('label-1')}
        />
      ),
      iconRight: <ArrowRightLineIcon />,
    },
    {
      id: 'label-2',
      label: 'label 2',
      iconLeft: (
        <Checkbox
          id="checkbox-2"
          size="l"
          checked={onIsSelectChecked('label-2')}
        />
      ),
      disabled: false,
      subLabel: 'more',
    },
    {
      id: 'label-3',
      label: 'label 3',
      iconRight: <Switch id="switch" checked={onIsSelectSwitch('label-3')} />,
      disabled: false,
    },
    {
      id: 'label-4',
      label: 'label 4',
      iconRight: <Switch id="switch" checked={onIsSelectSwitch('label-4')} />,
      disabled: false,
    },
    {
      id: 'label-5',
      label: 'label 5',
      iconRight: <Switch id="switch" checked={onIsSelectSwitch('label-5')} />,
      disabled: true,
    },
    {
      id: 'label-6',
      label: 'label 6',
      disabled: true,
      iconLeft: (
        <Checkbox
          id="checkbox-5"
          size="l"
          checked={onIsSelectChecked('label-6')}
        />
      ),
    },
    {
      id: 'label-7',
      label: 'label 7',
      iconLeft: (
        <Checkbox
          id="checkbox-6"
          size="l"
          checked={onIsSelectChecked('label-7')}
        />
      ),
    },
  ];

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
      {...props}
      menuData={menuData2}
      onChange={resolveOnChage}
      onClick={resolveOnClick}
      id="dropdown-multiple-control"
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
                <Chip type="color-purple" size="s" key={menuItem.id}>
                  {menuItem.label}
                </Chip>
              );
            })}
          </ChipGroup>
        }
        id="dropdown-textfield-multiple-control"
        required={true}
        placeholder="placeholder"
        label="label"
        iconRight={<ArrowDownLineIcon />}
      />
    </Dropdown>
  );
};

export default DropDownWithControl;
