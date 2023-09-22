import React, { useState } from 'react';
import { Alert } from '@components/alert';
import { AlertProps } from '@components/alert/Alert';
import { Button } from '@components/button';

function AlertExample(args: AlertProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenSnackbar = () => {
    setIsOpen(true);
  };

  const onCloseSnackbar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button type="secondary" size="l" onClick={onOpenSnackbar}>
        open Alert
      </Button>
      <Alert {...args} open={isOpen} onClose={onCloseSnackbar} />
    </div>
  );
}

export default AlertExample;
