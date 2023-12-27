/* eslint-disable @next/next/no-img-element */
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '@components/tab';
import { tabPropsType } from '@components/tab/Tab';
import { MailLineIcon } from '@maxst-designsystem/icons';

const meta: Meta<typeof Tab> = {
  title: 'Navigation/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '탭은 관련 콘텐츠를 구성하는데 사용됩니다. 사용자는 탭을 이용하여 페이지 내에서 정보를 탐색할 수 있습니다. \n Main Tab과 Secondary Tab 두가지를 제공합니다.',
      },
    },
  },
  argTypes: {
    selectValue: {
      description: '초기 선택할 탭의 `id`값을 지정합니다.',
    },
    secondaryMode: {
      description:
        'secondary mode의 tab 사용시 `boolean`값으로 지정합니다. tab내부에 tab이 필요할 경우 사용하는 것을 권장합니다.',
    },
    widthFixed: {
      description:
        'tab button들이 tab의 `width 100%`를 넘지 않을 시에는 tab의 `width`에 맞춰 비율로 늘어나고, tab의 `width 100%`를 넘을 시에는 모든 tab button의 `width`가 일정하게 맞춰지는 옵션입니다. secondary mode에서는 적용되지 않습니다.',
    },
    size: {
      description: 'secondary mode에서는 제공하지 않습니다.',
    },
    tabData: {
      description: `\n
      {\n
        id: string;\n
        label: string;\n
        icon?: React.ReactNode;\n
        count?: number;\n
        children?: React.ReactNode;\n
        state?: 'default' | 'pressed' | 'disabled';\n
      };\n
      `,
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

const defaultTabData: tabPropsType['tabData'] = [
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
];

const fixedTabData: tabPropsType['tabData'] = [
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
];

const secondaryTabData: tabPropsType['tabData'] = [
  {
    id: 'secondary-tab-01',
    label: 'tab 01',
    children: 'tab panel 01',
    icon: <MailLineIcon />,
  },
  {
    id: 'secondary-tab-02',
    label: 'tab 02',
    children: 'tab panel 02',
    count: 9,
  },
  {
    id: 'secondary-tab-03',
    label: 'tab 03',
    children: 'tab panel 03',
    icon: <MailLineIcon />,
    state: 'disabled',
    count: 99,
  },
  {
    id: 'secondary-tab-04',
    label: 'tab 04',
    children: 'tab panel 04',
    count: 9,
  },
  {
    id: 'secondary-tab-05',
    label: 'tab 05',
    children: 'tab panel 05',
    state: 'disabled',
    count: 9,
  },
  {
    id: 'secondary-tab-06',
    label: 'tab 06',
    children: 'tab panel 06',
    count: 9,
  },
  {
    id: 'secondary-tab-07',
    label: 'tab 07',
    children: 'tab panel 07',
  },
  {
    id: 'secondary-tab-08',
    label: 'tab 08',
    children: 'tab panel 08',
    icon: <MailLineIcon />,
  },
  {
    id: 'secondary-tab-09',
    label: 'tab 09',
    children: 'tab panel 09',
    count: 9,
  },
  {
    id: 'secondary-tab-10',
    label: 'tab 10',
    children: 'tab panel 10',
    icon: <MailLineIcon />,
    state: 'disabled',
  },
  {
    id: 'secondary-tab-11',
    label: 'tab 11',
    children: 'tab panel 11',
    icon: <MailLineIcon />,
    state: 'disabled',
  },
  {
    id: 'secondary-tab-12',
    label: 'tab 12',
    children: 'tab panel 12',
  },
  {
    id: 'secondary-tab-13',
    label: 'tab 13',
    children: 'tab panel 13',
    icon: <MailLineIcon />,
  },
  {
    id: 'secondary-tab-14',
    label: 'tab 14',
    children: 'tab panel 14',
    icon: <MailLineIcon />,
  },
];

export const TabDefault: Story = {
  render: (args) => <Tab {...args} />,
  args: {
    size: 'l',
    selectValue: 'tab-01',
    tabData: defaultTabData,
  },
};

export const TabWidthFixed: Story = {
  render: (args) => <Tab {...args} />,
  args: {
    size: 'l',
    selectValue: 'tab-01',
    tabData: fixedTabData,
    widthFixed: true,
  },
};

export const SecondaryTab: Story = {
  render: (args) => <Tab {...args} />,
  args: {
    secondaryMode: true,
    selectValue: 'secondary-tab-01',
    tabData: secondaryTabData,
  },
};
