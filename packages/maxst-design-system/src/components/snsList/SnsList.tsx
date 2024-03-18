/* eslint-disable @next/next/no-img-element */
import { Button } from '@components/button';
import React from 'react';

interface SnsListProps {
  data: {
    type: 'facebook' | 'instagram' | 'youtube' | 'blog' | 'medium';
    url: string;
  }[];
  className?: string;
}

const SnsList = ({ data, className }: SnsListProps) => {
  const onClickRouter = (url: string) => {
    window.open(url, '_blank', 'noopener');
  };

  return (
    <ul className={['mds-sns-list', className ? className : ''].join(' ')}>
      {data.map((item) => {
        return (
          <li key={item.type}>
            <Button
              size={'s'}
              type={'ghost'}
              iconOnly={
                <img
                  src={`/images/icon/${item.type}.svg`}
                  alt={`${item.type} icon`}
                />
              }
              isIconMode={true}
              onClick={() => onClickRouter(item.url)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { SnsList };
