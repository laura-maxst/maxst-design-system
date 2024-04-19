import React, { useEffect, useRef } from 'react';
import { Text } from '@components/text';
import { Button } from '@components/button';
import { CloseLineIcon } from '@maxst-designsystem/icons';

interface SnackbarPropsType {
  contents: string;
  closeButton?: boolean;
  actionButtonData?: {
    label: string;
    onClickAction: () => void;
  };
  iconLeft?: React.ReactNode;
  align?:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left';
  open: boolean;
  onClose: () => void;
  className?: string;
}

const Snackbar = ({
  contents,
  closeButton,
  actionButtonData,
  iconLeft,
  align,
  open,
  onClose,
  className,
}: SnackbarPropsType) => {
  const resolveOnClose = () => {
    if (!onClose) {
      return;
    }
    onClose();
  };

  const timer: any = useRef(null);

  const clearSnackTimer = () => clearTimeout(timer.current);

  const startSnackTimer = () =>
    (timer.current = setTimeout(resolveOnClose, 3000));

  const onMouseOver = () => {
    clearSnackTimer();
  };

  const onMouseLeave = () => {
    startSnackTimer();
  };

  useEffect(() => {
    if (open) {
      startSnackTimer();
    }
  }, [open]);

  return (
    <div
      className={[
        'snackbar-box',
        `snackbar-${align ? align : 'bottom-left'}`,
        open ? 'open' : 'close',
        className ? className : '',
      ].join(' ')}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="snackbar__left-box">
        {iconLeft && iconLeft}
        <Text type="body" size="m">
          {contents}
        </Text>
      </div>
      {(actionButtonData || closeButton) && (
        <div className="snackbar__right-box">
          {actionButtonData && (
            <Button
              size="s"
              type="ghost"
              onClick={actionButtonData.onClickAction}
            >
              {actionButtonData.label}
            </Button>
          )}
          {closeButton && (
            <Button
              iconOnly={<CloseLineIcon />}
              size="s"
              type="text"
              isIconMode={true}
              onClick={resolveOnClose}
            />
          )}
        </div>
      )}
    </div>
  );
};

export { Snackbar };
export type { SnackbarPropsType };
