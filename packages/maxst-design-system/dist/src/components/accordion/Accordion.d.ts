import React from 'react';
interface AccordionProps {
    width?: string;
    items: {
        id: string;
        head: React.ReactNode | string;
        contents: React.ReactNode | string;
        disabled?: boolean;
    }[];
    expandIcon?: React.ReactNode;
    defaultSelectItem?: string;
    expandControl?: boolean;
    showExpandIcon?: boolean;
    className?: string;
}
declare const Accordion: ({ width, items, expandIcon, defaultSelectItem, expandControl, showExpandIcon, className, }: AccordionProps) => React.JSX.Element;
export { Accordion };
