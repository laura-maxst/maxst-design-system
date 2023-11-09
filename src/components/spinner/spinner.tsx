import React from 'react';

interface spinnerProps {
  color?: 'white' | 'black';
}
const Spinner = ({ color }: spinnerProps) => {
  return (
    <span className="spinner-wrap">
      <svg
        className={['spinner', `spinner-${color ? color : 'white'}`].join(' ')}
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
