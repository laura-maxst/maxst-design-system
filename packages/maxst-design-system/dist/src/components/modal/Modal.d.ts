import React from 'react';
interface ModalProps {
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
    footerCustom?: JSX.Element | React.ReactNode;
    className?: string;
}
declare const Modal: ({ id, title, titleImage, titleIcon, children, size, mainButton, subButton, subtlestButton, isCloseButton, open, onClose, footerCustom, className, }: ModalProps) => React.JSX.Element;
export { Modal };
export type { ModalProps };
