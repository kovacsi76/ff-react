import React from 'react'

export const TableRow = ({ id, children, ...restProps }) => (
  <tr key={id} className="tableBodyRow">
    {children}
  </tr>
);
