import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@components/accordion';
import {
  LayerHorizontalLineIcon,
  ArrowDownCircleLineIcon,
} from '@maxst-designsystem/icons';
import { Title } from '@components/title';

const meta: Meta<typeof Accordion> = {
  title: 'DataDisplay/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accordion은 콘텐츠의 관련 섹션을 표시하거나 콘텐츠 양을 숨길 수 있는 리스트 목록 입니다.',
      },
    },
  },
  argTypes: {
    items: {
      description:
        'Object 형태로 data를 넘겨줍니다. head와 contents모두 component형태로 지정할 수 있습니다.',
      control: {
        type: null,
      },
    },
    width: {
      description:
        'accordion의 `width` 지정이 필요할때 사용합니다. `px` 혹은 `%`의 값을 `string`으로 넘겨줍니다.',
    },
    defaultSelectItem: {
      description:
        '선택 되어 open되어 있는 menu를 ID값으로 지정할 수 있습니다.',
    },
    expandIcon: {
      description:
        '오른쪽의 화살표 icon을 원하는 icon으로 custom할 수 있습니다.',
    },
    expandControl: {
      description:
        'accordion의 펼침 기능 제어 옵션입니다. 기본적으로 `true`를 제공합니다. \n`defaultSelectItem`과 함께 사용하여 원하는 menu만 펼쳐놓고 control을 하지 못하도록 제어할 수 있습니다.',
    },
    showExpandIcon: {
      description:
        'expand icon의 show 유무 지정 옵션입니다. 기본적으로 `true`를 제공하고 expand icon을 가리고 싶을 시 `false`로 지정해줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordionItemBody = (content: any) => {
  return <div style={{ padding: `20px 16px 35px` }}>{content}</div>;
};

const accordionItemDatas = [
  {
    id: 'item-01',
    head: 'item 01 title',
    contents: accordionItemBody('item 01 contents'),
  },
  {
    id: 'item-02',
    head: (
      <div className="accordion__head" style={{ padding: `20px 16px` }}>
        <span className="accordion__head__icon">
          <LayerHorizontalLineIcon />
        </span>
        <Title role={3} type="title" size="xs">
          item 02 title
        </Title>
      </div>
    ),
    contents: accordionItemBody('item 02 contents'),
  },
  {
    id: 'item-03',
    head: 'item 03 title',
    contents: accordionItemBody('item 03 contents'),
  },
  {
    id: 'item-04',
    head: 'item 04 title',
    contents: accordionItemBody('item 04 contents'),
    disabled: true,
  },
];

const accordionItemDatas2 = [
  {
    id: 'item-05',
    head: 'item 05 title',
    contents: accordionItemBody('item 05 contents'),
  },
  {
    id: 'item-06',
    head: 'item 06 title',
    contents: accordionItemBody('item 06 contents'),
  },
  {
    id: 'item-07',
    head: 'item 07 title',
    contents: accordionItemBody('item 07 contents'),
  },
  {
    id: 'item-08',
    head: 'item 08 title',
    contents: accordionItemBody('item 08 contents'),
    disabled: true,
  },
];

const accordionItemDatas3 = [
  {
    id: 'item-09',
    head: 'item 09 title',
    contents: accordionItemBody('item 09 contents'),
  },
  {
    id: 'item-10',
    head: 'item 10 title',
    contents: accordionItemBody('item 10 contents'),
  },
  {
    id: 'item-11',
    head: 'item 11 title',
    contents: accordionItemBody('item 11 contents'),
    disabled: true,
  },
  {
    id: 'item-12',
    head: 'item 12 title',
    contents: accordionItemBody('item 12 contents'),
  },
];

const accordionItemDatas4 = [
  {
    id: 'item-13',
    head: 'item 13 title',
    contents: accordionItemBody('item 13 contents'),
  },
  {
    id: 'item-14',
    head: 'item 14 title',
    contents: accordionItemBody('item 14 contents'),
  },
  {
    id: 'item-15',
    head: 'item 15 title',
    contents: accordionItemBody('item 15 contents'),
    disabled: true,
  },
  {
    id: 'item-16',
    head: 'item 16 title',
    contents: accordionItemBody('item 16 contents'),
  },
];

export const AccordionDefault: Story = {
  render: (args) => <Accordion {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          '기본적으로 width 100%이며 height는 들어가는 컨텐츠에 따라 가변적으로 맞춰집니다.',
      },
    },
  },
  args: {
    items: accordionItemDatas,
  },
};

export const AccordionCustomWidth: Story = {
  render: (args) => <Accordion {...args} />,
  parameters: {
    docs: {
      description: {
        story: '필요에 따라 width값을 % 혹은 px로 지정할 수 있습니다.',
      },
    },
  },
  args: {
    width: '300px',
    items: accordionItemDatas2,
  },
};

export const AccordionCustomExpandIcon: Story = {
  render: (args) => <Accordion {...args} />,
  parameters: {
    docs: {
      description: {
        story: '오른쪽 icon을 custom 할 수 있습니다. ',
      },
    },
  },
  args: {
    expandIcon: <ArrowDownCircleLineIcon />,
    items: accordionItemDatas3,
  },
};

export const AccordionNonControl: Story = {
  render: (args) => <Accordion {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'expandControl 옵션으로 펼쳐놓은 상태에서 click이 안되도록 설정할 수 있습니다. ',
      },
    },
  },
  args: {
    items: accordionItemDatas4,
    defaultSelectItem: 'item-14',
    expandControl: false,
    showExpandIcon: false,
  },
};
