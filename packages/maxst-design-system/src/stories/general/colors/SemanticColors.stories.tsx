import type { Meta, StoryObj } from '@storybook/react';

import { SemanticColors } from './SemanticColors';
import { Container } from '@components/container';
import { Title } from '@components/title';
import { Text } from '@components/text';
import { TextField } from '@components/textField';
import { ButtonGroup, Button } from '@components/button';

const meta: Meta<typeof SemanticColors> = {
  title: 'general/SemanticColors',
  component: SemanticColors,
};

export default meta;
type Story = StoryObj<typeof SemanticColors>;

const Palettes = (palette: { color: string }[]) => {
  return (
    <div className="color-box-wrap">
      {palette.map((item) => (
        <SemanticColors color={item.color} key={item.color} />
      ))}
    </div>
  );
};

export const TextColors = {
  render: () => (
    <Container className="text-color-theme">
      <Title type="title" size="xl" role={1} align="center">
        Title
      </Title>
      <Title type="title" size="m" role={2}>
        Subtitle
      </Title>
      <Text type="body" size="l">
        본문 내용입니다.
      </Text>
      <Text type="body" size="m">
        본문 텍스트 색상을 사용하세요.
      </Text>
      <Text type="body" size="m" role="sub">
        서브 본문 내용입니다.
      </Text>
      <Text type="body" size="m" role="sub">
        서브 본문 텍스트 색상을 사용하세요.
      </Text>
      <Text type="body" size="s" role="subtlest">
        subtlest 본문 내용입니다.
      </Text>
      <Text type="body" size="s" role="subtlest">
        subtlest 본문 텍스트 색상을 사용하세요.
      </Text>
      <TextField
        label="Input title"
        placeholder="내용을 입력해 주세요."
        state="disabled"
      />
    </Container>
  ),
};

export const BackgroundColors = {
  render: () => (
    <Container className="text-color-theme background-base">
      <Title type="title" size="xl" role={1} align="center">
        Title
      </Title>
      <Container className="background-2nd-base">
        <Title type="title" size="m" role={2}>
          Title
        </Title>
        <Container className="background-base">
          <Text type="body" size="l">
            본문 내용입니다.
          </Text>
          <Text type="body" size="m">
            본문 텍스트 색상을 사용하세요.
          </Text>
          <Text type="body" size="m" role="sub">
            서브 본문 내용입니다.
          </Text>
          <Text type="body" size="m" role="sub">
            서브 본문 텍스트 색상을 사용하세요.
          </Text>
        </Container>
        <br />
        <Container className="background-base">
          <Text type="body" size="s" role="subtlest">
            subtlest 본문 내용입니다.
          </Text>
          <Text type="body" size="s" role="subtlest">
            subtlest 본문 텍스트 색상을 사용하세요.
          </Text>
          <TextField
            label="Input title"
            placeholder="내용을 입력해 주세요."
            state="disabled"
          />
        </Container>
      </Container>
    </Container>
  ),
};

export const BorderColors = {
  render: () => (
    <Container className="text-color-theme">
      <Title type="title" size="m" role={2}>
        Title
      </Title>
      <br />
      <Text type="body" size="l">
        본문 내용입니다.
      </Text>
      <br />
      <TextField
        state="onfocused"
        value="활성화된 테두리 색상입니다."
        size="s"
      />
      <br />
      <TextField value="활성화된 테두리 색상입니다." size="s" />
      <br />
      <TextField
        state="disabled"
        value="비활성화된 테두리 색상입니다."
        size="s"
      />
      <br />
      <ButtonGroup fullWidth={true}>
        <Button type="tertiary" size="l">
          취소
        </Button>
        <Button type="primary" size="l">
          확인
        </Button>
      </ButtonGroup>
    </Container>
  ),
};
