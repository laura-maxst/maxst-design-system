import React from 'react';
interface SnackbarProps {
    contents: string;
    closeButton?: boolean;
    actionButtonData?: {
        label: string;
        onClickAction: () => void;
    };
    iconLeft?: React.ReactNode;
    align?: 'top-left' | 'top' | 'top-right' | 'bottom-right' | 'bottom' | 'bottom-left';
    open: boolean;
    onClose: () => void;
}
declare const Snackbar: ({ contents, closeButton, actionButtonData, iconLeft, align, open, onClose, }: SnackbarProps) => JSX.Element;
export default Snackbar;
export type { SnackbarProps };
