import React from 'react';
interface ProgressProps {
    className?: string;
    type?: 'primary' | 'secondary';
    status?: 'error' | 'success';
    align?: 'top' | 'bottom';
    size: 'l' | 'm' | 's';
    isShowIcon?: boolean;
    isShowPercent?: boolean;
    percent?: number;
    label?: string;
    iconBefore?: React.ReactNode | JSX.Element;
    iconError?: React.ReactNode | JSX.Element;
    iconSuccess?: React.ReactNode | JSX.Element;
}
export type { ProgressProps };
