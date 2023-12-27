import React from 'react';
import { useState } from 'react';
import { Drawer } from '@components/drawers';
import { DrawerPropsType } from '@components/drawers/Drawer';
import { Button } from '@components/button';

function DrawerExample(props: DrawerPropsType) {
  const [open, setOpen] = useState<boolean>(false);

  const onCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size={'xl'} type={'primary'} onClick={() => setOpen(true)}>
        Drawer open
      </Button>
      <Drawer {...props} open={open} onClose={onCloseDrawer}>
        {props.children}
      </Drawer>
    </>
  );
}

export default DrawerExample;
