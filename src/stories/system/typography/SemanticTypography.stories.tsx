import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '@components/title';
import { Source } from '@storybook/blocks';
import { Container } from '@components/container';

const meta: Meta<typeof Title> = {
  title: 'system/SemanticTypography',
  component: Title,
  argTypes: {
    children: {
      description:
        'type: React.ReactNode 기본적으로 string으로 정의하고 필요한 경우 icon같은 component를 같이 정의할 수 있습니다.',
    },
    role: {
      description: 'h태그의 위계를 지정합니다. 1=h1, 2=h2, ...',
    },
  },
};

export default meta;
type StoryTitle = StoryObj<typeof Title>;

type titleDataType = {
  role: 1 | 2 | 3 | 4 | 5 | 6;
  type: 'title';
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  content: string;
};

const titleData: titleDataType[] = [
  {
    role: 1,
    type: 'title',
    size: 'xl',
    content: 'font-title-xl',
  },
  {
    role: 2,
    type: 'title',
    size: 'l',
    content: 'font-title-l',
  },
  {
    role: 3,
    type: 'title',
    size: 'm',
    content: 'font-title-m',
  },
  {
    role: 4,
    type: 'title',
    size: 's',
    content: 'font-title-s',
  },
  {
    role: 5,
    type: 'title',
    size: 'xs',
    content: 'font-title-xs',
  },
];

const Titles = (
  titleData: {
    role: 1 | 2 | 3 | 4 | 5 | 6;
    type: 'title';
    size: 'xl' | 'l' | 'm' | 's' | 'xs';
    content: string;
  }[],
) => {
  return (
    <Container>
      <div className="font-box-wrap">
        {titleData.map((titleItem) => (
          <Title
            role={titleItem.role}
            type={titleItem.type}
            size={titleItem.size}
            key={'title-' + titleItem.role}
          >
            {titleItem.content}
          </Title>
        ))}
        <Source
          dark={true}
          code={`<Title
  role={1}
  type="title"
  size="xl"
>
  blabla
</Title>`}
        />
      </div>
    </Container>
  );
};

export const SemanticTitles: StoryTitle = {
  render: () => Titles(titleData),
};
