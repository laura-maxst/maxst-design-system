import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '@components/title';
import { Text, TextLabel } from '@components/text';

const meta: Meta<typeof Title> = {
  title: 'system/SemanticTypography',
  component: Title,
};

export default meta;
type StoryTitle = StoryObj<typeof Title>;
type StoryText = StoryObj<typeof Text>;

type titleDataType = {
  role: 1 | 2 | 3 | 4 | 5 | 6;
  type: 'title';
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  content: string;
};

type textDataType = {
  type: 'body';
  size: 's' | 'l' | 'm';
  content: string;
  innerHtml?: boolean;
};

type textLabelDataType = {
  size: 'xl' | 'l' | 'm' | 's';
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

const bodyData: textDataType[] = [
  {
    type: 'body',
    size: 'l',
    content: 'font-body-l',
  },
  {
    type: 'body',
    size: 'm',
    content: 'font-body-m',
  },
  {
    type: 'body',
    size: 's',
    content: 'font-body-s',
  },
  {
    innerHtml: true,
    type: 'body',
    size: 'l',
    content: 'innerHtml이 존재하는 경우 <b>innerHtml={true}</b>로 props 전달',
  },
];

const labelData: textLabelDataType[] = [
  {
    size: 'xl',
    content: 'font-label-xl',
  },
  {
    size: 'l',
    content: 'font-label-l',
  },
  {
    size: 'm',
    content: 'font-label-m',
  },
  {
    size: 's',
    content: 'font-label-s',
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
    </div>
  );
};

const Texts = (
  bodyData: {
    type: 'body';
    size: 's' | 'l' | 'm';
    content: string;
    innerHtml?: boolean;
  }[],
) => {
  return (
    <div className="font-box-wrap">
      {bodyData.map((textItem, index) => (
        <Text
          innerHtml={textItem.innerHtml}
          type={textItem.type}
          size={textItem.size}
          key={textItem.type + textItem.size + index}
        >
          {textItem.content}
        </Text>
      ))}
    </div>
  );
};

const TextLabels = (
  labelData: {
    size: 'xl' | 'l' | 'm' | 's';
    content: string;
  }[],
) => {
  return (
    <div className="font-box-wrap">
      {labelData.map((textItem, index) => (
        <TextLabel size={textItem.size} key={'label' + textItem.size + index}>
          {textItem.content}
        </TextLabel>
      ))}
    </div>
  );
};

export const SemanticTitles: StoryTitle = {
  render: () => Titles(titleData),
};

export const SemanticTexts: StoryText = {
  render: () => Texts(bodyData),
};

export const SemanticLabels: StoryText = {
  render: () => TextLabels(labelData),
};
