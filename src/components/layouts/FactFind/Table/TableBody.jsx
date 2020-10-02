import React from 'react'
import { TableRow } from './TableRow';

export const TableBody = ({ tableRows, ...restProps }) => (
  <tbody className="tableBody">
    {tableRows.map(row => (
      <TableRow key={row.id}>
        {row.component}
      </TableRow>
    ))}
  </tbody>
);
