/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { IconList, IconPropsType } from './IconList';
import {
  actionListData,
  navigationIconListData,
  statusIconListData,
  fileIconListData,
  techIconListData,
  lifeIconListData,
} from './IconDatas';

const meta: Meta<typeof IconList> = {
  title: 'general/Iconography',
  component: IconList,
};

export default meta;
type Story = StoryObj<typeof IconList>;

const IconLists = (iconListData: IconPropsType[]) => {
  return (
    <div className={['iconography-wrap'].join(' ')}>
      <ul className="iconography-list">
        {iconListData.map((item) => (
          <li key={item.iconName}>
            <IconList {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ActionIconList = {
  render: () => IconLists(actionListData),
};

export const NavigationIconList = {
  render: () => IconLists(navigationIconListData),
};
export const StatusIconList = {
  render: () => IconLists(statusIconListData),
};

export const FileIconList = {
  render: () => IconLists(fileIconListData),
};

export const TechIconList = {
  render: () => IconLists(techIconListData),
};

export const LifeIconList = {
  render: () => IconLists(lifeIconListData),
};
