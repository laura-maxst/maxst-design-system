import { Text, TextLabel } from '@components/text';
import React, { useEffect, useState } from 'react';
import { Checkbox } from '@components/checkbox';
import { SortLineIcon, SortLineBoldIcon } from '@maxst-designsystem/icons';
import { Button } from '@components/button';

interface TableProps {
  id?: string;
  size?: 'l' | 's';
  align?: 'left' | 'center' | 'right';
  columnData: {
    title: string;
    id: string;
    align?: 'left' | 'center' | 'right' | undefined;
    sort?: boolean;
    cellWidth?: string;
  }[];
  rowData: Array<{ [id: string]: any }>;
  tableMinWidth?: number;
  verticalHeadingMode?: boolean;
  leftHeadRow?: boolean;
  checkMode?: boolean;
  isRowCheck?: boolean;
  onClick?: (rowdata: any, value: any) => void;
}

const Table = ({
  id,
  size,
  align,
  columnData,
  rowData,
  tableMinWidth,
  verticalHeadingMode,
  leftHeadRow,
  checkMode,
  isRowCheck = false,
  onClick,
}: TableProps) => {
  const [cellKey, setCellKey] = useState<string[]>([]);
  const [cellAlign, setCellAlign] = useState<string[]>([]);
  const [rowDataSource, setRowDataSource] = useState<
    Array<{ [id: string]: any }>
  >([]);
  const [checkItemList, setCheckItemList] = useState<any>([]);
  const [checkBoxAllType, setCheckBoxAllType] = useState<
    'selected' | 'indeterminate'
  >('selected');
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const optionList = rowData.map((item) => {
    return item.id;
  });
  const [sortId, setSortId] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<string>('');

  const onChickSort = (thisColumn: any) => {
    setSortId(thisColumn);
    if (typeof thisColumn === 'string' || typeof thisColumn === 'number') {
      if (sortDirection === 'ascend') {
        const sortData = rowData.sort((a, b) => {
          return a[thisColumn] > b[thisColumn]
            ? -1
            : a[thisColumn] < b[thisColumn]
            ? 1
            : 0;
        });
        setRowDataSource(sortData);
        setSortDirection('descend');
      } else if (sortDirection === 'descend') {
        const sortData = rowData;
        setRowDataSource(sortData);
        setSortDirection('');
      } else {
        const sortData = rowData.sort((a, b) => {
          return a[thisColumn] < b[thisColumn]
            ? -1
            : a[thisColumn] > b[thisColumn]
            ? 1
            : 0;
        });
        setRowDataSource(sortData);
        setSortDirection('ascend');
      }
    }
  };

  const resolveOnClick = (rowdata: any, value: any) => {
    if (!onClick) {
      return;
    }
    onClick(rowdata, value);
  };

  const onCheckedAll = (e: any) => {
    if (!checkAll) {
      setCheckItemList(optionList);
      resolveOnClick(null, optionList);
    } else {
      setCheckItemList([]);
      resolveOnClick(null, []);
    }
    setCheckAll(!checkAll);
  };

  const onCheckedOne = (rowItem: any, id: string) => {
    const checkItems = [...checkItemList];
    if (checkItems.includes(id)) {
      checkItems.splice(checkItems.indexOf(id), 1);
    } else {
      checkItems.push(id);
    }
    setCheckItemList(checkItems);
    resolveOnClick(rowItem, checkItems);
    if (checkItems.length === 0) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }
  };

  const onCheckedRow = (e: any, rowItem: any, id: string) => {
    if (checkMode && isRowCheck) {
      if (!['INPUT', 'LABEL', 'svg'].includes(e.target.tagName)) {
        const clickRowCheckbox = document.getElementById(`${id}`);
        clickRowCheckbox && clickRowCheckbox.click();
      }
    } else {
      resolveOnClick(rowItem, id);
    }
  };

  useEffect(() => {
    if (checkItemList.length === rowDataSource.length) {
      setCheckBoxAllType('selected');
    } else {
      setCheckBoxAllType('indeterminate');
    }
  }, [checkItemList]);

  useEffect(() => {
    if (columnData) {
      const keyBucket = [];
      const alignBucket = [];
      for (const item of columnData) {
        keyBucket.push(item.id);
        alignBucket.push(item.align ? item.align : 'left');
      }
      setCellKey(keyBucket);
      setCellAlign(alignBucket);
    }
  }, [columnData]);

  useEffect(() => {
    if (rowData) {
      setRowDataSource(rowData);
    }
  }, [rowData]);

  return (
    <div className="mds-table-wrap">
      <table
        id={id}
        className={[
          `mds-table-${size ? size : 'l'}-${align ? align : 'left'}`,
          verticalHeadingMode && 'vertical-heading-mode',
        ].join(' ')}
        style={{ minWidth: tableMinWidth && `${tableMinWidth}px` }}
      >
        {!verticalHeadingMode && (
          <thead>
            <tr>
              {checkMode && (
                <th className="checkbox-mode">
                  <Checkbox
                    id={'check-all'}
                    size={'s'}
                    type={checkBoxAllType}
                    onClick={onCheckedAll}
                    checked={checkAll}
                  />
                </th>
              )}
              {columnData.map((columnItem) => {
                return (
                  <th
                    className={[
                      columnItem.align ? columnItem.align : 'left',
                    ].join(' ')}
                    key={columnItem.id}
                    id={columnItem.id}
                    style={{
                      width: columnItem.cellWidth && columnItem.cellWidth,
                    }}
                  >
                    <div className="th__content-wrap">
                      <TextLabel size="m">{columnItem.title}</TextLabel>
                      {columnItem.sort && (
                        <Button
                          type="ghost"
                          size="xs"
                          iconOnly={<SortLineBoldIcon />}
                          isIconMode={true}
                          onClick={() => onChickSort(columnItem.id)}
                          className={[
                            'sort-icon',
                            sortId === columnItem.id && sortDirection,
                          ].join(' ')}
                        />
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {rowDataSource.length !== 0 ? (
            rowDataSource.map((rowItem, rowItemIndex) => {
              return (
                <tr
                  key={String(rowItem.id)}
                  className={[
                    checkMode && checkItemList.includes(rowItem.id)
                      ? 'selected'
                      : '',
                  ].join(' ')}
                >
                  {verticalHeadingMode ? (
                    <th
                      id={columnData[rowItemIndex].id}
                      onClick={(e) =>
                        onCheckedRow(e, rowItem, String(rowItem.id))
                      }
                    >
                      <div>
                        <TextLabel size="m">
                          {columnData[rowItemIndex].title}
                        </TextLabel>
                      </div>
                    </th>
                  ) : (
                    checkMode && (
                      <td className="checkbox-mode">
                        <Checkbox
                          id={String(rowItem.id)}
                          size={'s'}
                          onClick={(e) => onCheckedOne(rowItem, e.id)}
                          checked={checkItemList.includes(rowItem.id)}
                        />
                      </td>
                    )
                  )}
                  {cellKey.map((cellKeyItem, cellKeyIndex) => {
                    return cellKeyIndex === 0 && leftHeadRow ? (
                      <th
                        onClick={(e) =>
                          onCheckedRow(e, rowItem, String(rowItem.id))
                        }
                        className={[
                          cellAlign[cellKeyIndex] !== 'left'
                            ? cellAlign[cellKeyIndex]
                            : '',
                        ].join(' ')}
                        key={rowItem.id + cellKeyItem}
                      >
                        <TextLabel size="m">{rowItem[cellKeyItem]}</TextLabel>
                      </th>
                    ) : (
                      <td
                        onClick={(e) =>
                          onCheckedRow(e, rowItem, String(rowItem.id))
                        }
                        className={[
                          cellAlign[cellKeyIndex] !== 'left'
                            ? cellAlign[cellKeyIndex]
                            : '',
                          typeof rowItem[cellKeyItem] !== 'string'
                            ? 'component-mode'
                            : '',
                        ].join(' ')}
                        key={rowItem.id + cellKeyItem}
                      >
                        {typeof rowItem[cellKeyItem] === 'string' ? (
                          <Text type="body" size="m">
                            {rowItem[cellKeyItem]}
                          </Text>
                        ) : (
                          rowItem[cellKeyItem]
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr className="no-data-row">
              <td
                colSpan={checkMode ? columnData.length + 1 : columnData.length}
              >
                <Text size="l" type="body">
                  There is no table data here.
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
