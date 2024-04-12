import React from 'react';
interface TitleProps {
    role: number;
    className: string;
    children: React.ReactNode;
}
declare const TitleTagFilter: ({ role, className, children }: TitleProps) => React.JSX.Element;
export default TitleTagFilter;
