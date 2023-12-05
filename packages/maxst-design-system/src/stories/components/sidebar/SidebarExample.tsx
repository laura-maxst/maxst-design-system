import React from 'react';
import { useState } from 'react';
import { Drawer } from '@components/drawers';
import { Button } from '@components/button';
import { Sidebar } from '@components/sidebar';
import type { SidebarPropsType } from '@components/sidebar/Sidebar';
import { MenuLineIcon } from '@maxst-designsystem/icons';

function SidebarExample(props: SidebarPropsType) {
  const [open, setOpen] = useState<boolean>(false);

  const onCloseDrawer = () => {
    console.log('onCloseDrawer');
    setOpen(false);
  };

  return (
    <>
      <Button
        size={'xl'}
        type={'primary'}
        iconOnly={<MenuLineIcon />}
        isIconMode={true}
        onClick={() => setOpen(true)}
      >
        Drawer open
      </Button>
      <Drawer open={open} onClose={onCloseDrawer}>
        <Sidebar {...props} />
      </Drawer>
    </>
  );
}

export default SidebarExample;
