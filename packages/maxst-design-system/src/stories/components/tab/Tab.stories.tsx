/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '@components/tab';
import { MailLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    selectValue: {
      description: '초기 선택할 탭의 id값을 할당해줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const TabDefault: Story = {
  render: (args) => <Tab {...args} />,
  args: {
    size: 'l',
    selectValue: 'tab-01',
    tabData: [
      {
        id: 'tab-01',
        label: 'tab 01',
        children: 'tab panel 01',
        icon: <MailLineIcon />,
      },
      {
        id: 'tab-02',
        label: 'tab 02',
        children: 'tab panel 02',
        count: 9,
      },
      {
        id: 'tab-03',
        label: 'tab 03',
        children: 'tab panel 03',
        icon: <MailLineIcon />,
        state: 'disabled',
        count: 99,
      },
      {
        id: 'tab-04',
        label: 'tab 04',
        children: 'tab panel 04',
        count: 9,
      },
      {
        id: 'tab-05',
        label: 'tab 05',
        children: 'tab panel 05',
        state: 'disabled',
        count: 9,
      },
      {
        id: 'tab-06',
        label: 'tab 06',
        children: 'tab panel 06',
        count: 9,
      },
      {
        id: 'tab-07',
        label: 'tab 07',
        children: 'tab panel 07',
      },
      {
        id: 'tab-08',
        label: 'tab 08',
        children: 'tab panel 08',
        icon: <MailLineIcon />,
      },
      {
        id: 'tab-09',
        label: 'tab 09',
        children: 'tab panel 09',
        count: 9,
      },
      {
        id: 'tab-10',
        label: 'tab 10',
        children: 'tab panel 10',
        icon: <MailLineIcon />,
        state: 'disabled',
      },
      {
        id: 'tab-11',
        label: 'tab 11',
        children: 'tab panel 11',
        icon: <MailLineIcon />,
        state: 'disabled',
      },
      {
        id: 'tab-12',
        label: 'tab 12',
        children: 'tab panel 12',
      },
      {
        id: 'tab-13',
        label: 'tab 13',
        children: 'tab panel 13',
        icon: <MailLineIcon />,
      },
      {
        id: 'tab-14',
        label: 'tab 14',
        children: 'tab panel 14',
        icon: <MailLineIcon />,
        count: 99,
      },
    ],
  },
};
