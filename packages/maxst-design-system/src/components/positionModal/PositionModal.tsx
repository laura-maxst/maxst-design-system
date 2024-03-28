import React, { useEffect, useRef, useState } from 'react';
import { CloseLineIcon } from '@maxst-designsystem/icons';
import { Title } from '@components/title';
import { ButtonGroup, Button } from '@components/button';
import { Text } from '@components/text';

interface PositionModalProps {
  id?: string;
  title?: string;
  titleImage?: JSX.Element | React.ReactNode;
  titleIcon?: JSX.Element | React.ReactNode;
  children?: JSX.Element | React.ReactNode;
  size?: 's' | 'm' | 'l' | 'xl';
  mainButton?: {
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
  smallButtonMode?: boolean;
  isDim?: boolean;
  isArrow?: boolean;
  arrowDirection?:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'right-top'
    | 'right'
    | 'right-bottom'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left-top'
    | 'left'
    | 'left-bottom';
  position: { top?: string; left?: string; right?: string; bottom?: string };
  footerCustom?: JSX.Element | React.ReactNode;
  className?: string;
}

const PositionModal = ({
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
  smallButtonMode,
  isDim = false,
  isArrow,
  arrowDirection,
  position,
  footerCustom,
  className,
}: PositionModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDefaultFooter, setIsDefaultFooter] = useState<boolean>(false);

  const onClickClose = () => {
    const bodyEl = document.body;
    bodyEl.style.overflow = `auto`;
    onClose();
  };

  useEffect(() => {
    if (mainButton || subButton || subtlestButton) {
      setIsDefaultFooter(true);
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
    <div
      className={[
        'modal-wrap',
        open ? 'open' : 'close',
        className ? className : '',
      ].join(' ')}
    >
      <div
        className={isDim ? 'dim' : 'dim-transparent'}
        onClick={onClickClose}
      ></div>
      <div
        id={id}
        className={[
          'modal-box',
          `modal__${size ? size : 's'}`,
          'position-modal',
          isArrow ? 'arrow' : '',
          isArrow && arrowDirection ? arrowDirection : 'top',
          !isDim ? 'none-dim' : '',
        ].join(' ')}
        ref={modalRef}
        style={position}
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
        {isDefaultFooter ? (
          <div
            className={[
              'modal-footer',
              smallButtonMode ? 'small-button-mode' : '',
            ].join(' ')}
          >
            <ButtonGroup fullWidth={!smallButtonMode} align="right">
              {subtlestButton && (
                <Button
                  type="ghost"
                  size={smallButtonMode ? 'm' : 'l'}
                  onClick={subtlestButton.onClick}
                >
                  {subtlestButton.text}
                </Button>
              )}
              {subButton && (
                <Button
                  type="tertiary"
                  size={smallButtonMode ? 'm' : 'l'}
                  onClick={subButton.onClick}
                >
                  {subButton.text}
                </Button>
              )}
              {mainButton && (
                <Button
                  type={mainButton.type}
                  size={smallButtonMode ? 'm' : 'l'}
                  onClick={mainButton.onClick}
                >
                  {mainButton.text}
                </Button>
              )}
            </ButtonGroup>
          </div>
        ) : (
          footerCustom && <div className="modal-footer">{footerCustom}</div>
        )}
      </div>
    </div>
  );
};

export { PositionModal };
export type { PositionModalProps };
