import React from 'react'

export const TableHead = ({ headings, dynamic, ...restProps }) => (
  Array.isArray(headings) && (
    <thead className="tableHead">
      <tr className="tableHeadRow">
        {headings.map(heading => (
          <th
            key={heading.id}
            id={heading.id}
            className="tableHeadColumn"
          >
            {heading.label}
          </th>
        ))}
        {dynamic &&
          <th className="tableHeadColumn"></th>
        }
      </tr>
    </thead>
  )
);
