import React, { useState } from 'react';
import { Button } from '@components/button';
import {
  PositionModal,
  PositionModalPropsType,
} from '@components/positionModal';

function PositionModalExample(props: PositionModalPropsType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
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
