import React, { useEffect } from 'react';
import { Title } from '@components/title';
import { Text } from '@components/text';
import { Checkbox } from '@components/checkbox';
import { Button } from '@components/button';
import { Switch } from '@components/switchToggle';

interface listItemProps {
  id: string;
  title: string;
  text?: string;
  iconLeft?: React.ReactNode;
  iconRightData?: { icon: React.ReactNode; onClick: () => void };
  avatarIcon?: React.ReactNode;
  image?: React.ReactNode;
  checkboxData?: any;
  switchData?: any;
  labelData?: any;
  alignTop?: boolean;
}
const ListItem = ({
  id,
  title,
  text,
  iconLeft,
  iconRightData,
  avatarIcon,
  image,
  checkboxData,
  switchData,
  labelData,
  alignTop,
}: listItemProps) => {
  const drawIcon = (
    type: 'icon' | 'avatar' | 'image' | 'iconRight',
    node: React.ReactNode,
  ) => {
    return <div className={`mds-list__${type}-box`}>{node}</div>;
  };

  const drawIconWithEvent = (icon: React.ReactNode, onClick: () => void) => {
    return (
      <div className={`mds-list__icon-box icon-with-event`} onClick={onClick}>
        {icon}
      </div>
    );
  };

  useEffect(() => {
    const listBox = document.getElementById(`mds-list__left-box-${id}`);
    const listRightBox = document.getElementById(`mds-list__right-box-${id}`);
    if (listRightBox && listBox) {
      const listRightBoxWidth = window
        .getComputedStyle(listRightBox)
        .getPropertyValue('width')
        .split('px')[0];
      listBox.style.paddingRight = `${listRightBoxWidth}px`;
    }
  }, [id]);

  return (
    <li className={['mds-list-box', alignTop ? 'top' : 'center'].join(' ')}>
      <div className="mds-list__left-box" id={`mds-list__left-box-${id}`}>
        {(iconLeft && drawIcon('icon', iconLeft)) ||
          (avatarIcon && drawIcon('avatar', avatarIcon)) ||
          (image && drawIcon('image', image))}
        <div className="mds-list__text-box">
          <Title role={3} type="title" size="xs">
            {title}
          </Title>
          <Text type="body" size="m">
            {text}
          </Text>
        </div>
      </div>
      <div className="mds-list__right-box" id={`mds-list__right-box-${id}`}>
        {(iconRightData &&
          drawIconWithEvent(iconRightData.icon, iconRightData.onClick)) ||
          (checkboxData && (
            <Checkbox
              id={`${id}-checkbox`}
              size="s"
              onClick={checkboxData.onClick}
            />
          )) ||
          (switchData && (
            <Switch id={`${id}-switch`} onClick={switchData.onClick} />
          )) ||
          (labelData && (
            <Button
              type="ghost"
              size="xs"
              id={`${id}-label-button`}
              onClick={labelData.onClick}
            >
              {labelData.label}
            </Button>
          ))}
      </div>
    </li>
  );
};

export { ListItem };
