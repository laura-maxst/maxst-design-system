import type { Meta, StoryObj } from '@storybook/react';
import { Chip, ChipGroup } from '@components/chip';
import {
  MailLineIcon,
  MailFillIcon,
  UserFillIcon,
} from '@maxst-designsystem/icons';

const meta: Meta<typeof ChipGroup> = {
  title: 'DataDisplay/ChipGroup',
  component: ChipGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '여러 개의 Chip을 감싸주는 용도로 쓰입니다. 2개 이상 사용시 8px의 여백이 부여됩니다.',
      },
    },
  },
  argTypes: {
    className: {
      control: {
        type: null,
      },
    },
    children: {
      description:
        'chip들이 여러개가 들어갈 수 있습니다. 이때 chip은 multiline이 가능하지 않고 말줄임으로 적용됩니다.',
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

export const ChipGroupDefault: Story = {
  render: (args) => (
    <ChipGroup {...args}>
      <Chip type="default" size="l">
        default chip
      </Chip>
      <Chip type="tertiary" size="l">
        group내에서의 chip은 multiline이 가능하지 않고 말줄임으로 적용됩니다.
      </Chip>
      <Chip type="color-mint" size="l" action="check">
        check action chip
      </Chip>
      <Chip
        type="color-magenta"
        size="l"
        action="check"
        iconCheck={<MailLineIcon />}
      >
        check action chip custom
      </Chip>
      <Chip type="color-bluegray" size="l" action="filter">
        filter action chip
      </Chip>
      <Chip
        type="color-purple"
        size="l"
        iconLeft={<UserFillIcon />}
        action="filter"
      >
        filter action chip
      </Chip>
      <Chip type="color-blue" size="l" iconLeft={<MailFillIcon />}>
        left icon chip
      </Chip>
      <Chip type="default" size="l">
        default chip
      </Chip>
      <Chip type="tertiary" size="l" action="filter">
        group내에서의 chip은 multiline이 가능하지 않고 말줄임으로 적용됩니다.
      </Chip>
      <Chip type="color-mint" size="l" action="check">
        check action chip
      </Chip>
      <Chip
        type="color-magenta"
        size="l"
        action="check"
        iconCheck={<MailLineIcon />}
      >
        check action chip custom
      </Chip>
      <Chip type="color-bluegray" size="l" action="filter">
        filter action chip
      </Chip>
      <Chip
        type="color-purple"
        size="l"
        iconLeft={<UserFillIcon />}
        action="filter"
      >
        filter action chip
      </Chip>
      <Chip type="color-blue" size="l" iconLeft={<MailFillIcon />}>
        left icon chip
      </Chip>
    </ChipGroup>
  ),
};
