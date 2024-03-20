import React from 'react';
interface FooterProps {
    termData?: {
        label: string;
        url: string;
    }[];
    topRightArea?: React.ReactNode;
    bottomRightArea?: React.ReactNode;
    className?: string;
    logo: any;
    addressData?: string[];
}
declare const Footer: ({ termData, topRightArea, bottomRightArea, className, logo, addressData, }: FooterProps) => JSX.Element;
export { Footer };
