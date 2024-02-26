import type { Meta, StoryObj } from '@storybook/react';
import { List } from '@components/list';
import {
  UserLineIcon,
  ProfileFillIcon,
  DeleteFillIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof List> = {
  title: 'DataDisplay/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'List는 선택 요소들의 정보를 섹션 또는 그룹으로 나누어 사용하는 컴포넌트입니다.\n다양한 정보를 목록 형태로 효율적으로 정리할 수 있습니다.',
      },
    },
  },
  argTypes: {
    listItemData: {
      description:
        'iconRight는 custom이 가능합니다. \niconRightData로 icon과 event를 설정할 수 있습니다.\ncheckboxData, labelData, switchData에 onClick event를 담아 보내서 값을 return 받습니다.\n좌측 요소와 우측 요소는 하나씩만 표출되도록 지원합니다.',
    },
    alignTop: {
      description:
        'list의 기본 정렬은 center 제공. alignTop 옵션으로 상단 정렬 가능',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const onClickCheckbox = (e: any) => {
  console.log(e);
};
const onClickswitch = (value: boolean) => {
  console.log(value);
};

const onClickLabelButton = (e: any) => {
  console.log(e.target);
};
const onClickRightIcon = () => {
  console.log('right icon click');
};

const listItemData = [
  {
    id: 'list-01',
    title: 'List',
    text: 'Supporting text that is long enough to fill up multiple lines',
    iconLeft: <UserLineIcon />,
    iconRightData: { icon: <DeleteFillIcon />, onClick: onClickRightIcon },
  },
  {
    id: 'list-01',
    title: 'List',
    text: 'Supporting text that is long enough to fill up multiple lines',
    iconLeft: <UserLineIcon />,
    iconRightData: { icon: <DeleteFillIcon />, onClick: onClickRightIcon },
    disabled: true,
  },
  {
    id: 'list-02',
    title: 'List',
    text: 'Supporting text that is long enough to fill up multiple lines',
    avatarIcon: <ProfileFillIcon />,
    checkboxData: { onClick: onClickCheckbox },
  },
  {
    id: 'list-03',
    title: 'List',
    text: 'Supporting text that is long enough to fill up multiple lines',
    switchData: { onClick: onClickswitch },
  },
  {
    id: 'list-04',
    title: 'List',
    text: 'Supporting text that is long enough to fill up multiple lines Supporting text that is long enough to fill up multiple lines Supporting text that is long enough to fill up multiple lines Supporting text that is long enough to fill up multiple lines Supporting text that is long enough to fill up multiple lines Supporting text that is long enough to fill up multiple lines',
    // eslint-disable-next-line @next/next/no-img-element
    image: <img src="./images/img_list_profile_image_sample.png" alt="" />,
    labelData: { label: 'label', onClick: onClickLabelButton },
  },
];

export const ListDefault: Story = {
  render: (args) => <List {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'List는 쓰임새에 맞게 line수와 icon 등의 아이템으로 구성할 수 있습니다.',
      },
    },
  },
  args: { listItemData: listItemData },
};

export const ListOneLine: Story = {
  render: (args) => <List {...args} />,
  args: {
    listItemData: [
      {
        id: 'list-one-line-01',
        title: 'Headline',
      },
      {
        id: 'list-one-line-02',
        title: 'Headline',
        iconLeft: <UserLineIcon />,
      },
      {
        id: 'list-one-line-03',
        title: 'Headline',
        avatarIcon: <ProfileFillIcon />,
        checkboxData: { onClick: onClickCheckbox },
      },
      {
        id: 'list-one-line-04',
        title: 'Headline',
        // eslint-disable-next-line @next/next/no-img-element
        image: <img src="./images/img_list_profile_image_sample.png" alt="" />,
        labelData: { label: 'label', onClick: onClickLabelButton },
      },
    ],
  },
};

export const ListTwoLine: Story = {
  render: (args) => <List {...args} />,
  args: {
    listItemData: [
      {
        id: 'list-two-line-01',
        title: 'Headline',
        text: 'Supporting text',
      },
      {
        id: 'list-two-line-02',
        title: 'Headline',
        iconLeft: <UserLineIcon />,
        text: 'Supporting text',
      },
      {
        id: 'list-two-line-03',
        title: 'Headline',
        avatarIcon: <ProfileFillIcon />,
        text: 'Supporting text',
        checkboxData: { onClick: onClickCheckbox },
      },
      {
        id: 'list-two-line-04',
        title: 'Headline',
        // eslint-disable-next-line @next/next/no-img-element
        image: <img src="./images/img_list_profile_image_sample.png" alt="" />,
        labelData: { label: 'label', onClick: onClickLabelButton },
        text: 'Supporting text',
      },
    ],
  },
};

export const ListThreeLine: Story = {
  render: (args) => <List {...args} />,
  args: {
    listItemData: [
      {
        id: 'list-three-line-01',
        title: 'Headline',
        text: 'Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines.',
      },
      {
        id: 'list-three-line-02',
        title: 'Headline',
        iconLeft: <UserLineIcon />,
        text: 'Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines.',
      },
      {
        id: 'list-three-line-03',
        title: 'Headline',
        avatarIcon: <ProfileFillIcon />,
        checkboxData: { onClick: onClickCheckbox },
        text: 'Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines.',
      },
      {
        id: 'list-three-line-04',
        title: 'Headline',
        // eslint-disable-next-line @next/next/no-img-element
        image: <img src="./images/img_list_profile_image_sample.png" alt="" />,
        labelData: { label: 'label', onClick: onClickLabelButton },
        text: 'Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines. Supporting text that is long enough to fill up multiple lines.',
      },
    ],
  },
};

export const ListWithRightIcon: Story = {
  render: (args) => <List {...args} />,
  args: {
    listItemData: [
      {
        id: 'list-right-icon-01',
        title: 'Headline',
        iconRightData: { icon: <DeleteFillIcon />, onClick: onClickRightIcon },
      },
    ],
  },
};

export const ListWithCheckbox: Story = {
  render: (args) => <List {...args} />,
  args: {
    listItemData: [
      {
        id: 'list-checkbox-01',
        title: 'Headline',
        checkboxData: { onClick: onClickCheckbox },
      },
    ],
  },
};

export const ListWithSwitch: Story = {
  render: (args) => <List {...args} />,
  args: {
    listItemData: [
      {
        id: 'list-switch-01',
        title: 'Headline',
        switchData: { onClick: onClickswitch },
      },
    ],
  },
};

export const ListWithLabelButton: Story = {
  render: (args) => <List {...args} />,
  args: {
    listItemData: [
      {
        id: 'list-label-button-01',
        title: 'Headline',
        labelData: { label: 'label', onClick: onClickLabelButton },
      },
    ],
  },
};
