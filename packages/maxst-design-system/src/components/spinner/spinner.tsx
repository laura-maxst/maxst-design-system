import React from 'react';

interface spinnerProps {
  color?: 'white' | 'black';
  className?: string;
}
const Spinner = ({ color, className }: spinnerProps) => {
  return (
    <span className={['mds-root', 'spinner-wrap'].join(' ')}>
      <svg
        className={[
          'spinner',
          `spinner-${color ? color : 'white'}`,
          className ? className : '',
        ].join(' ')}
        viewBox="0 0 50 50"
      >
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        ></circle>
      </svg>
    </span>
  );
};

export { Spinner };
