import React from 'react';
interface FooterProps {
    termData?: {
        label: string;
        url: string;
    }[];
    topRightArea?: React.ReactNode;
    bottomRightArea?: React.ReactNode;
    className?: string;
}
declare const Footer: ({ termData, topRightArea, bottomRightArea, className, }: FooterProps) => JSX.Element;
export { Footer };
