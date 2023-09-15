import React from 'react';
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
declare const Modal: ({ title, titleImage, titleIcon, children, size, buttonPrimary, buttonError, buttonSecondary, buttonGhost, isCloseButton, open, onClose, }: ModalProps) => JSX.Element;
export { Modal };
export type { ModalProps };
