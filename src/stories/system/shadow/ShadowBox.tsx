import React from 'react';
import { Text } from '@components/text';

interface ShadowBoxProps {
  level: string;
}

const ShadowBox = ({ level }: ShadowBoxProps) => {
  return (
    <div className={['shadow-box', `shadow-${level}`].join(' ')}>
      <Text type="body" size="m">
        {level}
      </Text>
    </div>
  );
};

export { ShadowBox };
export type { ShadowBoxProps };
