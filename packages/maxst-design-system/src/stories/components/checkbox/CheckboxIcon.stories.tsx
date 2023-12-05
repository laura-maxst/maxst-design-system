import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxIcon } from '@components/checkbox';
import {
  HeartLineIcon,
  HeartFillIcon,
  StarLineIcon,
  StarFillIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof CheckboxIcon> = {
  title: 'Components/CheckboxIcon',
  component: CheckboxIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox-icon은 좋아요,북마크와 같이 아이콘으로만 이루어진 유형입니다. Unchecked/Checked 2가지 타입으로 Unchecked를 기본으로 사용합니다.',
      },
    },
  },
  argTypes: {
    id: {
      control: {
        type: null,
      },
    },
    checkOffIcon: {
      control: {
        type: null,
      },
    },
    checkOnIcon: {
      control: {
        type: null,
      },
    },
    onChange: {
      description: 'event.target값 return',
      control: {
        type: null,
      },
    },
    onClick: {
      description: 'event.target값 return',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxIcon>;

const onClickIcon = (e: any) => {
  console.log(e);
};

export const CheckboxIcons: Story = {
  render: () => (
    <div>
      <CheckboxIcon
        id="checkbox-icon-star"
        size="l"
        checked={false}
        disabled={false}
        checkOffIcon={<StarLineIcon />}
        checkOnIcon={<StarFillIcon />}
        onClick={onClickIcon}
      />
      <CheckboxIcon
        id="checkbox-icon-heart"
        size="l"
        checked={false}
        disabled={false}
        checkOffIcon={<HeartLineIcon />}
        checkOnIcon={<HeartFillIcon />}
        onClick={onClickIcon}
      />
    </div>
  ),
};

export const CheckboxIconDefault: Story = {
  args: {
    id: 'checkbox-icon-heart2',
    size: 'l',
    checked: false,
    disabled: false,
    checkOffIcon: <HeartLineIcon />,
    checkOnIcon: <HeartFillIcon />,
    onClick: onClickIcon,
  },
};
export const CheckboxIconStar: Story = {
  args: {
    id: 'checkbox-icon-star2',
    size: 'l',
    checked: false,
    disabled: false,
    checkOffIcon: <StarLineIcon />,
    checkOnIcon: <StarFillIcon />,
    onClick: onClickIcon,
  },
};
