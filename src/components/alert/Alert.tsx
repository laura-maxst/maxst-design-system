import React, { useEffect, useRef } from 'react';
import { Title } from '@components/title';
import { Text } from '@components/text';
import { Button } from '@components/button';
import {
  CloseLineIcon,
  ErrorCircleFillIcon,
  WarningFillIcon,
  InfoCircleFillIcon,
  CheckCircleFillIcon,
} from '@maxst-designsystem/icons';

interface AlertProps {
  type: 'error' | 'warning' | 'information' | 'success';
  title?: string;
  contents: string;
  closeButton?: boolean;
  actionButtonData?: {
    label: string;
    onClickAction: () => void;
  };
  open: boolean;
  onClose: () => void;
}

const Alert = ({
  type,
  title,
  contents,
  closeButton,
  actionButtonData,
  open,
  onClose,
}: AlertProps) => {
  const resolveOnClose = () => {
    if (!onClose) {
      return;
    }
    onClose();
  };

  const iconSetting = () => {
    if (type === 'error') {
      return <ErrorCircleFillIcon />;
    } else if (type === 'warning') {
      return <WarningFillIcon />;
    } else if (type === 'information') {
      return <InfoCircleFillIcon />;
    } else if (type === 'success') {
      return <CheckCircleFillIcon />;
    }
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
        'alert-box',
        open ? 'open' : 'close',
        `alert-${title ? 'description-' : ''}${type && type}`,
      ].join(' ')}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="alert__left-box">
        {iconSetting()}
        {title ? (
          <div className="alert__text-box">
            <Title role={4} type="title" size="xs" className="font-title">
              {title}
            </Title>
            <Text type="body" size="m">
              {contents}
            </Text>
          </div>
        ) : (
          <Text type="body" size="m">
            {contents}
          </Text>
        )}
      </div>
      {(actionButtonData || closeButton) && (
        <div className="alert__right-box">
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
              className="close-button"
            />
          )}
        </div>
      )}
    </div>
  );
};

export { Alert };
export type { AlertProps };
