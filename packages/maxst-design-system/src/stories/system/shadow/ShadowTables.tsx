import React from 'react';
import { DocsTable } from '@stories/common/DocsTable';

interface ShadowChipAreaProps {
  mode: string;
  shadowCode: string;
  shadowToken: string;
}
const ShadowChipArea = ({
  mode,
  shadowCode,
  shadowToken,
}: ShadowChipAreaProps) => {
  return `<div class=${mode}>
      <div
        class='table-shadow-chip'
      >
        <div class='shadow-sample-box ${shadowToken}'></div>
        <p>
          <span>${shadowCode}</span>
        </p>
      </div>
    </div>`;
};

function ShadowTable() {
  return (
    <DocsTable
      headData={ShadowTableData.headData}
      bodyData={ShadowTableData.bodyData}
      className="shadow__table"
    />
  );
}

export { ShadowTable };

// data
const ShadowTableData = {
  headData: ['Token', 'Role', 'Light mode', 'Dark mode'],
  bodyData: [
    [
      'shadow-level1',
      '<p>Level 1 위계에 사용할 수 있는 그림자 입니다.</p><p>콘텐츠 속성의 컴포넌트에 활용할 수 있습니다.</p><p>ex. 배너, 카드형 콘텐츠 등</p>',
      ShadowChipArea({
        mode: 'light',
        shadowCode:
          'palette-black (#000000)\n0px 0px 2px (16%)\n0px 2px 4px (12%)',
        shadowToken: 'shadow-level1',
      }),
      ShadowChipArea({
        mode: 'dark',
        shadowCode:
          'palette-black (#000000)\n0px 0px 2px (16%)\n0px 2px 4px (12%)',
        shadowToken: 'shadow-level1',
      }),
    ],
    [
      'shadow-level2',
      '<p>Level 2 위계에 사용할 수 있는 그림자 입니다.</p><p>level 3 보단 위계가 낮은 팝업 속성의 컴포넌트에 활용할 수 있습니다.</p><p>ex. 네비게이션, 드롭다운, 메뉴, 툴팁, 스낵바 등</p>',
      ShadowChipArea({
        mode: 'light',
        shadowCode:
          'palette-black (#000000)\n0px 0px 4px (16%)\n0px 4px 8px (12%)',
        shadowToken: 'shadow-level2',
      }),
      ShadowChipArea({
        mode: 'dark',
        shadowCode:
          'palette-black (#000000)\n0px 0px 4px (16%)\n0px 4px 8px (12%)',
        shadowToken: 'shadow-level2',
      }),
    ],
    [
      'shadow-level3',
      '<p>Level 3 위계에 사용할 수 있는 그림자 입니다.</p><p>상위 팝업 속성의 컴포넌트에 활용할 수 있습니다.</p><p>ex. 모달, FAB(플로팅 액션 버튼) 등</p>',
      ShadowChipArea({
        mode: 'light',
        shadowCode:
          'palette-black (#000000)\n0px 0px 6px (16%)\n0px 6px 10px 2px (12%)',
        shadowToken: 'shadow-level3',
      }),
      ShadowChipArea({
        mode: 'dark',
        shadowCode:
          'palette-black (#000000)\n0px 0px 6px (16%)\n0px 6px 10px 2px (12%)',
        shadowToken: 'shadow-level3',
      }),
    ],
  ],
};
