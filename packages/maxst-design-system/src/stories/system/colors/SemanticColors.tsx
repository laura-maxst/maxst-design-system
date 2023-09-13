import React from 'react';

interface ColorsProps {
  color: string;
}

export const SemanticColors = ({ color }: ColorsProps) => {
  return (
    <div
      className={['color-box', `color-${color}`].join(' ')}
      style={{ width: '100px', height: '100px' }}
    >
      {color}
    </div>
  );
};
