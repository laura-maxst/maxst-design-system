import React from 'react';

interface TypographyProps {
  scale?: string;
  weight?: string;
}

export const BaseTypography = ({ scale, weight }: TypographyProps) => {
  return (
    <div className={['font-box', `${scale || weight}`].join(' ')}>
      {scale || weight}
    </div>
  );
};
