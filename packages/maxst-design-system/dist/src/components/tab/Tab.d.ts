import React from 'react';
interface tabProps {
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
}
declare function Tab({ size, widthFixed, selectValue, tabData }: tabProps): JSX.Element;
export { Tab };
export type { tabProps };
