import React, { useEffect, useState } from 'react';
import { CloseLineIcon } from '@maxst-designsystem/icons';
import { Title } from '@components/title';
import { ButtonGroup, Button } from '@components/button';
import { Text } from '@components/text';

interface ModalProps {
  id?: string;
  title?: string;
  titleImage?: JSX.Element | React.ReactNode;
  titleIcon?: JSX.Element | React.ReactNode;
  children?: string | React.ReactNode;
  size?: 's' | 'm' | 'l' | 'xl';
  mainButton: {
    type: 'primary' | 'secondary' | 'error';
    text: string;
    onClick: () => void;
  };
  subButton?: {
    text: string;
    onClick: () => void;
  };
  subtlestButton?: {
    text: string;
    onClick: () => void;
  };
  isCloseButton?: boolean;
  open: boolean;
  onClose: () => void;
}

const Modal = ({
  id,
  title,
  titleImage,
  titleIcon,
  children,
  size,
  mainButton,
  subButton,
  subtlestButton,
  isCloseButton,
  open,
  onClose,
}: ModalProps) => {
  const [isFooter, setIsFooter] = useState<boolean>(false);

  const onClickClose = () => {
    const bodyEl = document.body;
    bodyEl.style.overflow = `auto`;
    onClose();
  };

  useEffect(() => {
    if (mainButton || subButton || subtlestButton) {
      setIsFooter(true);
    }
  }, [mainButton, subButton, subtlestButton]);

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
    <div className={['modal-wrap', open ? 'open' : 'close'].join(' ')}>
      <div className="dim" onClick={onClickClose}></div>
      <div
        id={id}
        className={['modal-box', `modal__${size ? size : 's'}`].join(' ')}
      >
        {isCloseButton && (
          <span className="modal-close-button" onClick={onClickClose}>
            <CloseLineIcon />
          </span>
        )}
        {title && (
          <div className="modal-header">
            {titleIcon && titleIcon}
            {titleImage && titleImage}
            <Title type="title" size="s" role={2}>
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
              {subtlestButton && (
                <Button type="ghost" size="l" onClick={subtlestButton.onClick}>
                  {subtlestButton.text}
                </Button>
              )}
              {subButton && (
                <Button type="tertiary" size="l" onClick={subButton.onClick}>
                  {subButton.text}
                </Button>
              )}
              {mainButton && (
                <Button
                  type={mainButton.type}
                  size="l"
                  onClick={mainButton.onClick}
                >
                  {mainButton.text}
                </Button>
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
