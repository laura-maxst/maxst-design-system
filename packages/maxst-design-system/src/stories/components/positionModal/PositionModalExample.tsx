import React, { useState } from 'react';
import { Button } from '@components/button';
import { PositionModal, PositionModalProps } from '@components/positionModal';

function PositionModalExample(props: PositionModalProps) {
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
      <PositionModal {...props} open={isOpen} onClose={onCloseModal}>
        {props.children}
      </PositionModal>
    </div>
  );
}
export { PositionModalExample };
