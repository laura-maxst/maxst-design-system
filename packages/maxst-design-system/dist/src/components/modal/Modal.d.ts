import React from 'react';
interface ModalProps {
    title?: string;
    titleImage?: JSX.Element | React.ReactNode;
    titleIcon?: JSX.Element | React.ReactNode;
    children?: string | any;
    size?: 's' | 'm' | 'l' | 'xl';
    buttonPrimary?: {
        text: string;
        onClick: () => void;
    };
    buttonError?: {
        text: string;
        onClick: () => void;
    };
    buttonSecondary?: {
        text: string;
        onClick: () => void;
    };
    buttonGhost?: {
        text: string;
        onClick: () => void;
    };
    isCloseButton?: boolean;
    open: boolean;
    onClose: () => void;
}
declare const Modal: ({ title, titleImage, titleIcon, children, size, buttonPrimary, buttonError, buttonSecondary, buttonGhost, isCloseButton, open, onClose, }: ModalProps) => JSX.Element;
export { Modal };
export type { ModalProps };
