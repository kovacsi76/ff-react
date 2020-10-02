import React, { memo, useMemo, useRef, useState } from 'react'
import { TableBody } from './TableBody';
import { TableData } from './TableData';
import { TableFoot } from './TableFoot';
import { TableHead } from './TableHead';

const renderTableCaption = ({ caption }) => (
  caption &&
    <caption>{caption}</caption>
);

const renderTableHead = ({ headings, dynamic }) => (
  <TableHead headings={headings} dynamic={dynamic} />
);

const renderTableBody = ({ tableRows }) => (
  <TableBody tableRows={tableRows} />
);

const renderTableFoot = ({colspan, dynamic, addRow}) => (
  <TableFoot dynamic={dynamic} colspan={colspan} addRow={addRow} />
);

const addTableRow = ({ data, nextRowIndex, tableRows, setTableRows, ...restArgs }) => () => {
  const tableRow = Array.isArray(data.columns) &&
    {
      id: nextRowIndex.current,
      component: <TableData
        key={nextRowIndex.current}
        id={nextRowIndex.current}
        columns={data.columns}
        dynamic={data.dynamic}
        removeRow={removeTableRow({ rowIndex: nextRowIndex.current, setTableRows })}
      />
    };

  if (tableRow) {
    nextRowIndex.current++;
    setTableRows(prevTableRows => [...prevTableRows, tableRow]);
  }
};

const removeTableRow = ({ rowIndex, setTableRows, ...restArgs }) => () => {
  setTableRows(prevTableRows => {
    const rows = prevTableRows.filter(row => row.id !== rowIndex);

    return rows;
  });
};

const getHeadings = ({ columns }) =>(
  columns.map(col => ({id: col.data.id, label: col.data.header}))
);

const getColspan = ({ headings, dynamic }) =>(
  headings.length + (dynamic ? 1 : 0)
);

export const Table = memo(({ data, children, ...restProps }) => {
  const nextRowIndex = useRef(1);
  const memoHeadings = useMemo(
    () => getHeadings({columns: data.columns}),
    [data.columns]
  );
  const [headings] = useState(() => memoHeadings);
  const memoColspan = useMemo(
    () => getColspan({headings, dynamic: data.dynamic}),
    [headings, data.dynamic]
  );
  const [colspan] = useState(() => memoColspan);
  const [tableRows, setTableRows] = useState([]);

  return (
    <table className="table">
      {renderTableCaption({caption: data.caption})}
      {renderTableHead({
        headings,
        dynamic: data.dynamic
      })}
      {renderTableBody({
        tableRows,
        removeRow: removeTableRow({ nextRowIndex })
      })}
      {renderTableFoot({
        dynamic: data.dynamic,
        colspan,
        addRow: addTableRow({ data, nextRowIndex, tableRows, setTableRows })
      })}
    </table>
  );
});
