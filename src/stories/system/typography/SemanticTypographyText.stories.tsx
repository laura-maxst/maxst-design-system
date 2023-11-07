import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@components/text';
import { Source } from '@storybook/blocks';
import { Container } from '@components/container';

const meta: Meta<typeof Text> = {
  title: 'system/SemanticTypography',
  component: Text,
  argTypes: {
    children: {
      description:
        'type: React.ReactNode 기본적으로 string으로 정의하고 필요한 경우 icon같은 component를 같이 정의할 수 있습니다.',
    },
    role: {
      description: 'text의 color 위계를 지정합니다.',
    },
    innerHtml: {
      description:
        'children 내부에 html tag를 사용해야 하는 경우에 boolean값으로 활성화 시켜줍니다.',
    },
  },
};

export default meta;
type StoryText = StoryObj<typeof Text>;

type textDataType = {
  type: 'body';
  size: 's' | 'l' | 'm';
  content: string;
  innerHtml?: boolean;
};

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
  // {
  //   innerHtml: true,
  //   type: 'body',
  //   size: 'l',
  //   content: 'innerHtml이 존재하는 경우 <b>innerHtml={true}</b>로 props 전달',
  // },
];

const Texts = (
  bodyData: {
    type: 'body';
    size: 's' | 'l' | 'm';
    content: string;
    innerHtml?: boolean;
  }[],
) => {
  return (
    <Container>
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
        <Source
          dark={true}
          code={`
<Text
  innerHtml={true}
  type="body"
  size="l"
>
  innerHtml이 존재하는 경우 <b>innerHtml={true}</b>로 props 전달
</Text>`}
        />
      </div>
    </Container>
  );
};

export const SemanticTexts: StoryText = {
  render: () => Texts(bodyData),
};
