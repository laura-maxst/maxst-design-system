import { Button } from '@components/button';
import React, { useEffect } from 'react';
import { CloseLineIcon } from '@maxst-designsystem/icons';

interface DrawerPropsType {
  width?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  children?: string | any;
  isCloseButton?: boolean;
  open: boolean;
  onClose: () => void;
  closeButtonIcon?: React.ReactNode;
  isDim?: boolean;
  className?: string;
}

const Drawer = ({
  width,
  header,
  footer,
  position = 'left',
  children,
  isCloseButton = true,
  open,
  onClose,
  closeButtonIcon,
  isDim = true,
  className,
}: DrawerPropsType) => {
  const onClickClose = () => {
    const bodyEl = document.body;
    bodyEl.style.overflow = `auto`;
    onClose();
  };

  useEffect(() => {
    if (open) {
      const bodyEl = document.body;
      bodyEl.style.overflow = `hidden`;
    } else {
      const bodyEl = document.body;
      bodyEl.style.overflow = `auto`;
    }
  }, [open]);

  return (
    <div
      className={[
        'mds-drawer-wrap',
        open ? 'open' : 'close',
        className ? className : '',
      ].join(' ')}
    >
      {isDim && <div className="dim" onClick={onClickClose}></div>}
      <div
        className={[
          'mds-drawer',
          position ? position : 'left',
          open ? 'open' : 'close',
        ].join(' ')}
        style={{ width: width ? width : 'none' }}
      >
        {isCloseButton && (
          <Button
            size={'xl'}
            type={'ghost'}
            iconOnly={closeButtonIcon ? closeButtonIcon : <CloseLineIcon />}
            isIconMode={true}
            className="mds-drawer__close-button"
            onClick={onClickClose}
          />
        )}

        {header && <div className="mds-drawer__header">{header}</div>}
        <div className="mds-drawer__body">{children}</div>
        {footer && <div className="mds-drawer__footer">{footer}</div>}
      </div>
    </div>
  );
};

export { Drawer };
export type { DrawerPropsType };
