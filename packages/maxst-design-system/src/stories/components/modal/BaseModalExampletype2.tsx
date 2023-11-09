import React, { useState } from 'react';
import { Button } from '@components/button';
import { Modal, ModalProps } from '@components/modal';
import { Checkbox } from '@components/checkbox';
import { Radio } from '@components/radio';
import { InputGroup, TextField } from '@components/textField';

function BaseModalExampleType2(props: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenModal = () => {
    console.log('sample open', isOpen);
    setIsOpen(true);
  };
  const onCloseModal = () => {
    console.log('sample close', isOpen);
    setIsOpen(false);
  };

  return (
    <div className="modal-example">
      <Button size="l" type="primary" onClick={onOpenModal}>
        open modal
      </Button>
      <Modal {...props} open={isOpen} onClose={onCloseModal}>
        <Checkbox id="checkbox01" label="checkbox" size="l" />
        <Radio id="radio" label="radio" size="l" name="radio" />
        <InputGroup
          fullWidth={true}
          label="Id"
          helperText="helper text"
          required={true}
        >
          <TextField
            id="default-textfield-01"
            placeholder="placeholder"
            resetButton={true}
          />
        </InputGroup>
        <InputGroup
          fullWidth={true}
          label="Password"
          helperText="helper text"
          required={true}
        >
          <TextField
            id="default-textfield-01"
            placeholder="placeholder"
            resetButton={true}
          />
        </InputGroup>
        <InputGroup fullWidth={true} label="Memo">
          <TextField
            id="default-textfield-01"
            placeholder="placeholder"
            resetButton={true}
            multiLine={true}
            maxLength={300}
            helperText="helper text"
          />
        </InputGroup>
        <InputGroup
          fullWidth={true}
          label="Input"
          helperText="helper text"
          required={true}
        >
          <TextField
            id="default-textfield-01"
            placeholder="placeholder"
            resetButton={true}
          />
        </InputGroup>
        <InputGroup
          fullWidth={true}
          label="Input group"
          helperText="2~10자리 입력가능합니다."
        >
          <TextField
            id="default-textfield-01"
            placeholder="placeholder"
            required={true}
            resetButton={true}
          />
          <TextField
            id="default-textfield-03"
            placeholder="placeholder"
            required={true}
            password={true}
          />
        </InputGroup>
      </Modal>
    </div>
  );
}
export { BaseModalExampleType2 };
