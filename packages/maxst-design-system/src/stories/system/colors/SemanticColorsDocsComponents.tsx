import React from 'react';
import { Title } from '@components/title';
import { Text } from '@components/text';

function TextColorsThemePreview() {
  return (
    <div className="semantic-colors__theme-sample__box">
      <div className="light-mode">
        <Title type="title" size="xl" role={0}>
          Title
        </Title>
        <Title type="title" size="m" role={1}>
          Subtitle
        </Title>
        <Text type="body" size="m">
          본문 내용입니다.
        </Text>
        <Text type="body" size="m">
          본문 텍스트 색상을 사용하세요.
        </Text>
      </div>
      <div className="dark-mode">
        <Title type="title" size="xl" role={0}>
          Title
        </Title>
        <Title type="title" size="m" role={1}>
          Subtitle
        </Title>
        <Text type="body" size="m">
          본문 내용입니다.
        </Text>
        <Text type="body" size="m">
          본문 텍스트 색상을 사용하세요.
        </Text>
      </div>
    </div>
  );
}

export { TextColorsThemePreview };
