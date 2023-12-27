import type { Meta, StoryObj } from '@storybook/react';
import { TextLabel } from '@components/text';
import { Fragment } from 'react';
import { Source } from '@storybook/blocks';
import { Container } from '@components/container';

const meta: Meta<typeof TextLabel> = {
  title: 'general/SemanticTypography',
  component: TextLabel,
  argTypes: {
    children: {
      description:
        'type: React.ReactNode 기본적으로 string으로 정의하고 필요한 경우 icon같은 component를 같이 정의할 수 있습니다.',
    },
  },
};

export default meta;
type StoryTextLabel = StoryObj<typeof TextLabel>;

type textLabelDataType = {
  size: 'xl' | 'l' | 'm' | 's';
  content: string;
};

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

const TextLabels = (
  labelData: {
    size: 'xl' | 'l' | 'm' | 's';
    content: string;
  }[],
) => {
  return (
    <Container>
      <div className="font-box-wrap">
        {labelData.map((textItem, index) => (
          <Fragment key={'label' + textItem.size + index}>
            <TextLabel size={textItem.size}>{textItem.content}</TextLabel>
            <br />
          </Fragment>
        ))}
        <Source
          dark={true}
          code={`
<TextLabel size="xl">bla bla</TextLabel>`}
        />
      </div>
    </Container>
  );
};

export const SemanticLabels: StoryTextLabel = {
  render: () => TextLabels(labelData),
};
