import React from 'react';
import type { SnsListDataType } from '@components/snsList';
interface FooterPropsType {
    snsData?: SnsListDataType[];
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
declare const Footer: ({ snsData, termData, topRightArea, bottomRightArea, className, logo, addressData, }: FooterPropsType) => React.JSX.Element;
export { Footer };
