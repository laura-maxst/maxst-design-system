import React from 'react';
interface SnsListDataType {
    type: 'facebook' | 'instagram' | 'youtube' | 'blog' | 'medium';
    url: string;
}
interface SnsListPropsType {
    data: SnsListDataType[];
    className?: string;
}
declare const SnsList: ({ data, className }: SnsListPropsType) => React.JSX.Element;
export { SnsList };
export type { SnsListDataType };
