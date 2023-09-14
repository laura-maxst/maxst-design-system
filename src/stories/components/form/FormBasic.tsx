import React, { useState } from 'react';
import { InputGroup, TextField } from '@components/textField';
import { Dropdown } from '@components/dropdown';
import { RadioGroup, RadioPropsType } from '@components/radio';
import { Button, ButtonGroup } from '@components/button';
import {
  ArrowDownLineIcon,
  CheckLineIcon,
  ArrowRightLineIcon,
} from '@maxst-designsystem/icons';

type formDataType = {
  inputOne: {
    one: string | null;
    two: string | null;
  };
  inputTwo: string | null;
  dropdown?: string | null;
  radio?: string | null;
  textarea: string | null;
};

function FormBasic() {
  const [formData, setFormData] = useState<formDataType>({
    inputOne: {
      one: null,
      two: null,
    },
    inputTwo: null,
    dropdown: null,
    radio: null,
    textarea: null,
  });
  const [labelValue, setLabelValue] = useState<string>('');
  const [idValue, setIdValue] = useState<string>('');
  const [isInputOneError, setIsInputOneError] = useState<boolean>(false);
  const [isInputTwoError, setIsInputTwoError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const onChangeInputOne = (value: any, id: string) => {
    if (id === 'default-textfield-01') {
      setFormData({
        ...formData,
        inputOne: {
          ...formData.inputOne,
          one: value,
        },
      });
    } else if (id === 'default-textfield-02') {
      setFormData({
        ...formData,
        inputOne: {
          ...formData.inputOne,
          two: value,
        },
      });
    }
  };

  const onChangeInputTwo = (value: any) => {
    setFormData({ ...formData, inputTwo: value });
  };

  const onChangeTextarea = (value: any) => {
    setFormData({ ...formData, textarea: value });
  };

  const onClickDropdown = (data: any) => {
    setLabelValue(data.label);
    setIdValue(data.id);
    setFormData({ ...formData, dropdown: data.id });
  };

  const onChangeRadio = (target: any) => {
    console.log('Radio target', target.id);
    setFormData({ ...formData, radio: target.id });
  };

  const onSubmit = () => {
    console.log('onSubmit', formData);
    setIsInputOneError(!formData.inputOne.one || !formData.inputOne.two);
    setIsInputTwoError(!formData.inputTwo);
  };
  return (
    <>
      <InputGroup
        fullWidth={true}
        label="Input Title"
        required={true}
        state={isInputOneError ? 'error' : 'default'}
      >
        <TextField
          id="default-textfield-01"
          placeholder="placeholder"
          onChange={(e) => onChangeInputOne(e, 'default-textfield-01')}
        />
        <TextField
          id="default-textfield-02"
          placeholder="placeholder"
          onChange={(e) => onChangeInputOne(e, 'default-textfield-02')}
        />
      </InputGroup>
      <InputGroup
        fullWidth={true}
        label="Input Title"
        required={true}
        state={isInputTwoError ? 'error' : 'default'}
      >
        <TextField
          id="default-textfield-03"
          placeholder="placeholder"
          helperText="helper text"
          onChange={onChangeInputTwo}
        />
      </InputGroup>
      <Dropdown
        menuData={menuData}
        onClick={onClickDropdown}
        id="dropdown-textfield"
        isFullWidthMenu={true}
        className="form-dropdown"
      >
        <TextField
          helperText="Please select an option."
          value={labelValue && labelValue}
          id={idValue && idValue}
          placeholder="placeholder"
          label="Dropdown Title"
          iconRight={<ArrowDownLineIcon />}
        />
      </Dropdown>
      <RadioGroup
        id="radio-all"
        label="Radio Title"
        onChange={(e) => onChangeRadio(e)}
        options={radioItemList}
        name="radio-all"
        size="l"
      />
      <InputGroup fullWidth={true} label="Area Title">
        <TextField
          id="default-textarea"
          placeholder="placeholder"
          helperText="Please enter the content."
          multiLine={true}
          maxLength={300}
          onChange={onChangeTextarea}
        />
      </InputGroup>
      <ButtonGroup align="right" buttonWidth="194px">
        <Button type="secondary" size="xl">
          Button
        </Button>
        <Button type="primary" size="xl" onClick={onSubmit}>
          Button
        </Button>
      </ButtonGroup>
    </>
  );
}

export { FormBasic };

const menuData = [
  {
    id: 'label-0',
    label: 'label 0',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-1',
    label: 'label 1',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: true,
    // subLabel: 'more',
  },
  {
    id: 'label-2',
    label: 'label 2',
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-3',
    label: 'label 3',
    iconLeft: <CheckLineIcon />,
    disabled: false,
    subLabel: 'more',
  },
  {
    id: 'label-4',
    label: 'label 4',
    iconLeft: <CheckLineIcon />,
    iconRight: <ArrowRightLineIcon />,
    disabled: false,
    // subLabel: 'more',
  },
];

const radioItemList: RadioPropsType[] = [
  {
    id: 'radio_01',
    name: 'radio',
    label: 'label 01',
    size: 'l',
  },
  {
    id: 'radio_02',
    name: 'radio',
    label: 'label 02',
    size: 'l',
  },
  {
    id: 'radio_03',
    name: 'radio',
    label: 'label 03',
    size: 'l',
  },
  {
    id: 'radio_04',
    name: 'radio',
    label: 'label 04',
    size: 'l',
  },
];
