import React from 'react';
import { useState } from 'react';
import { Drawer } from '@components/drawers';
import { DrawerPropsType } from '@components/drawers/Drawer';
import { Button } from '@components/button';
import { MenuLineIcon } from '@maxst-designsystem/icons';

function DrawerSidebarExample(props: DrawerPropsType) {
  const [open, setOpen] = useState<boolean>(false);

  const onCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        size={'xl'}
        type={'primary'}
        onClick={() => setOpen(true)}
        iconOnly={<MenuLineIcon />}
        isIconMode
      />
      <Drawer {...props} open={open} onClose={onCloseDrawer}>
        {props.children}
      </Drawer>
    </>
  );
}

export default DrawerSidebarExample;
