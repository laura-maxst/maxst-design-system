import React from 'react';
interface loadingProps {
    id?: string;
    color?: 'white' | 'black' | 'mint';
    size?: 'l' | 'm' | 's';
    className?: string;
}
declare const Loading: ({ id, color, size, className, }: loadingProps) => React.JSX.Element;
export { Loading };
