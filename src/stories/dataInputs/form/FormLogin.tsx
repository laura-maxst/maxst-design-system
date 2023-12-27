import React, { useState } from 'react';
import { InputGroup, TextField } from '@components/textField';
import { Button, ButtonGroup } from '@components/button';
import { Checkbox } from '@components/checkbox';
import { PlusLineIcon } from '@maxst-designsystem/icons';

type formDataType = {
  id: string | null;
  password: string | null;
  isSavePassword: boolean;
};

function FormLogin() {
  const [formData, setFormData] = useState<formDataType>({
    id: null,
    password: null,
    isSavePassword: false,
  });

  const [idError, setIdError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const onChangeId = (value: any) => {
    setFormData({ ...formData, id: value });
  };

  const onChangePassword = (value: any) => {
    setFormData({ ...formData, password: value });
  };

  const onSubmit = () => {
    console.log('onSubmit', formData);
    setIdError(!formData.id ? true : false);
    setPasswordError(!formData.password ? true : false);
  };

  return (
    <>
      <InputGroup
        fullWidth={true}
        label="Id"
        helperText="helper text"
        required={true}
        state={idError ? 'error' : 'default'}
      >
        <TextField
          id="default-textfield-01"
          placeholder="placeholder"
          resetButton={true}
          onChange={onChangeId}
        />
      </InputGroup>
      <InputGroup
        fullWidth={true}
        label="Password"
        helperText="helper text"
        required={true}
        state={passwordError ? 'error' : 'default'}
      >
        <TextField
          id="default-textfield-03"
          placeholder="placeholder"
          password={true}
          onChange={onChangePassword}
        />
      </InputGroup>
      <Checkbox id="login-checkbox" size="l" label="Save Password" />
      <ButtonGroup align="right">
        <Button type="ghost" size="xl">
          Button
        </Button>
        <Button
          type="primary"
          size="xl"
          isActionMode={true}
          iconLeft={<PlusLineIcon />}
          onClick={onSubmit}
        >
          Button
        </Button>
      </ButtonGroup>
    </>
  );
}

export { FormLogin };
