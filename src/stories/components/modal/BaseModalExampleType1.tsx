import React, { useState } from 'react';
import { Button } from '@components/button';
import { Modal, ModalProps } from '@components/modal';

function BaseModalExampleType1(props: ModalProps) {
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
        {props.children}
      </Modal>
    </div>
  );
}
export { BaseModalExampleType1 };
