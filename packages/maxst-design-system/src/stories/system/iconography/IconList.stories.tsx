import type { Meta, StoryObj } from '@storybook/react';
import { IconList, IconPropsType } from './IconList';
import {
  actionListData,
  navigationIconListData,
  etcIconListData,
} from './IconDatas';

const meta: Meta<typeof IconList> = {
  title: 'system/Iconography',
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

export const EtcIconList = {
  render: () => IconLists(etcIconListData),
};
