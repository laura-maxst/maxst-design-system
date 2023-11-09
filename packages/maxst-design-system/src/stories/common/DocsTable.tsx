import React from 'react';

interface DocsTableProps {
  headData: string[];
  bodyData: any[][];
  className: string;
}

function DocsTable({ headData, bodyData, className }: DocsTableProps) {
  return (
    <div className={['docs-table-wrap', className].join(' ')}>
      <table>
        {headData && (
          <thead>
            <tr>
              {headData.map((headItem) => {
                return <th key={headItem}>{headItem}</th>;
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {bodyData.map((bodyDepthOneItem, index) => {
            return (
              <tr key={'bodyRow1' + index}>
                {bodyDepthOneItem.map((bodyDepthTwoItem, index) => {
                  return (
                    <td key={'bodyRow2' + index}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: String(bodyDepthTwoItem),
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export { DocsTable };
