import React from 'react';
import { Text } from '@components/text';

interface ColorsProps {
  color: string;
  fontColor?: string;
}

const BaseColor = ({ color, fontColor }: ColorsProps) => {
  return (
    <div
      className={['color-box', `color-${color}`].join(' ')}
      style={{
        color: fontColor,
        backgroundColor: color,
      }}
    >
      <Text type="body" size="m">
        {color}
      </Text>
    </div>
  );
};

export { BaseColor };
