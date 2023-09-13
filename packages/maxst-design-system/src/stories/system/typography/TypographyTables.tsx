import React from 'react';
import { DocsTable } from '@stories/common/DocsTable';

function TypeScaleTable() {
  return (
    <DocsTable
      headData={BaseTypeScaleTableData.headData}
      bodyData={BaseTypeScaleTableData.bodyData}
      className="base-typography__table base-typography__type-scale__table"
    />
  );
}
function TypeWeightTable() {
  return (
    <DocsTable
      headData={BaseTypeWeightTableData.headData}
      bodyData={BaseTypeWeightTableData.bodyData}
      className="base-typography__table base-typography__type-weight__table"
    />
  );
}
function SemanticTitleTable() {
  return (
    <DocsTable
      headData={SemanticTitleTableData.headData}
      bodyData={SemanticTitleTableData.bodyData}
      className="semantic-typography__table semantic-typography__title__table"
    />
  );
}
function SemanticBodyTable() {
  return (
    <DocsTable
      headData={SemanticBodyTableData.headData}
      bodyData={SemanticBodyTableData.bodyData}
      className="semantic-typography__table semantic-typography__body__table"
    />
  );
}
function SemanticLabelTable() {
  return (
    <DocsTable
      headData={SemanticLabelTableData.headData}
      bodyData={SemanticLabelTableData.bodyData}
      className="semantic-typography__table semantic-typography__body__table"
    />
  );
}

export {
  TypeScaleTable,
  TypeWeightTable,
  SemanticTitleTable,
  SemanticBodyTable,
  SemanticLabelTable,
};

// data
const BaseTypeScaleTableData = {
  headData: ['Token', 'pt', 'rem', 'View'],
  bodyData: [
    ['font-size-12', '12pt', '0.75rem', '가나다라마바사abcdef12345'],
    ['font-size-14', '14pt', '0.875rem', '가나다라마바사abcdef12345'],
    ['font-size-16', '16pt', '1rem', '가나다라마바사abcdef12345'],
    ['font-size-18', '18pt', '1.125rem', '가나다라마바사abcdef12345'],
    ['font-size-20', '20pt', '1.25rem', '가나다라마바사abcdef12345'],
    ['font-size-24', '24pt', '1.5rem', '가나다라마바사abcdef12345'],
    ['font-size-28', '28pt', '1.75rem', '가나다라마바사abcdef12345'],
    ['font-size-32', '32pt', '2rem', '가나다라마바사abcdef12345'],
    ['font-size-36', '36pt', '2.25rem', '가나다라마바사abcdef12345'],
    ['font-size-40', '40pt', '2.5rem', '가나다라마바사abcdef12345'],
    ['font-size-48', '48pt', '3rem', '가나다라마바사abcdef12345'],
  ],
};
const BaseTypeWeightTableData = {
  headData: ['Token', 'Weight Keyword ', 'Weight Number', 'View'],
  bodyData: [
    ['font-weight-semibold', 'Semibold', '600', '가나다라마바사abcdef12345'],
    ['font-weight-medium', 'Medium', '500', '가나다라마바사abcdef12345'],
    ['font-weight-regular', 'Regular', '400', '가나다라마바사abcdef12345'],
  ],
};

const SemanticTitleTableData = {
  headData: [
    'Token',
    'Role',
    'Desktop Scale',
    'Mobile Scale',
    'Font Weight',
    'Line Height',
  ],
  bodyData: [
    [
      'font-title-xl',
      '페이지 단위의 타이틀에 사용합니다. (ex. 히어로 영역) ',
      'font-size-48<br/>40pt / 3rem',
      'font-size-32<br/>40pt / 3rem',
      'Semibold',
      '1.3x',
    ],
    [
      'font-title-l',
      '페이지 단위의 타이틀에 사용합니다. (ex. 페이지 상단 타이틀) ',
      'font-size-32<br/>32pt / 2rem',
      'font-size-32<br/>40pt / 3rem',
      'Semibold',
      '1.3x',
    ],
    [
      'font-title-m',
      '섹션 단위의 타이틀에 주로 사용합니다.',
      'font-size-24<br/>    24pt / 1.5rem',
      'font-size-20<br/>28pt / 1.75rem',
      'Semibold',
      '1.3x',
    ],
    [
      'font-title-s',
      '섹션 단위의 타이틀에 하위 위계로 주로 사용합니다. (ex)',
      'font-size-20<br/>    20pt / 1.25rem',
      'font-size-18<br/>24pt / 1.5rem',
      'Semibold',
      '1.3x',
    ],
    [
      'font-title-xs',
      '위젯 단위의 타이틀로 사용합니다. (ex)',
      'font-size-18<br/>    18pt / 1.125rem',
      'font-size-16<br/>20pt / 1.25rem',
      'Semibold',
      '1.3x',
    ],
  ],
};

const SemanticBodyTableData = {
  headData: [
    'Token',
    'Role',
    'Desktop Scale',
    'Mobile Scale',
    'Font Weight',
    'Line Height',
  ],
  bodyData: [
    [
      'font-body-l',
      '기본 본문보다 조금 더 큰 사이즈의 텍스트 입니다. <br/>주로 페이지 단위 위계의 타이틀과 함께 사용합니다. ',
      'font-size-16<br/>16pt / 1rem',
      'font-size-16<br/>18pt / 1rem',
      'Regular',
      '1.5x',
    ],
    [
      'font-body-m',
      '기본 본문 텍스트 사이즈 입니다. (ex. 텍스트 박스)',
      'font-size-14<br/>14pt / 2.5rem',
      'font-size-14<br/>16pt / 1rem',
      'Regular',
      '1.5x',
    ],
    [
      'font-body-s',
      '본문 보조, 하위 위계의 텍스트로 사용합니다.',
      'font-size-12<br/>12pt / 0.75rem',
      'font-size-12<br/>12pt / 0.75rem',
      'Regular',
      '1.5x',
    ],
  ],
};

const SemanticLabelTableData = {
  headData: [
    'Token',
    'Role',
    'Desktop Scale',
    'Mobile Scale',
    'Font Weight',
    'Line Height',
  ],
  bodyData: [
    [
      'font-label-xl',
      '가장 큰 크기의 버튼 요소 혹은 ~~로 사용합니다. (ex. GNB) ',
      'font-size-18<br/>18pt / 1rem',
      'font-size-18<br/>18pt / 1rem',
      'Medium',
      '1.5x',
    ],
    [
      'font-label-l',
      '큰 크기의 버튼 요소에 활용합니다. (ex. 버튼/2nd 메뉴) ',
      'font-size-16<br/>16pt / 1rem',
      'font-size-16<br/>18pt / 1rem',
      'Medium',
      '1.5x',
    ],
    [
      'font-label-m',
      '기본 라벨 텍스트 사이즈 입니다. <br/>컴포넌트의 타이틀 등으로 활용할 수 있습니다.<br/>(ex. 인풋/드롭다운/체크박스/라디오 타이틀 등)',
      'font-size-14<br/>14pt / 2.5rem',
      'font-size-14<br/>16pt / 1rem',
      'Medium',
      '1.5x',
    ],
    [
      'font-label-s',
      '가장 작은 크기의 버튼 요소 혹은 구성 요소 내 강조형 텍스트로 사용합니다. (ex. LNB 메뉴 헤더, 칩 등)',
      'font-size-12<br/>12pt / 0.75rem',
      'font-size-12<br/>12pt / 0.75rem',
      'Medium',
      '1.5x',
    ],
  ],
};
