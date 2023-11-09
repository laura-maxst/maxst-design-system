import React from 'react';
import { DocsTable } from '@stories/common/DocsTable';
import {
  TextColorTableData,
  BackgroundColorTableData,
  BorderColorTableData,
  DividerColorTableData,
  DimmedColorTableData,
} from './SemanticColorData';

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
  // ColorChipArea,
};
