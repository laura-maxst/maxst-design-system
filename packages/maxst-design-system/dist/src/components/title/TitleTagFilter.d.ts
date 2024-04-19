import React from 'react';
interface TitlePropsType {
    role: number;
    className: string;
    children: React.ReactNode;
}
declare const TitleTagFilter: ({ role, className, children }: TitlePropsType) => React.JSX.Element;
export default TitleTagFilter;
