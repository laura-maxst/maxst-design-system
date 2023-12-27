import React from 'react';
import { Text } from '@components/text';

interface IconPropsType {
  iconName: string;
  iconNode: React.ReactNode;
  iconType?: string;
}

const IconList = ({ iconName, iconNode, iconType }: IconPropsType) => {
  return (
    <div className={['icon-box'].join(' ')}>
      <Text type="body" size="s">
        <b>{iconName}</b>
      </Text>
      {iconNode}
      {iconType && (
        <Text type="body" size="s">
          {iconType}
        </Text>
      )}
    </div>
  );
};

export { IconList };
export type { IconPropsType };
