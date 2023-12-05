import React from 'react';
interface tabPropsType {
    size?: 'l' | 'm' | 's';
    widthFixed?: boolean;
    selectValue: string;
    tabData: {
        id: string;
        label: string;
        icon?: React.ReactNode;
        count?: number;
        children?: React.ReactNode;
        state?: 'default' | 'pressed' | 'disabled';
    }[];
    secondaryMode?: boolean;
    className?: string;
}
declare function Tab({ size, widthFixed, selectValue, tabData, secondaryMode, className, }: tabPropsType): JSX.Element;
export { Tab };
export type { tabPropsType };
