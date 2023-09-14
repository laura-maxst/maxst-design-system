import React, { useState } from 'react';
import { Snackbar } from '@components/snackbar';
import { SnackbarProps } from '@components/snackbar/Snackbar';
import { Button } from '@components/button';

function SnackbarExample(args: SnackbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenSnackbar = () => {
    setIsOpen(true);
  };

  const onCloseSnackbar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button type="primary" size="l" onClick={onOpenSnackbar}>
        open snackbar
      </Button>
      <Snackbar {...args} open={isOpen} onClose={onCloseSnackbar} />
    </div>
  );
}

export default SnackbarExample;
