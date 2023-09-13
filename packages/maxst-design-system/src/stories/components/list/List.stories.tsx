import type { Meta, StoryObj } from '@storybook/react';
import { List } from '@components/list';
import {
  UserLineIcon,
  ProfileFillIcon,
  DeleteFillIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof List> = {
  title: 'components/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    listItemData: {
      description:
        'iconRight는 custom이 가능하다. iconRightData로 icon과 event를 설정할 수 있다.\ncheckboxData, labelData, switchData 에 onClick event를 담아 보내서 값을 return 받을 수 있다.\n좌측 요소와 우측 요소는 하나씩만 존재 가능하다.',
      // control: {
      //   type: null,
      // },
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
  args: { listItemData: listItemData },
};
