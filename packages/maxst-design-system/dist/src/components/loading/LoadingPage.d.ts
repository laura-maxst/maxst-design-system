import React from 'react';
interface loadingProps {
    id?: string;
    color?: 'white' | 'black' | 'mint';
    size?: 'l' | 'm' | 's';
    className?: string;
    isDim?: boolean;
}
declare const LoadingPage: ({ id, color, size, className, isDim, }: loadingProps) => React.JSX.Element;
export { LoadingPage };
