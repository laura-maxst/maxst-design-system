import React, { useEffect, useState } from 'react';
import { CloseLineIcon } from '@maxst-designsystem/icons';
import Title from '@components/title';
import { ButtonGroup, Button } from '@components/button';
import { Text } from '@components/text';

interface ModalProps {
  title?: string;
  titleImage?: JSX.Element | React.ReactNode;
  titleIcon?: JSX.Element | React.ReactNode;
  children?: string | any;
  size?: 's' | 'm' | 'l' | 'xl';
  buttonPrimary?: string;
  buttonError?: string;
  buttonSecondary?: string;
  buttonGhost?: string;
  isCloseButton?: boolean;
  open: boolean;
  onClose: () => void;
}

const Modal = ({
  title,
  titleImage,
  titleIcon,
  children,
  size,
  buttonPrimary,
  buttonError,
  buttonSecondary,
  buttonGhost,
  isCloseButton,
  open,
  onClose,
}: ModalProps) => {
  const [isFooter, setIsFooter] = useState<boolean>(false);

  const onClickClose = () => {
    console.log('close');
    const bodyEl = document.body;
    bodyEl.style.overflow = `auto`;
    onClose();
  };

  useEffect(() => {
    if (buttonPrimary || buttonError || buttonSecondary || buttonGhost) {
      setIsFooter(true);
    }
  }, [buttonPrimary, buttonError, buttonSecondary, buttonGhost]);

  useEffect(() => {
    if (open) {
      const bodyEl = document.body;
      bodyEl.style.overflow = `hidden`;
    }
  }, [open]);

  return (
    <div className={['modal-wrap', open ? 'open' : 'close'].join(' ')}>
      <div className="dim" onClick={onClickClose}></div>
      <div className={['modal-box', `modal__${size ? size : 's'}`].join(' ')}>
        {isCloseButton && (
          <span className="modal-close-button" onClick={onClickClose}>
            <CloseLineIcon />
          </span>
        )}
        {title && (
          <div className="modal-header">
            {titleIcon && titleIcon}
            {titleImage && titleImage}
            <Title type="title" size="s" role={1}>
              {title}
            </Title>
          </div>
        )}
        {children && (
          <div className="modal-body">
            {typeof children === 'string' ? (
              <Text type="body" size="m">
                {children}
              </Text>
            ) : (
              children
            )}
          </div>
        )}
        {isFooter && (
          <div className="modal-footer">
            <ButtonGroup fullWidth={true}>
              {buttonGhost && (
                <Button type="ghost" size="l">
                  {buttonGhost}
                </Button>
              )}
              {buttonSecondary && (
                <Button type="secondary" size="l">
                  {buttonSecondary}
                </Button>
              )}
              {buttonPrimary ? (
                <Button type="primary" size="l">
                  {buttonPrimary}
                </Button>
              ) : (
                buttonError && (
                  <Button type="error" size="l">
                    {buttonError}
                  </Button>
                )
              )}
            </ButtonGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export { Modal };
export type { ModalProps };
