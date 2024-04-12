import React from 'react';
interface SnsListProps {
    data: {
        type: 'facebook' | 'instagram' | 'youtube' | 'blog' | 'medium';
        url: string;
    }[];
    className?: string;
}
declare const SnsList: ({ data, className }: SnsListProps) => React.JSX.Element;
export { SnsList };
