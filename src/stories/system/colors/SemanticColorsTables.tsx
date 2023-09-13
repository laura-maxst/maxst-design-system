import React from 'react';
import { DocsTable } from '@stories/common/DocsTable';

interface ColorChipAreaProps {
  mode: string;
  colorToken: string;
  colorCode: string;
}
const ColorChipArea = ({ mode, colorToken, colorCode }: ColorChipAreaProps) => {
  return `<div class=${mode}>
      <div
        class='table-color-chip bg-color-${colorToken}'
      >
        <p>
          <span>${colorToken}</span>
          <span>${colorCode}</span>
        </p>
      </div>
    </div>`;
};

function TextColorsTable() {
  return (
    <DocsTable
      headData={TextColorTableData.headData}
      bodyData={TextColorTableData.bodyData}
      className="semantic__color__table semantic__color-text__table color-palette-gray-50"
    />
  );
}

function BackgroundColorsTable() {
  return (
    <DocsTable
      headData={BackgroundColorTableData.headData}
      bodyData={BackgroundColorTableData.bodyData}
      className="semantic__color__table semantic__color-background__table"
    />
  );
}

function BorderColorsTable() {
  return (
    <DocsTable
      headData={BorderColorTableData.headData}
      bodyData={BorderColorTableData.bodyData}
      className="semantic__color__table semantic__color-border__table"
    />
  );
}

function DividerColorsTable() {
  return (
    <DocsTable
      headData={DividerColorTableData.headData}
      bodyData={DividerColorTableData.bodyData}
      className="semantic__color__table semantic__color-divider__table"
    />
  );
}

function DimmedColorsTable() {
  return (
    <DocsTable
      headData={DimmedColorTableData.headData}
      bodyData={DimmedColorTableData.bodyData}
      className="semantic__color__table semantic__color-dimmed__table"
    />
  );
}

export {
  TextColorsTable,
  BackgroundColorsTable,
  BorderColorsTable,
  DividerColorsTable,
  DimmedColorsTable,
};

// data
const TextColorTableData = {
  headData: ['Token', 'Role', 'Light mode', 'Dark mode'],
  bodyData: [
    [
      'color-text-default',
      '<p>기본 텍스트 색상입니다. 제목(Title, Subtitle) 및 본문(Body) 텍스트 색상으로 사용합니다.</p><p>콘텐츠에 대해 읽기 쉬운 대비를 제공합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-900',
        colorCode: '#222222',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-900',
        colorCode: '#FDFDFD',
      }),
    ],
    [
      'color-text-default-reverse',
      '<p>기본 텍스트에 대비되는 색상입니다. 컴포넌트에서 필요시 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-50',
        colorCode: '#FAFAFA',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-50',
        colorCode: '#141212',
      }),
    ],
    [
      'color-text-sub',
      '<p>두 번째 위계의 텍스트 색상입니다. 상대적으로 덜 중요한 정보에 사용합니다.</p><p>본문의 하위 위계인 서브 본문(Small) 텍스트 색상으로 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-700',
        colorCode: '#606060',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-700',
        colorCode: '#D9D9D9',
      }),
    ],
    [
      'color-text-subtlest',
      '<p>text-sub보다 하위 위계의 텍스트 색상입니다.</p><p>전달은 필요하나 다소 부수적인 정보나 콘텐츠에 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-500',
        colorCode: '#9E9E9E',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-500',
        colorCode: '#A3A3A3',
      }),
    ],
    [
      'color-text-disabled',
      '<p>가장 약한 텍스트 색상입니다. 비활성화 텍스트 또는 입력 전 텍스트, 캡션 등에서 사용합니다.</p><p class="text-error">주요 정보에는 절대 사용하지 않습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-400',
        colorCode: '#C2C2C2',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-400',
        colorCode: '#8E8E8E',
      }),
    ],
    [
      'color-text-error',
      '<p>취소, 탈퇴 등 주의 및 에러 상태 텍스트 색상입니다.</p><p>본문 텍스트 또는 컴포넌트에서 필요시 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-red',
        colorCode: '#EA1B1B',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-red',
        colorCode: '#EE3B3B',
      }),
    ],
    [
      'color-text-error-accent',
      '<p>에러 상태를 강조하는 텍스트 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-red-accent',
        colorCode: '#D80516',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-red-accent',
        colorCode: '#E70F21',
      }),
    ],
    [
      'color-text-information',
      '<p>보성 텍스트, 바로가기, URL 등에 사용하는 텍스트 색상입니다.</p><p>필요에 따라 상태값이 필요한 경우 추가해서 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-blue',
        colorCode: '#109EFF',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-blue',
        colorCode: '#24A6FF',
      }),
    ],
    [
      'color-text-accent',
      '<p>문장 내에 강조해야 할 중요 포인트 (ex. *,※,● 등)에 사용합니다.</p><p class="text-error">사용자의 피로도를 줄이기 위해 사용성에 집중해 최소화하여 사용합니다.</p>',

      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-mint-500',
        colorCode: '#1DD9E7',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-mint-500',
        colorCode: '#1DD9E7',
      }),
    ],
    [
      'color-text-success',
      '<p>사용자의 액션이 성공했을 시 나오는 텍스트에 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-green',
        colorCode: '#00C400',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-green',
        colorCode: '#03CD03',
      }),
    ],
    [
      'color-text-warning',
      '<p>경고 및 로딩 상태의 텍스트에 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-orange',
        colorCode: '#F97F0E',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-orange',
        colorCode: '#F98D0E',
      }),
    ],
  ],
};
const BackgroundColorTableData = {
  headData: ['Token', 'Role', 'Light mode', 'Dark mode'],
  bodyData: [
    [
      'color-background-base',
      '<p>기본 배경 색상입니다.</p><p>레이어를 분리하는 UI 디자인의 경우 첫 번째 위계 배경에서 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-white',
        colorCode: '#FFFFFF',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-50',
        colorCode: '#141212',
      }),
    ],
    [
      'color-background-2nd-base',
      '<p>두 번째 기본 배경 색상입니다.</p><p>기본 배경 색상에서 특정 레이어를 분리해야 할 때 두 번째 위계 배경으로 사용합니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-100',
        colorCode: '#F5F5F5',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-100',
        colorCode: '#272626',
      }),
    ],
    [
      'color-background-ui-base',
      '<p>UI 구성 항목의 구분에 대한 배경 색상입니다.</p><p>기본 배경 색상에서 특정 컴포넌트를 분리해야 할 때 사용합니다. (ex.Card UI 배경)</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-50',
        colorCode: '#FAFAFA',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-100',
        colorCode: '#272626',
      }),
    ],
    [
      'color-background-ui-middle',
      '<p>UI 구성 항목의 중간 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-500',
        colorCode: '#9E9E9E',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-500',
        colorCode: '#A3A3A3',
      }),
    ],
    [
      'color-background-ui-middle-accent',
      '<p>background-ui-middle 색상의 강조 상태를 나타내는 배경 색상입니다.</p><p>background-ui-middle의 hover/selceted/pressed 색상으로 사용할 수 있습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-700',
        colorCode: '#606060',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-700',
        colorCode: '#D9D9D9',
      }),
    ],
    [
      'color-background-overlay',
      '<p>배경 위에 올라가는 컴포넌트 등에서 사용할 수 있습니다. (ex: Dropdown Menu 배경)</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-white',
        colorCode: '#FFFFFF',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-200',
        colorCode: '#343434',
      }),
    ],
    [
      'color-background-overlay-reverse',
      '<p>color-background-overlay의 반전 버전입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-800',
        colorCode: '#424242',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-900',
        colorCode: '#FDFDFD',
      }),
    ],
    [
      'color-background-overlay-accent',
      '<p>background-overlay 색상의 강조 상태를 나타내는 배경 색상입니다. </p><p>background-overlay의 hover/selected/pressed 색상으로 사용할 수 있습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-50',
        colorCode: '#FAFAFA',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-300',
        colorCode: '#4F4F50',
      }),
    ],
    [
      'color-background-primary',
      '<p>목표 달성을 위해 사용자의 반응 혹은 행동을 유도하는 배경 색상입니다.</p><p>button-primary 색상으로 사용할 수 있습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-mint-500',
        colorCode: '#1DD9E7',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-mint-500',
        colorCode: '#1DD9E7',
      }),
    ],
    [
      'color-background-primary-accent',
      '<p>background-primary 색상의 강조 상태를 나타내는 배경 색상입니다.</p><p>background-primary의 hover/selected/pressed 색상으로 사용할 수 있습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-mint-800',
        colorCode: '#0EADCA',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-mint-200',
        colorCode: '#0FBED7',
      }),
    ],
    [
      'color-background-secondary',
      '<p>primary를 보조하는 두 번째 기본 배경 색상입니다.</p><p>button-secondary 색상으로 사용할 수 있습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-700',
        colorCode: '#606060',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-700',
        colorCode: '#D9D9D9',
      }),
    ],
    [
      'color-background-secondary-accent',
      '<p>background-secondary 색상의 강조 상태를 나타내는 배경 색상입니다.</p><p>background-secondary의 hover/selected/pressed 색상으로 사용할 수 있습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-800',
        colorCode: '#424242',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-800',
        colorCode: '#E9E9E9',
      }),
    ],
    [
      'color-background-tertiary',
      '<p>세 번째 기본 배경 색상입니다.</p><p>button-secondary의 line 배경 색상으로 사용할 수 있습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-white',
        colorCode: '#FFFFFF',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-50',
        colorCode: '#141212',
      }),
    ],
    [
      'color-background-disabled',
      '<p>background-primary, secondary 색상의 비활성화 상태를 나타내는 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-100',
        colorCode: '#F5F5F5',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-200',
        colorCode: '#343434',
      }),
    ],
    [
      'color-background-error',
      '<p>에러 상태의 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-red',
        colorCode: '#EA1B1B',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-red',
        colorCode: '#EE3B3B',
      }),
    ],
    [
      'color-background-error-accent',
      '<p>에러 상태를 강조하는 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-red-accent',
        colorCode: '#D80516',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-red-accent',
        colorCode: '#E70F21',
      }),
    ],
    [
      'color-background-error-light',
      '<p>에러 상태의 연한 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-red-light',
        colorCode: '#FFE9E9',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-red-light',
        colorCode: '#4E0B0B',
      }),
    ],
    [
      'color-background-warning',
      '<p>경고 상태의 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-orange',
        colorCode: '#F97F0E',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-orange',
        colorCode: '#F98D0E',
      }),
    ],
    [
      'color-background-warning-light',
      '<p>경고 상태의 연한 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-orange-light',
        colorCode: '#FFEBD0',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-orange-light',
        colorCode: '#4D2E06',
      }),
    ],
    [
      'color-background-information',
      '<p>정보를 전달하는 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-blue',
        colorCode: '#109EFF',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-blue',
        colorCode: '#24A6FF',
      }),
    ],
    [
      'color-background-information-light',
      '<p>정보를 전달하는 연한 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-blue-light',
        colorCode: '#CEF1FF',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-blue-light',
        colorCode: '#023245',
      }),
    ],
    [
      'color-background-success',
      '<p>성공 상태의 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-green',
        colorCode: '#00C400',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-green',
        colorCode: '#03CD03',
      }),
    ],
    [
      'color-background-success-light',
      '<p>성공 상태의 연한 배경 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-green-light',
        colorCode: '#DBF1DB',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-green-light',
        colorCode: '#073207',
      }),
    ],
  ],
};
const BorderColorTableData = {
  headData: ['Token', 'Role', 'Light mode', 'Dark mode'],
  bodyData: [
    [
      'color-border-default',
      '<p>영역을 구분하는 기본 테두리 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-400',
        colorCode: '#C2C2C2',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-400',
        colorCode: '#8E8E8E',
      }),
    ],
    [
      'color-border-accent',
      '<p>강조하기 위한 테두리 색상입니다.</p><p>border-dafault의 hover/active 색상으로 사용할 수 있습니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-900',
        colorCode: '#222222',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-900',
        colorCode: '#FDFDFD',
      }),
    ],
    [
      'color-border-disabled',
      '<p>비활성화된 테두리 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-300',
        colorCode: '#DEDEDE',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-300',
        colorCode: '#4F4F50',
      }),
    ],
    [
      'color-border-error',
      '<p>에러 상태의 테두리 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-red',
        colorCode: '#EA1B1B',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-red',
        colorCode: '#EE3B3B',
      }),
    ],
    [
      'color-border-error-accent',
      '<p>에러 상태를 강조하는 테두리 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-red-accent',
        colorCode: '#D80516',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-red-accent',
        colorCode: '#E70F21',
      }),
    ],
    [
      'color-border-success',
      '<p>사용자의 액션이 성공했을 시 테두리 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-green',
        colorCode: '#00C400',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-green',
        colorCode: '#03CD03',
      }),
    ],
  ],
};

// sample
const DividerColorTableData = {
  headData: ['Token', 'Role', 'Light mode', 'Dark mode'],
  bodyData: [
    [
      'color-divider-default',
      '<p>기본 구분 라인 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-300',
        colorCode: '#DEDEDE',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-400',
        colorCode: '#8E8E8E',
      }),
    ],
    [
      'color-divider-accent',
      '<p>특정 부분을 강조해 구분하기 위한 라인 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'palette-gray-500',
        colorCode: '#9E9E9E',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'palette-gray-900',
        colorCode: '#FDFDFD',
      }),
    ],
  ],
};

const DimmedColorTableData = {
  headData: ['Token', 'Role', 'Light mode', 'Dark mode'],
  bodyData: [
    [
      'color-dimmed-85',
      '<p>요소를 좀 더 강조하기 위한 불투명도 색상입니다.</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'dimmed-85',
        colorCode: 'rgba(0, 0, 0, 0.85)',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'dimmed-85',
        colorCode: 'rgba(0, 0, 0, 0.85)',
      }),
    ],
    [
      'color-dimmed-60',
      '<p>기본 불투명도 색상입니다. Pop up 요소가 올라올 때 사용합니다. (ex.modal)</p>',
      ColorChipArea({
        mode: 'light',
        colorToken: 'dimmed-60',
        colorCode: 'rgba(0, 0, 0, 0.60),',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: 'dimmed-60',
        colorCode: 'rgba(0, 0, 0, 0.60),',
      }),
    ],
  ],
};
// sample
const ColorTableData = {
  headData: ['Token', 'Role', 'Light mode', 'Dark mode'],
  bodyData: [
    [
      '',
      '<p></p><p></p>',
      ColorChipArea({
        mode: 'light',
        colorToken: '',
        colorCode: '',
      }),
      ColorChipArea({
        mode: 'dark',
        colorToken: '',
        colorCode: '',
      }),
    ],
  ],
};
